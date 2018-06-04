pipeline {
  agent {
    docker {
      image 'dnscontrol/v1:latest'
    }
  }
  stages {
    stage('DNS Preview') {
      steps {
           {
            sh "docker run --rm -it -v ~/repositories/dnscontrol-conf/dnsconfig.js:/dns/dnsconfig.js -v ~/repositories/dnscontrol-conf/creds.json:/dns/creds.json stackexchange/dnscontrol dnscontrol preview"
        }
      }
    }
  }
}
