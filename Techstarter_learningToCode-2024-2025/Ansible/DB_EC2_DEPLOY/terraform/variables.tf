variable "aws_region" {
  default = "eu-central-1"
}

variable "instance_type" {
  default = "t2.micro"
}

variable "key_name" {
  default = "NUN"
}

variable "public_key_path" {
  default = "/home/jd1/.ssh/NUN.pub"
}
