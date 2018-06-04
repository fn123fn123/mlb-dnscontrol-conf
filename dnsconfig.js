/*
   dnsconfig.js: dnscontrol configuration file for ORGANIZATION NAME.
*/

// Providers:
//
//


var REG_NONE = NewRegistrar('none', 'NONE');    // No registrar.
var DNS_BIND = NewDnsProvider('bind', 'BIND');  // ISC BIND.
var GCLOUD = NewDnsProvider("gcloud", "GCLOUD");
var R53 = NewDnsProvider('r53_main', 'ROUTE53');

var BIND = NewDnsProvider('bind', 'BIND', {
        'default_soa': {
        'master': 'ns1.p38.dynect.net.',
        'mbox': 'systems.mlb.com.',
        'refresh': 3600,
        'retry': 600,
        'expire': 604800,
        'minttl': 60,
    },
})

var DYN_ULTRA_DNS = ( 
        NAMESERVER("ns1.p38.dynect.net."),
        NAMESERVER("ns2.p38.dynect.net."),
        NAMESERVER("ns3.p38.dynect.net."),
        NAMESERVER("ns4.p38.dynect.net."),
        NAMESERVER("sdns110.ultradns.com."),
        NAMESERVER("sdns110.ultradns.biz."),
        NAMESERVER("sdns110.ultradns.org."),
        NAMESERVER("sdns110.ultradns.net.")
);

var REDIRECTORS = [ 
	A('@', '209.102.213.46', TTL(3600)),
        CNAME('www', 'redirector.mlb.com.', TTL(3600)),
]
        



// Domains:

D('example.com', REG_NONE, DnsProvider(DNS_BIND),
    A('@', '10.10.10.10')
);

D("zagsblog.com", REG_NONE, DnsProvider(DNS_BIND), DnsProvider(GCLOUD,0), DnsProvider(R53,0), 
	A('@', '209.102.213.46', TTL(3600)),
	CNAME('www', 'redirector.mlb.com.', TTL(3600)),
        DYN_ULTRA_DNS
);

D("mlbtest.com", REG_NONE, DnsProvider(DNS_BIND), DnsProvider(GCLOUD), DnsProvider(R53));
D("nic.mlb", REG_NONE, DnsProvider(DNS_BIND), DnsProvider(GCLOUD), DnsProvider(R53), REDIRECTORS);
D("nic.baseball", REG_NONE, DnsProvider(DNS_BIND), DnsProvider(GCLOUD), DnsProvider(R53), REDIRECTORS);

//
