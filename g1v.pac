function FindProxyForURL(url, host) {
if (shExpMatch(host, "*.googleapis.com") || shExpMatch(host, "*.goog")) {
return "SOCKS5 192.168.0.3:7890";
} else {
return "DIRECT";
}
}
