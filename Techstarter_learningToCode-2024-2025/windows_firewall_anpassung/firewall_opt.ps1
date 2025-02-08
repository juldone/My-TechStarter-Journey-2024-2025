# Firewall-Regeln optimieren
# Das Skript muss mit Administratorrechten ausgeführt werden!

# Blockiere gefährliche Ports
$blockPorts = @(135, 139, 445, 5357, 5040, 7680, 9100, 3702, 5353, 2869, 1900, 3389, 3387, 3392)
foreach ($port in $blockPorts) {
    New-NetFirewallRule -DisplayName "Block Port $port" -Direction Inbound -Action Block -Protocol TCP -LocalPort $port -Enabled True -Profile Any
    Write-Host "Port $port wurde blockiert."
}

# Entferne unnötige Regeln (z. B. Docker, wenn nicht benötigt)
$removeRules = @("Docker Desktop Backend", "Hyper-V", "Microsoft Edge (mDNS-In)", "Google Chrome (mDNS-In)")
foreach ($rule in $removeRules) {
    Remove-NetFirewallRule -DisplayName $rule -ErrorAction SilentlyContinue
    Write-Host "Regel '$rule' wurde entfernt (falls vorhanden)."
}

# Erlaube wichtige Programme (Outlook, Teams, VS Code, Postman, Node.js)
$allowPrograms = @(
    @{Name="Microsoft Office Outlook"; Path="C:\Program Files\Microsoft Office\root\Office16\outlook.exe"},
    @{Name="Microsoft Teams"; Path="C:\Program Files\WindowsApps\MSTeams_*\ms-teams.exe"},
    @{Name="Visual Studio Code"; Path="C:\Users\julia\AppData\Local\Programs\Microsoft VS Code\Code.exe"},
    @{Name="Postman"; Path="C:\Users\julia\AppData\Local\Postman\app-11.18.0\Postman.exe"},
    @{Name="Node.js"; Path="C:\Program Files\nodejs\node.exe"}
)
foreach ($app in $allowPrograms) {
    New-NetFirewallRule -DisplayName $app.Name -Direction Outbound -Action Allow -Program $app.Path -Enabled True -Profile Any
    Write-Host "Programm '$($app.Name)' wurde erlaubt."
}

Write-Host "Firewall-Konfiguration abgeschlossen!"
