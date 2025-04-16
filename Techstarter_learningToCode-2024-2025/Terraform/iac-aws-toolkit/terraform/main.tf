provider "aws" {
  region = "eu-central-1"
}

resource "aws_security_group" "allow_ssh" {
  name        = "allow_ssh"
  description = "Allow SSH inbound traffic"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  # Erlaubt SSH von überall. Für zusätzliche Sicherheit kannst du auch deine eigene IP angeben.
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "web" {
  ami           = "ami-03250b0e01c28d196"  # Amazon Linux 2 (eu-central-1)
  instance_type = "t2.micro"
  key_name      = "test"                    # Name des SSH-Schlüssels

  security_groups = [aws_security_group.allow_ssh.name]  # Verknüpft die Security Group mit der EC2-Instanz

  tags = {
    Name = "AnsibleEC2"
  }
}
