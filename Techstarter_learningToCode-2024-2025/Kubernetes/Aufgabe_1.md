### 2. Einen Pod erstellen

### Was ist ein Pod in Kubernetes?

Ein **Pod** ist die kleinste ausführbare Einheit in Kubernetes. Er enthält einen oder mehrere Container, die gemeinsam auf einer einzigen Maschine laufen und sich Ressourcen wie Netzwerk und Speicher teilen. Pods werden verwendet, um Anwendungen oder Dienste auszuführen. Sie sind kurzlebig, was bedeutet, dass Kubernetes sie neu starten kann, wenn sie ausfallen.

Da Kubernetes nicht dafür vorgesehen ist, einzelne Pods manuell zu verwalten, werden Pods in der Regel durch höherstufige Abstraktionen wie Deployments verwaltet. In diesem Schritt erstellen wir jedoch zur Veranschaulichung einen einzelnen Pod.

### Pod erstellen:

```bash
kubectl run hello-world --image=nginxdemos/hello --port=80
```

**Erklärung der Optionen:**

- `kubectl run`: Erstellt einen neuen Pod.
- `hello-world`: Der Name des Pods.
- `-image=nginxdemos/hello`: Das Docker-Image, das innerhalb des Pods läuft (in diesem Fall ein einfaches "Hello World"-Image von NGINX).
    - https://hub.docker.com/r/nginxdemos/hello/
- `-port=80`: Der Port, auf dem die Anwendung im Pod verfügbar ist.

Nachdem du diesen Befehl ausgeführt hast, sollte die Meldung `pod/hello-world created` erscheinen. Du kannst die aktiven Pods mit folgendem Befehl anzeigen:

```bash
kubectl get pods
```

Das Ergebnis sieht etwa so aus:

```
NAME           READY   STATUS    RESTARTS   AGE
hello-world    1/1     Running   0          10s

```

Der Pod ist nun aktiv und führt den NGINX-Container aus.

---

### 3. Ein Deployment erstellen

### Was ist ein Deployment in Kubernetes?

Ein **Deployment** verwaltet eine oder mehrere Instanzen eines Pods. Der Hauptvorteil eines Deployments gegenüber einem einzelnen Pod ist die automatische Verwaltung und Skalierung. Ein Deployment stellt sicher, dass immer eine gewünschte Anzahl von Pod-Instanzen aktiv ist. Wenn ein Pod abstürzt oder gelöscht wird, erstellt das Deployment automatisch einen neuen Pod. Dies macht Deployments ideal für Produktionsumgebungen, in denen Verfügbarkeit und Stabilität entscheidend sind.

### Deployment erstellen:

```bash
kubectl create deployment hello-world-deployment --image=nginxdemos/hello

```

**Erklärung der Optionen:**

- `kubectl create deployment`: Erstellt ein neues Deployment.
- `hello-world-deployment`: Der Name des Deployments.
- `-image=nginxdemos/hello`: Das Docker-Image, das für die Pods verwendet wird.

Prüfe den Status des Deployments mit:

```bash
kubectl get deployments
```

Das Ergebnis könnte so aussehen:

```
NAME                    READY   UP-TO-DATE   AVAILABLE   AGE
hello-world-deployment   1/1     1            1           15s
```

Das bedeutet, dass ein Pod (1/1) bereitgestellt wurde und aktiv ist. Wenn der Pod aus irgendeinem Grund abstürzt, wird Kubernetes durch das Deployment einen neuen Pod starten, um die gewünschte Anzahl (in diesem Fall 1) aufrechtzuerhalten.

---

### 4. Einen Service erstellen

### Was ist ein Service in Kubernetes?

Ein **Service** in Kubernetes stellt eine stabile IP-Adresse und einen DNS-Namen für einen oder mehrere Pods bereit. Pods sind flüchtig und können verschwinden, wenn sie neu gestartet werden. Ein Service bietet jedoch eine konstante Schnittstelle, um auf die Anwendung zuzugreifen, selbst wenn sich die zugrunde liegenden Pods ändern.

Ein Service vom Typ **LoadBalancer** ermöglicht es, den Datenverkehr aus dem Internet (oder von außen) auf die Anwendung im Cluster zu verteilen. Dies ist nützlich, wenn wir den Pod außerhalb des Clusters zugänglich machen wollen.

### Service erstellen:

```bash
kubectl expose deployment hello-world-deployment --type=LoadBalancer --port=80
```

**Erklärung der Optionen:**

- `kubectl expose deployment`: Erstellt einen Service für ein vorhandenes Deployment.
- `hello-world-deployment`: Der Name des Deployments, für das der Service erstellt wird.
- `-type=LoadBalancer`: Der Service-Typ. In Minikube wird dies simuliert, um einen externen Zugriff auf die Anwendung zu ermöglichen.
- `-port=80`: Der Port, auf dem der Service verfügbar ist.

Prüfe, ob der Service erstellt wurde:

```bash
kubectl get services
```

Das Ergebnis könnte so aussehen:

```
NAME                      TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
hello-world-deployment     LoadBalancer   10.96.150.32    <pending>     80:31067/TCP   20s
```

Der Service leitet jetzt den Datenverkehr, der auf Port 80 eingeht, an den Pod weiter.