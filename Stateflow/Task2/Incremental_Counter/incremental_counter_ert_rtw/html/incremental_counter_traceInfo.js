function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Constant */
	this.urlHashMap["incremental_counter:3"] = "incremental_counter.c:42,47";
	/* <Root>/Constant1 */
	this.urlHashMap["incremental_counter:6"] = "incremental_counter.c:61,63";
	/* <Root>/Scope */
	this.urlHashMap["incremental_counter:4"] = "msg=rtwMsg_SimulationReducedBlock&block=incremental_counter:4";
	/* <Root>/Sum */
	this.urlHashMap["incremental_counter:2"] = "incremental_counter.c:43";
	/* <Root>/Switch */
	this.urlHashMap["incremental_counter:1"] = "incremental_counter.c:41,46,47,49,52";
	/* <Root>/Unit Delay */
	this.urlHashMap["incremental_counter:5"] = "incremental_counter.c:38,39,57,58&incremental_counter.h:41";
	/* <Root>/Unit Delay1 */
	this.urlHashMap["incremental_counter:7"] = "incremental_counter.c:44,49,60,63&incremental_counter.h:42";
	/* <Root>/Out1 */
	this.urlHashMap["incremental_counter:8"] = "incremental_counter.c:54,55&incremental_counter.h:47";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "incremental_counter"};
	this.sidHashMap["incremental_counter"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<Root>/Constant"] = {sid: "incremental_counter:3"};
	this.sidHashMap["incremental_counter:3"] = {rtwname: "<Root>/Constant"};
	this.rtwnameHashMap["<Root>/Constant1"] = {sid: "incremental_counter:6"};
	this.sidHashMap["incremental_counter:6"] = {rtwname: "<Root>/Constant1"};
	this.rtwnameHashMap["<Root>/Scope"] = {sid: "incremental_counter:4"};
	this.sidHashMap["incremental_counter:4"] = {rtwname: "<Root>/Scope"};
	this.rtwnameHashMap["<Root>/Sum"] = {sid: "incremental_counter:2"};
	this.sidHashMap["incremental_counter:2"] = {rtwname: "<Root>/Sum"};
	this.rtwnameHashMap["<Root>/Switch"] = {sid: "incremental_counter:1"};
	this.sidHashMap["incremental_counter:1"] = {rtwname: "<Root>/Switch"};
	this.rtwnameHashMap["<Root>/Unit Delay"] = {sid: "incremental_counter:5"};
	this.sidHashMap["incremental_counter:5"] = {rtwname: "<Root>/Unit Delay"};
	this.rtwnameHashMap["<Root>/Unit Delay1"] = {sid: "incremental_counter:7"};
	this.sidHashMap["incremental_counter:7"] = {rtwname: "<Root>/Unit Delay1"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "incremental_counter:8"};
	this.sidHashMap["incremental_counter:8"] = {rtwname: "<Root>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
