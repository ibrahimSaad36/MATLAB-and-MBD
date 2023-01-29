function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Constant */
	this.urlHashMap["decremental_counter:2"] = "decremental_counter.c:45,48";
	/* <Root>/Constant1 */
	this.urlHashMap["decremental_counter:4"] = "decremental_counter.c:39,42";
	/* <Root>/Scope */
	this.urlHashMap["decremental_counter:6"] = "msg=rtwMsg_SimulationReducedBlock&block=decremental_counter:6";
	/* <Root>/Subtract */
	this.urlHashMap["decremental_counter:3"] = "decremental_counter.c:38,42";
	/* <Root>/Switch */
	this.urlHashMap["decremental_counter:1"] = "decremental_counter.c:44,47,48,51";
	/* <Root>/Unit Delay */
	this.urlHashMap["decremental_counter:5"] = "decremental_counter.c:40,42,56,57&decremental_counter.h:41";
	/* <Root>/Out1 */
	this.urlHashMap["decremental_counter:7"] = "decremental_counter.c:53,54&decremental_counter.h:46";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "decremental_counter"};
	this.sidHashMap["decremental_counter"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<Root>/Constant"] = {sid: "decremental_counter:2"};
	this.sidHashMap["decremental_counter:2"] = {rtwname: "<Root>/Constant"};
	this.rtwnameHashMap["<Root>/Constant1"] = {sid: "decremental_counter:4"};
	this.sidHashMap["decremental_counter:4"] = {rtwname: "<Root>/Constant1"};
	this.rtwnameHashMap["<Root>/Scope"] = {sid: "decremental_counter:6"};
	this.sidHashMap["decremental_counter:6"] = {rtwname: "<Root>/Scope"};
	this.rtwnameHashMap["<Root>/Subtract"] = {sid: "decremental_counter:3"};
	this.sidHashMap["decremental_counter:3"] = {rtwname: "<Root>/Subtract"};
	this.rtwnameHashMap["<Root>/Switch"] = {sid: "decremental_counter:1"};
	this.sidHashMap["decremental_counter:1"] = {rtwname: "<Root>/Switch"};
	this.rtwnameHashMap["<Root>/Unit Delay"] = {sid: "decremental_counter:5"};
	this.sidHashMap["decremental_counter:5"] = {rtwname: "<Root>/Unit Delay"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "decremental_counter:7"};
	this.sidHashMap["decremental_counter:7"] = {rtwname: "<Root>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
