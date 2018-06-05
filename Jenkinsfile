podTemplate(label: 'mypod', containers: [
    containerTemplate(name: 'kubectl', image: 'smesch/kubectl', ttyEnabled: true, command: 'cat')],
       volumes: [
        configMapVolume(mountPath: '/dns', configMapName: 'dnscontrol-creds'),
  ]) {
    node('mypod') {
        stage('DNSControl Preview') {
            container('kubectl') {
                sh ("kubectl get namespaces")
               //  sh 'docker run -d -v ~/repositories/dnscontrol-conf/dnsconfig.js:/dns/dnsconfig.js -v ~/repositories/dnscontrol-conf/creds.json:/dns/creds.json 198.18.0.25:5000/dnscontrol/v1:latest dnscontrol preview'
            }
        }
    }
}
