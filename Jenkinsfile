<<<<<<< HEAD
podTemplate(label: 'mypod', containers: [
    containerTemplate(name: 'dnscontrol', image: '198.18.0.25:5000/dnscontrol/v1:latest', ttyEnabled: true, command: 'cat')
  ],
  volumes: [
    hostPathVolume(mountPath: '/var/run/docker.sock', hostPath: '/var/run/docker.sock'),
  ]) {
    node('mypod') {
        stage('DNSControl Preview') {
            container('dnscontrol') {

                sh 'docker run --rm -it -v ~/repositories/dnscontrol-conf/dnsconfig.js:/dns/dnsconfig.js -v ~/repositories/dnscontrol-conf/creds.json:/dns/creds.json 198.18.0.25:5000/dnscontrol/v1:latest dnscontrol preview'
                }
            }
        }
=======
pipeline {
  agent {
    docker {
      image 'dnscontrol/v1:latest'
    }
    
  }
  stages {
    stage('DNS Control Preview') {
      steps {
        sh 'docker run --rm -it -v ~/repositories/dnscontrol-conf/dnsconfig.js:/dns/dnsconfig.js -v ~/repositories/dnscontrol-conf/creds.json:/dns/creds.json stackexchange/dnscontrol dnscontrol preview'
      }
>>>>>>> a34903f9f190ebbd7e40f798bc73d817d0a22f7a
    }
  }
}