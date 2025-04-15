provider "aws" {
  region = var.aws_region
}

# Dynamische Auswahl der aktuellsten Ubuntu 22.04 LTS AMI
data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"] # Canonical

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
}

# SSH Key für EC2-Login
resource "aws_key_pair" "deployer" {
  key_name   = var.key_name
  public_key = file(var.public_key_path)
}

# Security Group für PostgreSQL, SSH, HTTP, HTTPS
resource "aws_security_group" "postgres_sg" {
  name        = "postgres_sg"
  description = "Allow SSH, HTTP, HTTPS, and PostgreSQL access"

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTPS"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "PostgreSQL"
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "PostgreSQL-SecurityGroup"
  }
}

# EC2-Instanz für PostgreSQL
resource "aws_instance" "postgres" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = var.instance_type
  key_name      = aws_key_pair.deployer.key_name
  security_groups = [aws_security_group.postgres_sg.name]

  tags = {
    Name = "PostgreSQL-Instance"
  }

  provisioner "local-exec" {
    command = "echo ${self.public_ip} > ../ansible/hosts"
  }
}

# Output der IP-Adresse
output "public_ip" {
  description = "Die öffentliche IP-Adresse der PostgreSQL EC2-Instanz"
  value       = aws_instance.postgres.public_ip
}
