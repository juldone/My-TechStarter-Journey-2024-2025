#!/bin/bash

# Starte Terraform Deployment
echo "🚀 Starte Terraform Deployment..."
cd terraform
terraform init -input=false
terraform apply -auto-approve
cd ..

# Erstelle oder überschreibe die ansible.cfg
echo "📄 Erstelle ansible.cfg..."
cat <<EOL > ansible.cfg
[defaults]
deprecation_warnings = False
host_key_checking = False
ansible_become_flags = "-E"
collections_paths = ./collections

[privilege_escalation]
become=True
become_user=root
become_method=sudo
EOL

# Stelle sicher, dass die Collection community.postgresql installiert ist
echo "📦 Installiere Ansible Collection community.postgresql..."
ansible-galaxy collection install community.postgresql:>=3.2.0 --force

# Warte auf die EC2-Instanz
echo "⏳ Warte 60 Sekunden, bis die Instanz vollständig hochgefahren ist..."
sleep 60

# Hole die öffentliche IP der EC2-Instanz
PUBLIC_IP=$(terraform -chdir=terraform output -raw public_ip)

if [ -z "$PUBLIC_IP" ]; then
  echo "❌ Fehler: Keine IP-Adresse für die EC2-Instanz gefunden!"
  exit 1
fi

echo "🌐 Gefundene öffentliche IP: $PUBLIC_IP"

# Überprüfe SSH-Verbindung
echo "🔑 Überprüfe SSH-Verbindung zu $PUBLIC_IP..."
ssh -o StrictHostKeyChecking=no -i /home/jd1/.ssh/NUN ubuntu@$PUBLIC_IP 'echo "✅ Verbindung erfolgreich!"' || {
  echo "❌ SSH-Verbindung fehlgeschlagen!"
  exit 1
}

# Starte Ansible Playbook
echo "📦 Starte Ansible-Playbook zur PostgreSQL-Installation..."
ANSIBLE_HOST_KEY_CHECKING=False ansible-playbook ansible/playbook.yml \
  -i "$PUBLIC_IP," \
  -u ubuntu \
  --private-key /home/jd1/.ssh/NUN \
  --extra-vars "ansible_user=ubuntu"

# PostgreSQL-Port prüfen
echo "🔍 Prüfe PostgreSQL-Port 5432 auf $PUBLIC_IP..."
if nc -zv "$PUBLIC_IP" 5432 2>/dev/null; then
  echo "✅ PostgreSQL ist erreichbar auf $PUBLIC_IP:5432"
else
  echo "❌ PostgreSQL ist NICHT erreichbar!"
  exit 1
fi

# Test: Datenbankverbindung
echo "🔧 Führe Datenbankverbindungstest aus..."
ssh -i /home/jd1/.ssh/NUN ubuntu@$PUBLIC_IP << 'EOF'
sudo -u postgres psql -c '\l' | grep mydatabase && echo "✅ Datenbank 'mydatabase' wurde erfolgreich erstellt." || echo "❌ Datenbank nicht gefunden!"
EOF

echo "🎉 Deployment abgeschlossen!"
