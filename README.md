# K8S Workshop for Node.js Developers

## Step 3.1 Run Application at K8s

```
minikube start
eval $(minikube docker-env)
docker-compose build
kubectl apply -f k8s.yaml
minikube service chat
```

## Presentation:
https://docs.google.com/presentation/d/1PE6gl2TFk8izHWZ1XgTQSX2nIuA8I0S2WE2fvRSTvbQ/edit?usp=sharing
