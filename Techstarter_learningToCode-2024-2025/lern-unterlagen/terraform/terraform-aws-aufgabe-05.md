# Aufgabe 1: Günstige Web-App-Architektur in AWS + wie ihr sie mit Terraform aufbaut

Ihr sollt eine einfache Webanwendung in AWS realisieren – mit **Frontend**, **Backend** und **Datenbank**.  
Das Ziel: Eine **möglichst kostengünstige** Lösung, die trotzdem funktioniert, skalierbar ist und auch für kleinere reale Projekte taugt.

---

## Teil 1: Architektur entwerfen

Überlegt euch selbstständig:

1. Welche Komponenten ihr benötigt und wie eure Architektur aussehen könnte (gern als Skizze, Miro-Board, Notiz oder Diagramm).
2. Welche Cloud-Dienste ihr nutzen würdet – und warum gerade diese.
3. Warum genau **diese Kombination günstig ist** – denkt dabei z. B. an Nutzungskosten, Skalierung, Flexibilität etc.
4. Ob es Tools oder Plattformen gibt, die euch unterstützen könnten.

> **Bonus**: Gibt es eine minimalistische Lösung, die trotzdem alles Wesentliche abdeckt?

---

## Teil 2: Und jetzt mit Terraform!

Stellt euch nun vor, ihr müsstet euer Setup **automatisiert und reproduzierbar** bereitstellen.  
Wie würdet ihr das mit **Terraform** umsetzen?

1. Überlegt selbst: Welche Ressourcen müssten angelegt werden? Wie könntet ihr das strukturieren?
2. Welche Terraform-Provider, Module oder Tricks wären hilfreich?
3. Überlegt zunächst selbst – ganz ohne Google.  
   Danach dürft ihr natürlich **recherchieren, KI nutzen oder euch austauschen**, um euer Konzept weiterzuentwickeln.

> **Hinweis**: Es geht **nicht darum, den perfekten Terraform-Code zu schreiben**, sondern erstmal darum, zu **verstehen**, wie man die eigene Idee in Infrastruktur-as-Code überträgt. Hier finddet ihr weitere Hinweise, welche euch helfen könnten: https://github.com/JacobMenge/lern-unterlagen/blob/main/terraform/terraform-aws-hinweise-05.md


---

💬 Wenn ihr Lust habt, könnt ihr eure Ideen am Ende (12:00) im Plenum vorstellen oder in kleinen Gruppen vergleichen.  
Vielleicht überrascht euch, wie unterschiedlich (und kreativ) man so eine Aufgabe lösen kann.

---


# Aufgabe 2: Web-App mit AWS – aber skalierbar!

Stellt euch vor, eure Webanwendung läuft stabil – aber plötzlich **steigt die Nutzerzahl stark an**.  
Euer Ziel: Die Anwendung soll **weiterhin performant bleiben**, **automatisch mitwachsen** – und das **ohne große Zusatzkosten**.

**Wie würdet ihr eure bestehende Architektur anpassen, um besser zu skalieren, ohne dass die Kosten explodieren?**

---

## Eure Aufgabe:

1. Überlegt, **welche Komponenten** (Frontend, Backend, Datenbank etc.) durch mehr Nutzer:innen am meisten belastet würden.
2. Denkt darüber nach, **welche Architekturentscheidungen** helfen könnten, Lastspitzen besser abzufangen.
3. Welche Services oder Konzepte aus der AWS-Welt könnten euch dabei helfen?
4. Skizziert oder beschreibt eure Idee kurz (Diagramm, Liste oder ein paar erklärende Sätze reichen).

> Tipp: Ihr müsst keine komplett neue Architektur erfinden – es geht darum, gezielt über **Skalierbarkeit bei kleinem Budget** nachzudenken.

---


📥 **Optional:**  
Wenn ihr mögt, könnt ihr eure Lösung auch gerne im **Classroom unter dieser Aufgabe einreichen** – das ist aber **kein Muss**.  
Ihr könnt die Aufgabe auch einfach für euch machen oder sie später als Grundlage für andere Projekte nutzen.
