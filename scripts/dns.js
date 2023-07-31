router_wifi = "ufiv"
router_dns = "198.18.0.2"
const doh_servers = "https://120.53.53.53/dns-query,https://1.12.12.12/dns-query,https://223.5.5.5/dns-query,https://223.6.6.6/dns-query"
if($network.wifi.ssid == router_wifi){
	$done({server: router_dns})
} else {
	$done({servers: doh_servers.split(",")})
}
