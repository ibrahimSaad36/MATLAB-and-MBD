function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["stateflow_calculator:2"] = "stateflow_calculator.c:41,43,49,52,57,60,65,68&stateflow_calculator.h:41";
	/* <Root>/In2 */
	this.urlHashMap["stateflow_calculator:3"] = "stateflow_calculator.c:37,39,44,50,53,58,61,66,69&stateflow_calculator.h:42";
	/* <Root>/Chart */
	this.urlHashMap["stateflow_calculator:1"] = "stateflow_calculator.c:36,39,43,48,52,56,60,64,68,89,91";
	/* <Root>/Out1 */
	this.urlHashMap["stateflow_calculator:4"] = "stateflow_calculator.c:47,52&stateflow_calculator.h:47";
	/* <Root>/Out2 */
	this.urlHashMap["stateflow_calculator:5"] = "stateflow_calculator.c:55,60&stateflow_calculator.h:48";
	/* <Root>/Out3 */
	this.urlHashMap["stateflow_calculator:6"] = "stateflow_calculator.c:63,68&stateflow_calculator.h:49";
	/* <Root>/Out4 */
	this.urlHashMap["stateflow_calculator:7"] = "stateflow_calculator.c:40,43,88,91&stateflow_calculator.h:50";
	/* <S1>:8 */
	this.urlHashMap["stateflow_calculator:1:8"] = "msg=rtwMsg_optimizedSfObject&block=stateflow_calculator:1:8";
	/* <S1>:17 */
	this.urlHashMap["stateflow_calculator:1:17"] = "stateflow_calculator.c:52,60,68";
	/* <S1>:18 */
	this.urlHashMap["stateflow_calculator:1:18"] = "msg=rtwMsg_optimizedSfObject&block=stateflow_calculator:1:18";
	/* <S1>:19 */
	this.urlHashMap["stateflow_calculator:1:19"] = "stateflow_calculator.c:39";
	/* <S1>:20 */
	this.urlHashMap["stateflow_calculator:1:20"] = "msg=rtwMsg_optimizedSfObject&block=stateflow_calculator:1:20";
	/* <S1>:21 */
	this.urlHashMap["stateflow_calculator:1:21"] = "stateflow_calculator.c:43";
	/* <S1>:22 */
	this.urlHashMap["stateflow_calculator:1:22"] = "msg=rtwMsg_optimizedSfObject&block=stateflow_calculator:1:22";
	/* <S1>:23 */
	this.urlHashMap["stateflow_calculator:1:23"] = "msg=rtwMsg_optimizedSfObject&block=stateflow_calculator:1:23";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "stateflow_calculator"};
	this.sidHashMap["stateflow_calculator"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "stateflow_calculator:1"};
	this.sidHashMap["stateflow_calculator:1"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "stateflow_calculator:2"};
	this.sidHashMap["stateflow_calculator:2"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/In2"] = {sid: "stateflow_calculator:3"};
	this.sidHashMap["stateflow_calculator:3"] = {rtwname: "<Root>/In2"};
	this.rtwnameHashMap["<Root>/Chart"] = {sid: "stateflow_calculator:1"};
	this.sidHashMap["stateflow_calculator:1"] = {rtwname: "<Root>/Chart"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "stateflow_calculator:4"};
	this.sidHashMap["stateflow_calculator:4"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<Root>/Out2"] = {sid: "stateflow_calculator:5"};
	this.sidHashMap["stateflow_calculator:5"] = {rtwname: "<Root>/Out2"};
	this.rtwnameHashMap["<Root>/Out3"] = {sid: "stateflow_calculator:6"};
	this.sidHashMap["stateflow_calculator:6"] = {rtwname: "<Root>/Out3"};
	this.rtwnameHashMap["<Root>/Out4"] = {sid: "stateflow_calculator:7"};
	this.sidHashMap["stateflow_calculator:7"] = {rtwname: "<Root>/Out4"};
	this.rtwnameHashMap["<S1>:8"] = {sid: "stateflow_calculator:1:8"};
	this.sidHashMap["stateflow_calculator:1:8"] = {rtwname: "<S1>:8"};
	this.rtwnameHashMap["<S1>:17"] = {sid: "stateflow_calculator:1:17"};
	this.sidHashMap["stateflow_calculator:1:17"] = {rtwname: "<S1>:17"};
	this.rtwnameHashMap["<S1>:18"] = {sid: "stateflow_calculator:1:18"};
	this.sidHashMap["stateflow_calculator:1:18"] = {rtwname: "<S1>:18"};
	this.rtwnameHashMap["<S1>:19"] = {sid: "stateflow_calculator:1:19"};
	this.sidHashMap["stateflow_calculator:1:19"] = {rtwname: "<S1>:19"};
	this.rtwnameHashMap["<S1>:20"] = {sid: "stateflow_calculator:1:20"};
	this.sidHashMap["stateflow_calculator:1:20"] = {rtwname: "<S1>:20"};
	this.rtwnameHashMap["<S1>:21"] = {sid: "stateflow_calculator:1:21"};
	this.sidHashMap["stateflow_calculator:1:21"] = {rtwname: "<S1>:21"};
	this.rtwnameHashMap["<S1>:22"] = {sid: "stateflow_calculator:1:22"};
	this.sidHashMap["stateflow_calculator:1:22"] = {rtwname: "<S1>:22"};
	this.rtwnameHashMap["<S1>:23"] = {sid: "stateflow_calculator:1:23"};
	this.sidHashMap["stateflow_calculator:1:23"] = {rtwname: "<S1>:23"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
