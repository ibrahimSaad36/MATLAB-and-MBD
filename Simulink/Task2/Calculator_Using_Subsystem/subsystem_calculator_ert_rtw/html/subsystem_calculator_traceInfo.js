function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Operand1 */
	this.urlHashMap["subsystem_calculator:15"] = "subsystem_calculator.c:37,41,45,49,53,57,61,65&subsystem_calculator.h:41";
	/* <Root>/Operand2 */
	this.urlHashMap["subsystem_calculator:16"] = "subsystem_calculator.c:38,42,46,50,54,58,62,66&subsystem_calculator.h:42";
	/* <Root>/Add */
	this.urlHashMap["subsystem_calculator:17"] = "subsystem_calculator.c:36,41&subsystem_calculator.h:47";
	/* <Root>/Sub */
	this.urlHashMap["subsystem_calculator:18"] = "subsystem_calculator.c:44,49&subsystem_calculator.h:48";
	/* <Root>/Product */
	this.urlHashMap["subsystem_calculator:19"] = "subsystem_calculator.c:52,57&subsystem_calculator.h:49";
	/* <Root>/Divide */
	this.urlHashMap["subsystem_calculator:20"] = "subsystem_calculator.c:60,65&subsystem_calculator.h:50";
	/* <S1>/Add */
	this.urlHashMap["subsystem_calculator:10"] = "subsystem_calculator.c:39,41";
	/* <S1>/Divide */
	this.urlHashMap["subsystem_calculator:14"] = "subsystem_calculator.c:63,65";
	/* <S1>/Product */
	this.urlHashMap["subsystem_calculator:13"] = "subsystem_calculator.c:55,57";
	/* <S1>/Subtract */
	this.urlHashMap["subsystem_calculator:11"] = "subsystem_calculator.c:47,49";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "subsystem_calculator"};
	this.sidHashMap["subsystem_calculator"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "subsystem_calculator:1"};
	this.sidHashMap["subsystem_calculator:1"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/Operand1"] = {sid: "subsystem_calculator:15"};
	this.sidHashMap["subsystem_calculator:15"] = {rtwname: "<Root>/Operand1"};
	this.rtwnameHashMap["<Root>/Operand2"] = {sid: "subsystem_calculator:16"};
	this.sidHashMap["subsystem_calculator:16"] = {rtwname: "<Root>/Operand2"};
	this.rtwnameHashMap["<Root>/Subsystem"] = {sid: "subsystem_calculator:1"};
	this.sidHashMap["subsystem_calculator:1"] = {rtwname: "<Root>/Subsystem"};
	this.rtwnameHashMap["<Root>/Add"] = {sid: "subsystem_calculator:17"};
	this.sidHashMap["subsystem_calculator:17"] = {rtwname: "<Root>/Add"};
	this.rtwnameHashMap["<Root>/Sub"] = {sid: "subsystem_calculator:18"};
	this.sidHashMap["subsystem_calculator:18"] = {rtwname: "<Root>/Sub"};
	this.rtwnameHashMap["<Root>/Product"] = {sid: "subsystem_calculator:19"};
	this.sidHashMap["subsystem_calculator:19"] = {rtwname: "<Root>/Product"};
	this.rtwnameHashMap["<Root>/Divide"] = {sid: "subsystem_calculator:20"};
	this.sidHashMap["subsystem_calculator:20"] = {rtwname: "<Root>/Divide"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "subsystem_calculator:2"};
	this.sidHashMap["subsystem_calculator:2"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/In2"] = {sid: "subsystem_calculator:4"};
	this.sidHashMap["subsystem_calculator:4"] = {rtwname: "<S1>/In2"};
	this.rtwnameHashMap["<S1>/Add"] = {sid: "subsystem_calculator:10"};
	this.sidHashMap["subsystem_calculator:10"] = {rtwname: "<S1>/Add"};
	this.rtwnameHashMap["<S1>/Divide"] = {sid: "subsystem_calculator:14"};
	this.sidHashMap["subsystem_calculator:14"] = {rtwname: "<S1>/Divide"};
	this.rtwnameHashMap["<S1>/Product"] = {sid: "subsystem_calculator:13"};
	this.sidHashMap["subsystem_calculator:13"] = {rtwname: "<S1>/Product"};
	this.rtwnameHashMap["<S1>/Subtract"] = {sid: "subsystem_calculator:11"};
	this.sidHashMap["subsystem_calculator:11"] = {rtwname: "<S1>/Subtract"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "subsystem_calculator:3"};
	this.sidHashMap["subsystem_calculator:3"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S1>/Out2"] = {sid: "subsystem_calculator:7"};
	this.sidHashMap["subsystem_calculator:7"] = {rtwname: "<S1>/Out2"};
	this.rtwnameHashMap["<S1>/Out3"] = {sid: "subsystem_calculator:8"};
	this.sidHashMap["subsystem_calculator:8"] = {rtwname: "<S1>/Out3"};
	this.rtwnameHashMap["<S1>/Out4"] = {sid: "subsystem_calculator:9"};
	this.sidHashMap["subsystem_calculator:9"] = {rtwname: "<S1>/Out4"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
