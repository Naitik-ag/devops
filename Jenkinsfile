pipeline {
  agent any

  stages {
    stage('Clone') {
      steps {
        git 'https://github.com/Naitik-ag/devops.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        script {
          dockerImage = docker.build("naitikag/todo-app:latest")
        }
      }
    }

    stage('Push Docker Image') {
      steps {
        script {
          docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-credentials-id') {
            dockerImage.push()
          }
        }
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh 'kubectl apply -f deployment.yaml'
      }
    }
  }
}
