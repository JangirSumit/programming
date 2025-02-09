### **Helm Chart in Kubernetes 🚀**  

A **Helm Chart** is a **package manager** for Kubernetes, similar to `apt` for Ubuntu or `npm` for Node.js. It simplifies deploying, managing, and upgrading Kubernetes applications by **bundling YAML files** into a reusable **chart**.  

---

## **1️⃣ Why Use Helm Charts?**  
✅ **Automated Deployments** – Deploy microservices with a single command.  
✅ **Easy Configuration** – Override default settings using `values.yaml`.  
✅ **Version Control** – Manage different versions of deployments.  
✅ **Reusability** – Use the same Helm chart across different environments (dev, staging, prod).  

---

## **2️⃣ Helm Chart Structure**  

When you create a Helm chart, it generates a directory like this:

```
mychart/
│── charts/            # Dependency charts (if any)
│── templates/         # Kubernetes YAML templates
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── ingress.yaml
│── values.yaml        # Default configuration values
│── Chart.yaml         # Metadata about the chart
│── README.md          # Documentation
```

---

## **3️⃣ Installing Helm in AKS**
First, **install Helm** if you haven’t already:

```sh
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
```

Then, **verify installation**:
```sh
helm version
```

---

## **4️⃣ Creating a Helm Chart**
To create a new Helm chart:

```sh
helm create mychart
```

This generates the folder structure **shown above**.

---

## **5️⃣ Defining Microservices in Helm**
Modify `templates/deployment.yaml`:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: {{ .Release.Name }}
spec:
  replicas: {{ .Values.replicas }}
  selector:
    matchLabels:
      app: {{ .Chart.Name }}
  template:
    metadata:
      labels:
        app: {{ .Chart.Name }}
    spec:
      containers:
        - name: {{ .Chart.Name }}
          image: "{{ .Values.image.repository }}:{{ .Values.image.tag }}"
          ports:
            - containerPort: {{ .Values.service.port }}
```

Modify `values.yaml`:

```yaml
replicas: 3
image:
  repository: myacr.azurecr.io/mymicroservice
  tag: latest
service:
  port: 80
```

---

## **6️⃣ Deploying the Helm Chart**
First, **package and install the chart**:

```sh
helm install my-microservice ./mychart
```

To **update an existing deployment**:
```sh
helm upgrade my-microservice ./mychart
```

To **list installed releases**:
```sh
helm list
```

To **uninstall** the Helm release:
```sh
helm uninstall my-microservice
```

---

## **7️⃣ Storing Helm Charts in a Repository**
Helm charts can be stored in **Azure Container Registry (ACR)**:

```sh
az acr helm push --name myacr --chart mychart
```

Then install from ACR:

```sh
helm install my-microservice oci://myacr.azurecr.io/helm/mychart
```

---

## **🎯 Summary**
✅ **Helm simplifies Kubernetes deployments**  
✅ **Uses templated YAML files for flexibility**  
✅ **Easily manage and upgrade microservices**  
✅ **Supports configuration overrides with `values.yaml`**  

Would you like an example for **multi-service deployment** using Helm? 🚀