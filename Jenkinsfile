pipeline {
    agent {
      docker { image 'dnscontrol/v1:latest' }
  }
    stages {
        stage('Say Hi') {
            steps {
                echo 'Hello World..'
            }
        }
        stage('Preview') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Configure') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
