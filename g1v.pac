function FindProxyForURL(url, host) {
if (shExpMatch(host, "*.googleapis.com") ||
    shExpMatch(host, "*.goog")|| 
    shExpMatch(host, "*.goog.*")|| 
    shExpMatch(host, "*.google.*")||
    shExpMatch(host, " na.b.g-tun.com")||
    shExpMatch(host, " gstatic.com")
   
   ) {
return "PROXY 192.168.0.3:7890; PROXY 127.0.0.1:7777 ";
} else {
return "DIRECT";
}
}
