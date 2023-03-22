function FindProxyForURL(url, host) {
if (shExpMatch(host, "*.googleapis.com") || shExpMatch(host, "*.goog")|| shExpMatch(host, "*.google.*")) {
return "PROXY http://192.168.0.3:7890";
} else {
return "DIRECT";
}
}
