function FindProxyForURL(url, host) {
if (shExpMatch(host, "*.googleapis.com") ||
    shExpMatch(host, "*.goog")|| 
    shExpMatch(host, " na.b.g-tun.com")||
    shExpMatch(host, " gstatic.com")
   
   ) {
return "PROXY 127.0.0.1:7890; PROXY 192.168.0.5:7890";
} else {
return "DIRECT";
}
}
