function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Operand1 */
	this.urlHashMap["calculator:5"] = "calculator.c:36,40,43,47,50,54,57,61&calculator.h:41";
	/* <Root>/Operand2 */
	this.urlHashMap["calculator:6"] = "calculator.c:37,40,44,47,51,54,58,61&calculator.h:42";
	/* <Root>/Add */
	this.urlHashMap["calculator:1"] = "calculator.c:38,40";
	/* <Root>/Display */
	this.urlHashMap["calculator:11"] = "msg=rtwMsg_reducedBlock&block=calculator:11";
	/* <Root>/Display1 */
	this.urlHashMap["calculator:12"] = "msg=rtwMsg_reducedBlock&block=calculator:12";
	/* <Root>/Display2 */
	this.urlHashMap["calculator:13"] = "msg=rtwMsg_reducedBlock&block=calculator:13";
	/* <Root>/Display3 */
	this.urlHashMap["calculator:14"] = "msg=rtwMsg_reducedBlock&block=calculator:14";
	/* <Root>/Divide */
	this.urlHashMap["calculator:2"] = "calculator.c:59,61";
	/* <Root>/Product */
	this.urlHashMap["calculator:4"] = "calculator.c:52,54";
	/* <Root>/Subtract */
	this.urlHashMap["calculator:3"] = "calculator.c:45,47";
	/* <Root>/Addition */
	this.urlHashMap["calculator:7"] = "calculator.c:35,40&calculator.h:47";
	/* <Root>/Subtraction */
	this.urlHashMap["calculator:8"] = "calculator.c:42,47&calculator.h:48";
	/* <Root>/Multiplication */
	this.urlHashMap["calculator:9"] = "calculator.c:49,54&calculator.h:49";
	/* <Root>/Division */
	this.urlHashMap["calculator:10"] = "calculator.c:56,61&calculator.h:50";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "calculator"};
	this.sidHashMap["calculator"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<Root>/Operand1"] = {sid: "calculator:5"};
	this.sidHashMap["calculator:5"] = {rtwname: "<Root>/Operand1"};
	this.rtwnameHashMap["<Root>/Operand2"] = {sid: "calculator:6"};
	this.sidHashMap["calculator:6"] = {rtwname: "<Root>/Operand2"};
	this.rtwnameHashMap["<Root>/Add"] = {sid: "calculator:1"};
	this.sidHashMap["calculator:1"] = {rtwname: "<Root>/Add"};
	this.rtwnameHashMap["<Root>/Display"] = {sid: "calculator:11"};
	this.sidHashMap["calculator:11"] = {rtwname: "<Root>/Display"};
	this.rtwnameHashMap["<Root>/Display1"] = {sid: "calculator:12"};
	this.sidHashMap["calculator:12"] = {rtwname: "<Root>/Display1"};
	this.rtwnameHashMap["<Root>/Display2"] = {sid: "calculator:13"};
	this.sidHashMap["calculator:13"] = {rtwname: "<Root>/Display2"};
	this.rtwnameHashMap["<Root>/Display3"] = {sid: "calculator:14"};
	this.sidHashMap["calculator:14"] = {rtwname: "<Root>/Display3"};
	this.rtwnameHashMap["<Root>/Divide"] = {sid: "calculator:2"};
	this.sidHashMap["calculator:2"] = {rtwname: "<Root>/Divide"};
	this.rtwnameHashMap["<Root>/Product"] = {sid: "calculator:4"};
	this.sidHashMap["calculator:4"] = {rtwname: "<Root>/Product"};
	this.rtwnameHashMap["<Root>/Subtract"] = {sid: "calculator:3"};
	this.sidHashMap["calculator:3"] = {rtwname: "<Root>/Subtract"};
	this.rtwnameHashMap["<Root>/Addition"] = {sid: "calculator:7"};
	this.sidHashMap["calculator:7"] = {rtwname: "<Root>/Addition"};
	this.rtwnameHashMap["<Root>/Subtraction"] = {sid: "calculator:8"};
	this.sidHashMap["calculator:8"] = {rtwname: "<Root>/Subtraction"};
	this.rtwnameHashMap["<Root>/Multiplication"] = {sid: "calculator:9"};
	this.sidHashMap["calculator:9"] = {rtwname: "<Root>/Multiplication"};
	this.rtwnameHashMap["<Root>/Division"] = {sid: "calculator:10"};
	this.sidHashMap["calculator:10"] = {rtwname: "<Root>/Division"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
