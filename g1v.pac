function FindProxyForURL(url, host) {
if (shExpMatch(host, "*.googleapis.com") ||
    shExpMatch(host, "*.goog")||
    shExpMatch(host, "*.gstatic.com")||
    shExpMatch(host, " na.b.g-tun.com")
   ) {
return "PROXY 127.0.0.1:7777;  PROXY 192.168.0.5:7777";
} else {
return "DIRECT";
}
}
