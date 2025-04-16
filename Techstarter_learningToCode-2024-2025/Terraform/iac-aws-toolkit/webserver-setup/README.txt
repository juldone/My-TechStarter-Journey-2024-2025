# AWS EC2 mit Terraform + Ansible

## Voraussetzungen:
- AWS CLI konfiguriert (z. B. `aws configure`)
- Terraform installiert
- Ansible installiert
- EC2 Keypair lokal gespeichert (z. B. ~/.ssh/my-key.pem)

## Schritte:

1. Bearbeite `terraform/main.tf` und setze dein KeyPair ein.
2. Starte die Instanz:
   cd terraform
   terraform init
   terraform apply

3. Notiere dir die öffentliche IP aus der Terraform-Ausgabe.

4. Trage die IP in `ansible/hosts.ini` ein.

5. Führe Ansible aus:
   cd ../ansible
   ansible-playbook -i hosts.ini playbook.yml
