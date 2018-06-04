pipeline {
    agent {
      docker { image '198.18.0.25:5000/dnscontrol/v1:latest' }
  }
    stages {
        stage('DNS Control Preview') {
            steps {
                sh 'docker run --rm -it -v ~/repositories/dnscontrol-conf/dnsconfig.js:/dns/dnsconfig.js -v ~/repositories/dnscontrol-conf/creds.json:/dns/creds.json 198.18.0.25:5000/dnscontrol/v1:latest dnscontrol preview'
            }
        }
    }
}
