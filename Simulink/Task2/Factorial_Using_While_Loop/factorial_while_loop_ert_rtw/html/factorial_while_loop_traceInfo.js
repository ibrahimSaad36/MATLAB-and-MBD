function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["factorial_while_loop:33"] = "factorial_while_loop.c:48,49,63,65&factorial_while_loop.h:40";
	/* <Root>/While Iterator
Subsystem */
	this.urlHashMap["factorial_while_loop:14"] = "factorial_while_loop.c:40,69";
	/* <Root>/Out1 */
	this.urlHashMap["factorial_while_loop:34"] = "factorial_while_loop.c:51,55,58,60&factorial_while_loop.h:45";
	/* <S1>/Product */
	this.urlHashMap["factorial_while_loop:27"] = "factorial_while_loop.c:52,55";
	/* <S1>/Relational
Operator */
	this.urlHashMap["factorial_while_loop:21"] = "factorial_while_loop.c:62,65";
	/* <S1>/Unit Delay */
	this.urlHashMap["factorial_while_loop:28"] = "factorial_while_loop.c:45,46,53,55,57,60";
	/* <S1>/While Iterator */
	this.urlHashMap["factorial_while_loop:17"] = "factorial_while_loop.c:41,43,49,50,55,65,66";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "factorial_while_loop"};
	this.sidHashMap["factorial_while_loop"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "factorial_while_loop:14"};
	this.sidHashMap["factorial_while_loop:14"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "factorial_while_loop:33"};
	this.sidHashMap["factorial_while_loop:33"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/While Iterator Subsystem"] = {sid: "factorial_while_loop:14"};
	this.sidHashMap["factorial_while_loop:14"] = {rtwname: "<Root>/While Iterator Subsystem"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "factorial_while_loop:34"};
	this.sidHashMap["factorial_while_loop:34"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>/IC"] = {sid: "factorial_while_loop:16"};
	this.sidHashMap["factorial_while_loop:16"] = {rtwname: "<S1>/IC"};
	this.rtwnameHashMap["<S1>/Product"] = {sid: "factorial_while_loop:27"};
	this.sidHashMap["factorial_while_loop:27"] = {rtwname: "<S1>/Product"};
	this.rtwnameHashMap["<S1>/Relational Operator"] = {sid: "factorial_while_loop:21"};
	this.sidHashMap["factorial_while_loop:21"] = {rtwname: "<S1>/Relational Operator"};
	this.rtwnameHashMap["<S1>/Unit Delay"] = {sid: "factorial_while_loop:28"};
	this.sidHashMap["factorial_while_loop:28"] = {rtwname: "<S1>/Unit Delay"};
	this.rtwnameHashMap["<S1>/While Iterator"] = {sid: "factorial_while_loop:17"};
	this.sidHashMap["factorial_while_loop:17"] = {rtwname: "<S1>/While Iterator"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "factorial_while_loop:18"};
	this.sidHashMap["factorial_while_loop:18"] = {rtwname: "<S1>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
