podTemplate(label: 'mypod', containers: [
    containerTemplate(name: 'docker', image: 'docker', ttyEnabled: true, command: 'cat')
  ],
  volumes: [
    hostPathVolume(mountPath: '/var/run/docker.sock', hostPath: '/var/run/docker.sock'),
  ]) {
    node('mypod') {
        stage('DNSControl Preview') {
            container('docker') {
                sh 'docker run -d -v ~/repositories/dnscontrol-conf/dnsconfig.js:/dns/dnsconfig.js -v ~/repositories/dnscontrol-conf/creds.json:/dns/creds.json 198.18.0.25:5000/dnscontrol/v1:latest dnscontrol preview'
            }
        }
    }
}

