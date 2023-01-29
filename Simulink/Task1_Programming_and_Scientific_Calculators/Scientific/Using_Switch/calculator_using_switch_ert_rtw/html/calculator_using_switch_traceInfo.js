function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Action */
	this.urlHashMap["calculator_using_switch:6"] = "calculator_using_switch.c:42,44&calculator_using_switch.h:49";
	/* <Root>/Operand1 */
	this.urlHashMap["calculator_using_switch:21"] = "calculator_using_switch.c:57,60,71,74,85,88,99,102&calculator_using_switch.h:50";
	/* <Root>/Operand2 */
	this.urlHashMap["calculator_using_switch:22"] = "calculator_using_switch.c:58,61,72,75,86,89,100,103&calculator_using_switch.h:51";
	/* <Root>/Merge */
	this.urlHashMap["calculator_using_switch:8"] = "calculator_using_switch.c:137,138&calculator_using_switch.h:44";
	/* <Root>/Switch Case */
	this.urlHashMap["calculator_using_switch:1"] = "calculator_using_switch.c:41,44,45,46,48,51,52,66,80,94,109";
	/* <Root>/Switch Case Action
Subsystem */
	this.urlHashMap["calculator_using_switch:2"] = "calculator_using_switch.c:53,63";
	/* <Root>/Switch Case Action
Subsystem1 */
	this.urlHashMap["calculator_using_switch:9"] = "calculator_using_switch.c:67,77";
	/* <Root>/Switch Case Action
Subsystem2 */
	this.urlHashMap["calculator_using_switch:13"] = "calculator_using_switch.c:81,91";
	/* <Root>/Switch Case Action
Subsystem3 */
	this.urlHashMap["calculator_using_switch:17"] = "calculator_using_switch.c:95,105";
	/* <Root>/Result */
	this.urlHashMap["calculator_using_switch:7"] = "calculator_using_switch.c:111,112&calculator_using_switch.h:56";
	/* <S1>/Action Port */
	this.urlHashMap["calculator_using_switch:4"] = "calculator_using_switch.c:54";
	/* <S1>/Add */
	this.urlHashMap["calculator_using_switch:27"] = "calculator_using_switch.c:56,60";
	/* <S2>/Action Port */
	this.urlHashMap["calculator_using_switch:11"] = "calculator_using_switch.c:68";
	/* <S2>/Subtract */
	this.urlHashMap["calculator_using_switch:28"] = "calculator_using_switch.c:70,74";
	/* <S3>/Action Port */
	this.urlHashMap["calculator_using_switch:15"] = "calculator_using_switch.c:82";
	/* <S3>/Product */
	this.urlHashMap["calculator_using_switch:29"] = "calculator_using_switch.c:84,88";
	/* <S4>/Action Port */
	this.urlHashMap["calculator_using_switch:19"] = "calculator_using_switch.c:96";
	/* <S4>/Divide */
	this.urlHashMap["calculator_using_switch:30"] = "calculator_using_switch.c:98,102";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "calculator_using_switch"};
	this.sidHashMap["calculator_using_switch"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "calculator_using_switch:2"};
	this.sidHashMap["calculator_using_switch:2"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "calculator_using_switch:9"};
	this.sidHashMap["calculator_using_switch:9"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "calculator_using_switch:13"};
	this.sidHashMap["calculator_using_switch:13"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<S4>"] = {sid: "calculator_using_switch:17"};
	this.sidHashMap["calculator_using_switch:17"] = {rtwname: "<S4>"};
	this.rtwnameHashMap["<Root>/Action"] = {sid: "calculator_using_switch:6"};
	this.sidHashMap["calculator_using_switch:6"] = {rtwname: "<Root>/Action"};
	this.rtwnameHashMap["<Root>/Operand1"] = {sid: "calculator_using_switch:21"};
	this.sidHashMap["calculator_using_switch:21"] = {rtwname: "<Root>/Operand1"};
	this.rtwnameHashMap["<Root>/Operand2"] = {sid: "calculator_using_switch:22"};
	this.sidHashMap["calculator_using_switch:22"] = {rtwname: "<Root>/Operand2"};
	this.rtwnameHashMap["<Root>/Merge"] = {sid: "calculator_using_switch:8"};
	this.sidHashMap["calculator_using_switch:8"] = {rtwname: "<Root>/Merge"};
	this.rtwnameHashMap["<Root>/Switch Case"] = {sid: "calculator_using_switch:1"};
	this.sidHashMap["calculator_using_switch:1"] = {rtwname: "<Root>/Switch Case"};
	this.rtwnameHashMap["<Root>/Switch Case Action Subsystem"] = {sid: "calculator_using_switch:2"};
	this.sidHashMap["calculator_using_switch:2"] = {rtwname: "<Root>/Switch Case Action Subsystem"};
	this.rtwnameHashMap["<Root>/Switch Case Action Subsystem1"] = {sid: "calculator_using_switch:9"};
	this.sidHashMap["calculator_using_switch:9"] = {rtwname: "<Root>/Switch Case Action Subsystem1"};
	this.rtwnameHashMap["<Root>/Switch Case Action Subsystem2"] = {sid: "calculator_using_switch:13"};
	this.sidHashMap["calculator_using_switch:13"] = {rtwname: "<Root>/Switch Case Action Subsystem2"};
	this.rtwnameHashMap["<Root>/Switch Case Action Subsystem3"] = {sid: "calculator_using_switch:17"};
	this.sidHashMap["calculator_using_switch:17"] = {rtwname: "<Root>/Switch Case Action Subsystem3"};
	this.rtwnameHashMap["<Root>/Result"] = {sid: "calculator_using_switch:7"};
	this.sidHashMap["calculator_using_switch:7"] = {rtwname: "<Root>/Result"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "calculator_using_switch:3"};
	this.sidHashMap["calculator_using_switch:3"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/In2"] = {sid: "calculator_using_switch:23"};
	this.sidHashMap["calculator_using_switch:23"] = {rtwname: "<S1>/In2"};
	this.rtwnameHashMap["<S1>/Action Port"] = {sid: "calculator_using_switch:4"};
	this.sidHashMap["calculator_using_switch:4"] = {rtwname: "<S1>/Action Port"};
	this.rtwnameHashMap["<S1>/Add"] = {sid: "calculator_using_switch:27"};
	this.sidHashMap["calculator_using_switch:27"] = {rtwname: "<S1>/Add"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "calculator_using_switch:5"};
	this.sidHashMap["calculator_using_switch:5"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S2>/In1"] = {sid: "calculator_using_switch:10"};
	this.sidHashMap["calculator_using_switch:10"] = {rtwname: "<S2>/In1"};
	this.rtwnameHashMap["<S2>/In2"] = {sid: "calculator_using_switch:24"};
	this.sidHashMap["calculator_using_switch:24"] = {rtwname: "<S2>/In2"};
	this.rtwnameHashMap["<S2>/Action Port"] = {sid: "calculator_using_switch:11"};
	this.sidHashMap["calculator_using_switch:11"] = {rtwname: "<S2>/Action Port"};
	this.rtwnameHashMap["<S2>/Subtract"] = {sid: "calculator_using_switch:28"};
	this.sidHashMap["calculator_using_switch:28"] = {rtwname: "<S2>/Subtract"};
	this.rtwnameHashMap["<S2>/Out1"] = {sid: "calculator_using_switch:12"};
	this.sidHashMap["calculator_using_switch:12"] = {rtwname: "<S2>/Out1"};
	this.rtwnameHashMap["<S3>/In1"] = {sid: "calculator_using_switch:14"};
	this.sidHashMap["calculator_using_switch:14"] = {rtwname: "<S3>/In1"};
	this.rtwnameHashMap["<S3>/In2"] = {sid: "calculator_using_switch:25"};
	this.sidHashMap["calculator_using_switch:25"] = {rtwname: "<S3>/In2"};
	this.rtwnameHashMap["<S3>/Action Port"] = {sid: "calculator_using_switch:15"};
	this.sidHashMap["calculator_using_switch:15"] = {rtwname: "<S3>/Action Port"};
	this.rtwnameHashMap["<S3>/Product"] = {sid: "calculator_using_switch:29"};
	this.sidHashMap["calculator_using_switch:29"] = {rtwname: "<S3>/Product"};
	this.rtwnameHashMap["<S3>/Out1"] = {sid: "calculator_using_switch:16"};
	this.sidHashMap["calculator_using_switch:16"] = {rtwname: "<S3>/Out1"};
	this.rtwnameHashMap["<S4>/In1"] = {sid: "calculator_using_switch:18"};
	this.sidHashMap["calculator_using_switch:18"] = {rtwname: "<S4>/In1"};
	this.rtwnameHashMap["<S4>/In2"] = {sid: "calculator_using_switch:26"};
	this.sidHashMap["calculator_using_switch:26"] = {rtwname: "<S4>/In2"};
	this.rtwnameHashMap["<S4>/Action Port"] = {sid: "calculator_using_switch:19"};
	this.sidHashMap["calculator_using_switch:19"] = {rtwname: "<S4>/Action Port"};
	this.rtwnameHashMap["<S4>/Divide"] = {sid: "calculator_using_switch:30"};
	this.sidHashMap["calculator_using_switch:30"] = {rtwname: "<S4>/Divide"};
	this.rtwnameHashMap["<S4>/Out1"] = {sid: "calculator_using_switch:20"};
	this.sidHashMap["calculator_using_switch:20"] = {rtwname: "<S4>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
