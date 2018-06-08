podTemplate(label: 'mypod', containers: [
    containerTemplate(name: 'docker', image: 'alpine', ttyEnabled: true, command: 'cat')],
       volumes: [
        configMapVolume(mountPath: '/dns', configMapName: 'dnscontrol-creds'),
  ]) {
    node('mypod') {
        checkout scm
        stage('DNSControl Preview') {
            container('docker') { 
               sh 'export pwd=$(pwd)'
                sh 'docker run -d -v $(pwd)/dnsconfig.js:/dns/dnsconfig.js -v $(pwd)/creds.json:/dns/creds.json stackexchange/dnscontrol dnscontrol preview'
            }
        }
    }
}
