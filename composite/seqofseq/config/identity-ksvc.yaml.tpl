apiVersion: serving.knative.dev/v1alpha1
kind: Service
metadata:
  name: identity
spec:
  template:
    spec:
      containers:
      - image: docker.io/$DOCKER_USER/identity
