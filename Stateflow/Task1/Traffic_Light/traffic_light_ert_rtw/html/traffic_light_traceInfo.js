function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Chart */
	this.urlHashMap["traffic_light:1"] = "traffic_light.c:22,41,42,43,46,47,48,49,52,54,55,65,87,106,108,109,112,114,117,119,122,124&traffic_light.h:41,42,43";
	/* <Root>/Out1 */
	this.urlHashMap["traffic_light:4"] = "traffic_light.c:51,52,66,67,81,82,111,114&traffic_light.h:48";
	/* <Root>/Out2 */
	this.urlHashMap["traffic_light:5"] = "traffic_light.c:56,57,71,72,116,119&traffic_light.h:49";
	/* <Root>/Out3 */
	this.urlHashMap["traffic_light:6"] = "traffic_light.c:61,62,76,77,121,124&traffic_light.h:50";
	/* <S1>:8 */
	this.urlHashMap["traffic_light:1:8"] = "traffic_light.c:57,58,59,62,68,69,72";
	/* <S1>:6 */
	this.urlHashMap["traffic_light:1:6"] = "traffic_light.c:48,49,52,67,68,69,72,78,79,82";
	/* <S1>:10 */
	this.urlHashMap["traffic_light:1:10"] = "traffic_light.c:58,59,62,77,78,79,82,107";
	/* <S1>:5 */
	this.urlHashMap["traffic_light:1:5"] = "msg=rtwMsg_optimizedSfObject&block=traffic_light:1:5";
	/* <S1>:7 */
	this.urlHashMap["traffic_light:1:7"] = "traffic_light.c:48,49,52";
	/* <S1>:12 */
	this.urlHashMap["traffic_light:1:12"] = "traffic_light.c:77,78,79,82";
	/* <S1>:9 */
	this.urlHashMap["traffic_light:1:9"] = "traffic_light.c:67,68,69,72";
	/* <S1>:11 */
	this.urlHashMap["traffic_light:1:11"] = "traffic_light.c:57,58,59,62";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "traffic_light"};
	this.sidHashMap["traffic_light"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "traffic_light:1"};
	this.sidHashMap["traffic_light:1"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/Chart"] = {sid: "traffic_light:1"};
	this.sidHashMap["traffic_light:1"] = {rtwname: "<Root>/Chart"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "traffic_light:4"};
	this.sidHashMap["traffic_light:4"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<Root>/Out2"] = {sid: "traffic_light:5"};
	this.sidHashMap["traffic_light:5"] = {rtwname: "<Root>/Out2"};
	this.rtwnameHashMap["<Root>/Out3"] = {sid: "traffic_light:6"};
	this.sidHashMap["traffic_light:6"] = {rtwname: "<Root>/Out3"};
	this.rtwnameHashMap["<S1>:8"] = {sid: "traffic_light:1:8"};
	this.sidHashMap["traffic_light:1:8"] = {rtwname: "<S1>:8"};
	this.rtwnameHashMap["<S1>:6"] = {sid: "traffic_light:1:6"};
	this.sidHashMap["traffic_light:1:6"] = {rtwname: "<S1>:6"};
	this.rtwnameHashMap["<S1>:10"] = {sid: "traffic_light:1:10"};
	this.sidHashMap["traffic_light:1:10"] = {rtwname: "<S1>:10"};
	this.rtwnameHashMap["<S1>:5"] = {sid: "traffic_light:1:5"};
	this.sidHashMap["traffic_light:1:5"] = {rtwname: "<S1>:5"};
	this.rtwnameHashMap["<S1>:7"] = {sid: "traffic_light:1:7"};
	this.sidHashMap["traffic_light:1:7"] = {rtwname: "<S1>:7"};
	this.rtwnameHashMap["<S1>:12"] = {sid: "traffic_light:1:12"};
	this.sidHashMap["traffic_light:1:12"] = {rtwname: "<S1>:12"};
	this.rtwnameHashMap["<S1>:9"] = {sid: "traffic_light:1:9"};
	this.sidHashMap["traffic_light:1:9"] = {rtwname: "<S1>:9"};
	this.rtwnameHashMap["<S1>:11"] = {sid: "traffic_light:1:11"};
	this.sidHashMap["traffic_light:1:11"] = {rtwname: "<S1>:11"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
