function FindProxyForURL(url, host) {
if (host == "*.com" || "phosphor-pa.googleapis.com" || host == "prod.brass.cloud.cupronickel.goog") {
return "PROXY 192.168.0.5:7890";
} else {
return "DIRECT";
}
}
