function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["triggered_system:6"] = "triggered_system.c:64,67&triggered_system.h:53";
	/* <Root>/Pulse
Generator */
	this.urlHashMap["triggered_system:8"] = "triggered_system.c:44,45,46,47,48,50,53,91,92&triggered_system.h:43";
	/* <Root>/Triggered
Subsystem */
	this.urlHashMap["triggered_system:1"] = "triggered_system.c:55,70,95,101&triggered_system.h:48";
	/* <Root>/Out1 */
	this.urlHashMap["triggered_system:7"] = "triggered_system.c:62,67,96,99&triggered_system.h:58";
	/* <S1>/Trigger */
	this.urlHashMap["triggered_system:3"] = "triggered_system.c:56,58,59,60,61";
	/* <S1>/Chart */
	this.urlHashMap["triggered_system:5"] = "triggered_system.c:63,67,97,99";
	/* <S2>:3 */
	this.urlHashMap["triggered_system:5:3"] = "msg=rtwMsg_optimizedSfObject&block=triggered_system:5:3";
	/* <S2>:4 */
	this.urlHashMap["triggered_system:5:4"] = "triggered_system.c:67";
	/* <S2>:5 */
	this.urlHashMap["triggered_system:5:5"] = "triggered_system.c:67";
	/* <S2>:6 */
	this.urlHashMap["triggered_system:5:6"] = "triggered_system.c:67";
	/* <S2>:7 */
	this.urlHashMap["triggered_system:5:7"] = "msg=rtwMsg_optimizedSfObject&block=triggered_system:5:7";
	/* <S2>:8 */
	this.urlHashMap["triggered_system:5:8"] = "msg=rtwMsg_optimizedSfObject&block=triggered_system:5:8";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "triggered_system"};
	this.sidHashMap["triggered_system"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "triggered_system:1"};
	this.sidHashMap["triggered_system:1"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "triggered_system:5"};
	this.sidHashMap["triggered_system:5"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "triggered_system:6"};
	this.sidHashMap["triggered_system:6"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/Pulse Generator"] = {sid: "triggered_system:8"};
	this.sidHashMap["triggered_system:8"] = {rtwname: "<Root>/Pulse Generator"};
	this.rtwnameHashMap["<Root>/Triggered Subsystem"] = {sid: "triggered_system:1"};
	this.sidHashMap["triggered_system:1"] = {rtwname: "<Root>/Triggered Subsystem"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "triggered_system:7"};
	this.sidHashMap["triggered_system:7"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "triggered_system:2"};
	this.sidHashMap["triggered_system:2"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/Trigger"] = {sid: "triggered_system:3"};
	this.sidHashMap["triggered_system:3"] = {rtwname: "<S1>/Trigger"};
	this.rtwnameHashMap["<S1>/Chart"] = {sid: "triggered_system:5"};
	this.sidHashMap["triggered_system:5"] = {rtwname: "<S1>/Chart"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "triggered_system:4"};
	this.sidHashMap["triggered_system:4"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S2>:3"] = {sid: "triggered_system:5:3"};
	this.sidHashMap["triggered_system:5:3"] = {rtwname: "<S2>:3"};
	this.rtwnameHashMap["<S2>:4"] = {sid: "triggered_system:5:4"};
	this.sidHashMap["triggered_system:5:4"] = {rtwname: "<S2>:4"};
	this.rtwnameHashMap["<S2>:5"] = {sid: "triggered_system:5:5"};
	this.sidHashMap["triggered_system:5:5"] = {rtwname: "<S2>:5"};
	this.rtwnameHashMap["<S2>:6"] = {sid: "triggered_system:5:6"};
	this.sidHashMap["triggered_system:5:6"] = {rtwname: "<S2>:6"};
	this.rtwnameHashMap["<S2>:7"] = {sid: "triggered_system:5:7"};
	this.sidHashMap["triggered_system:5:7"] = {rtwname: "<S2>:7"};
	this.rtwnameHashMap["<S2>:8"] = {sid: "triggered_system:5:8"};
	this.sidHashMap["triggered_system:5:8"] = {rtwname: "<S2>:8"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
