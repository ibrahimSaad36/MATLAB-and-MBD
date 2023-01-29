function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["factorial:2"] = "factorial.c:39,44&factorial.h:40";
	/* <Root>/Chart */
	this.urlHashMap["factorial:1"] = "factorial.c:38,41,44,45,49,51";
	/* <Root>/Out1 */
	this.urlHashMap["factorial:3"] = "factorial.c:48,51&factorial.h:45";
	/* <S1>:7 */
	this.urlHashMap["factorial:1:7"] = "msg=rtwMsg_optimizedSfObject&block=factorial:1:7";
	/* <S1>:9 */
	this.urlHashMap["factorial:1:9"] = "factorial.c:41,44";
	/* <S1>:10 */
	this.urlHashMap["factorial:1:10"] = "msg=rtwMsg_optimizedSfObject&block=factorial:1:10";
	/* <S1>:11 */
	this.urlHashMap["factorial:1:11"] = "msg=rtwMsg_optimizedSfObject&block=factorial:1:11";
	/* <S1>:12 */
	this.urlHashMap["factorial:1:12"] = "factorial.c:44";
	/* <S1>:13 */
	this.urlHashMap["factorial:1:13"] = "factorial.c:44,45";
	/* <S1>:14 */
	this.urlHashMap["factorial:1:14"] = "msg=rtwMsg_optimizedSfObject&block=factorial:1:14";
	/* <S1>:15 */
	this.urlHashMap["factorial:1:15"] = "factorial.c:51";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "factorial"};
	this.sidHashMap["factorial"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "factorial:1"};
	this.sidHashMap["factorial:1"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "factorial:2"};
	this.sidHashMap["factorial:2"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/Chart"] = {sid: "factorial:1"};
	this.sidHashMap["factorial:1"] = {rtwname: "<Root>/Chart"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "factorial:3"};
	this.sidHashMap["factorial:3"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>:7"] = {sid: "factorial:1:7"};
	this.sidHashMap["factorial:1:7"] = {rtwname: "<S1>:7"};
	this.rtwnameHashMap["<S1>:9"] = {sid: "factorial:1:9"};
	this.sidHashMap["factorial:1:9"] = {rtwname: "<S1>:9"};
	this.rtwnameHashMap["<S1>:10"] = {sid: "factorial:1:10"};
	this.sidHashMap["factorial:1:10"] = {rtwname: "<S1>:10"};
	this.rtwnameHashMap["<S1>:11"] = {sid: "factorial:1:11"};
	this.sidHashMap["factorial:1:11"] = {rtwname: "<S1>:11"};
	this.rtwnameHashMap["<S1>:12"] = {sid: "factorial:1:12"};
	this.sidHashMap["factorial:1:12"] = {rtwname: "<S1>:12"};
	this.rtwnameHashMap["<S1>:13"] = {sid: "factorial:1:13"};
	this.sidHashMap["factorial:1:13"] = {rtwname: "<S1>:13"};
	this.rtwnameHashMap["<S1>:14"] = {sid: "factorial:1:14"};
	this.sidHashMap["factorial:1:14"] = {rtwname: "<S1>:14"};
	this.rtwnameHashMap["<S1>:15"] = {sid: "factorial:1:15"};
	this.sidHashMap["factorial:1:15"] = {rtwname: "<S1>:15"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
