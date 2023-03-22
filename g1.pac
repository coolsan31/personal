function FindProxyForURL(url, host) {
if (host == "phosphor-pa.googleapis.com" || host == "prod.brass.cloud.cupronickel.goog") {
return "SOCKS5 192.168.0.5:7890";
} else {
return "DIRECT";
}
}
