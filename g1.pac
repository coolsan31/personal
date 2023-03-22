function FindProxyForURL(url, host) {
if (shExpMatch(host, "*.googleapis.com") ||
    shExpMatch(host, "*.goog")|| 
    shExpMatch(host, "*.goog.*")|| 
    shExpMatch(host, "*.google.*")||
    shExpMatch(host, " na.b.g-tun.com")||
    shExpMatch(host, " gstatic.com")
   
   ) {
return "PROXY 192.168.0.5:7890";
} else {
return "DIRECT";
}
}
