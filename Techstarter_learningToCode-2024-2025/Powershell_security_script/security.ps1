# Windows Deep Security Audit Script (Lynis-Stil)
# Autor: ChatGPT / OpenAI
# Version: 1.2 - Fehlerbehebungen und Optimierungen

$timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
$reportPath = "$env:USERPROFILE\Desktop\SecurityAudit_$timestamp.txt"
"### Windows Security Audit Report - $timestamp" | Out-File $reportPath

# Admin-Prüfung
if (-not ([Security.Principal.WindowsPrincipal] `
  [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole(`
  [Security.Principal.WindowsBuiltInRole]::Administrator)) {
    Write-Warning "Bitte führe dieses Skript als Administrator aus!"
    exit
}

function Write-Section {
    param ($title)
    "`n`n#### $title `n" | Out-File $reportPath -Append
}

function Write-Result {
    param ($label, $result)
    "$($label): $($result)" | Out-File $reportPath -Append
}

### SYSTEM BASIS ###
Write-Section "System Information"
Write-Result "Hostname" $env:COMPUTERNAME
Write-Result "OS Version" (Get-CimInstance Win32_OperatingSystem).Caption
Write-Result "Install Date" (Get-CimInstance Win32_OperatingSystem).InstallDate
Write-Result "Last Boot" (Get-CimInstance Win32_OperatingSystem).LastBootUpTime

### PATCHES ###
Write-Section "Recent Patches (HotFixes)"
Get-HotFix | Sort-Object InstalledOn -Descending | Select-Object -First 5 | Format-Table -AutoSize | Out-String | Out-File $reportPath -Append

### ADMIN & ACCOUNTS ###
Write-Section "Admin Group Members"
try {
    $adminGroup = (Get-LocalGroup | Where-Object { $_.SID -like "*-500" }).Name
    Get-LocalGroupMember -Group $adminGroup | Out-File $reportPath -Append
} catch {
    "Failed." | Out-File $reportPath -Append
}

Write-Section "Enabled Local Accounts"
Get-LocalUser | Where-Object { $_.Enabled } | Format-Table Name, LastLogon | Out-String | Out-File $reportPath -Append

### BITLOCKER ###
Write-Section "BitLocker Status"
try {
    Get-BitLockerVolume | Select-Object MountPoint, VolumeStatus, ProtectionStatus | Format-Table -AutoSize | Out-String | Out-File $reportPath -Append
} catch {
    "No BitLocker volumes found." | Out-File $reportPath -Append
}

### ANTIVIRUS ###
Write-Section "Antivirus Status (WMI)"
Get-CimInstance -Namespace "root\SecurityCenter2" -ClassName AntivirusProduct | Select displayName, productState, pathToSignedProductExe | Format-List | Out-File $reportPath -Append

### FIREWALL ###
Write-Section "Firewall Status"
Get-NetFirewallProfile | Format-Table Name, Enabled, DefaultInboundAction | Out-String | Out-File $reportPath -Append

### NETWORK ###
Write-Section "Listening TCP Ports"
Get-NetTCPConnection -State Listen | Sort-Object LocalPort | Format-Table LocalAddress, LocalPort, OwningProcess -AutoSize | Out-String | Out-File $reportPath -Append

### SERVICES ###
Write-Section "Auto-Start Services (Unsigned)"
Get-CimInstance Win32_Service | Where-Object { $_.StartMode -eq "Auto" } | ForEach-Object {
    $file = $_.PathName -replace '"',''
    if (Test-Path $file) {
        $sig = (Get-AuthenticodeSignature $file).Status
        if ($sig -ne "Valid") {
            Write-Result $_.Name "UNSIGNED ($sig)"
        }
    }
}

### POWERSHELL LOGGING ###
Write-Section "PowerShell Logging"
$p = Get-ItemProperty "HKLM:\SOFTWARE\Policies\Microsoft\Windows\PowerShell\ScriptBlockLogging" -ErrorAction SilentlyContinue
Write-Result "ScriptBlockLogging Enabled" $p.EnableScriptBlockLogging

### SMBv1 ###
Write-Section "SMBv1 Status"
try {
    Get-WindowsOptionalFeature -Online -FeatureName SMB1Protocol | Select FeatureName, State | Format-List | Out-File $reportPath -Append
} catch {
    "Failed to check SMBv1 status" | Out-File $reportPath -Append
}

### RDP ###
Write-Section "Remote Desktop Status"
$rdp = Get-ItemProperty 'HKLM:\System\CurrentControlSet\Control\Terminal Server'
Write-Result "RDP Enabled" ($(if ($rdp.fDenyTSConnections -eq 0) { "Yes" } else { "No" }))

### GPO BASED SETTINGS ###
Write-Section "Security-Related GPO Settings"
$settings = @(
    "EnableLUA", 
    "ConsentPromptBehaviorAdmin", 
    "EnableSecureUIAPaths", 
    "FilterAdministratorToken"
)
foreach ($s in $settings) {
    try {
        $val = (Get-ItemProperty "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System").$s
        Write-Result $s $val
    } catch { Write-Result $s "N/A" }
}

### FILESHARING ###
Write-Section "Shared Folders (SMB)"
try {
    Get-SmbShare | Where-Object { $_.Name -ne "IPC$" } | Format-Table Name, Path, Description | Out-String | Out-File $reportPath -Append
} catch {
    "Error retrieving SMB share information." | Out-File $reportPath -Append
}

### LSA PROTECTION ###
Write-Section "LSA Protection (Credential Guard)"
try {
    $lsa = Get-ItemProperty "HKLM:\SYSTEM\CurrentControlSet\Control\Lsa"
    Write-Result "RunAsPPL (LSA Protection)" $lsa.RunAsPPL
} catch {
    Write-Result "LSA Protection" "N/A"
}

### MEMORY DUMPS ###
Write-Section "Memory Dump Configuration"
try {
    $dump = Get-ItemProperty "HKLM:\SYSTEM\CurrentControlSet\Control\CrashControl"
    Write-Result "CrashDumpEnabled" $dump.CrashDumpEnabled
} catch {
    Write-Result "CrashDumpEnabled" "N/A"
}

### VOLUME SHADOW COPIES ###
Write-Section "Volume Shadow Copies"
try {
    Get-WmiObject Win32_ShadowCopy | Select CreationTime, VolumeName | Format-Table | Out-String | Out-File $reportPath -Append
} catch {
    "No shadow copies found." | Out-File $reportPath -Append
}

### SCHEDULED TASKS ###
Write-Section "Suspicious Scheduled Tasks"
try {
    Get-ScheduledTask | Where-Object { $_.TaskPath -notlike "\Microsoft*" } | Format-Table TaskName, TaskPath, State | Out-String | Out-File $reportPath -Append
} catch {
    "Error retrieving scheduled tasks." | Out-File $reportPath -Append
}

### EVENTLOG ERRORS ###
Write-Section "System Event Log - Errors (Last 24h)"
try {
    Get-WinEvent -FilterHashtable @{LogName='System'; Level=2; StartTime=(Get-Date).AddHours(-24)} -MaxEvents 20 | Format-Table TimeCreated, Id, Message -Wrap | Out-String | Out-File $reportPath -Append
} catch {
    "Error retrieving system event log." | Out-File $reportPath -Append
}

"==== AUDIT COMPLETE ====" | Out-File $reportPath -Append
Start-Process notepad.exe $reportPath
