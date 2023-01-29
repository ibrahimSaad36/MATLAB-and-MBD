function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Chart */
	this.urlHashMap["even_and_odd:30"] = "even_and_odd.c:22,40,41,42,43,46,48,56,80,81,82,85,87&even_and_odd.h:43,44";
	/* <Root>/Out1 */
	this.urlHashMap["even_and_odd:31"] = "even_and_odd.c:45,46,51,52,84,87&even_and_odd.h:49";
	/* <S1>:3 */
	this.urlHashMap["even_and_odd:30:3"] = "even_and_odd.c:43,46,49,52";
	/* <S1>:5 */
	this.urlHashMap["even_and_odd:30:5"] = "even_and_odd.c:49,52";
	/* <S1>:4 */
	this.urlHashMap["even_and_odd:30:4"] = "even_and_odd.c:43,46";
	/* <S1>:18 */
	this.urlHashMap["even_and_odd:30:18"] = "even_and_odd.c:49,52";
	/* <S1>:19 */
	this.urlHashMap["even_and_odd:30:19"] = "msg=rtwMsg_optimizedSfObject&block=even_and_odd:30:19";
	/* <S2>/Constant */
	this.urlHashMap["even_and_odd:3"] = "msg=rtwMsg_reducedBlock&block=even_and_odd:3";
	/* <S2>/Constant1 */
	this.urlHashMap["even_and_odd:9"] = "msg=rtwMsg_reducedBlock&block=even_and_odd:9";
	/* <S2>/Constant2 */
	this.urlHashMap["even_and_odd:10"] = "msg=rtwMsg_reducedBlock&block=even_and_odd:10";
	/* <S2>/Constant3 */
	this.urlHashMap["even_and_odd:14"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=even_and_odd:14";
	/* <S2>/Constant4 */
	this.urlHashMap["even_and_odd:15"] = "msg=rtwMsg_reducedBlock&block=even_and_odd:15";
	/* <S2>/Constant5 */
	this.urlHashMap["even_and_odd:17"] = "even_and_odd.c:59,62";
	/* <S2>/Min */
	this.urlHashMap["even_and_odd:16"] = "even_and_odd.c:60,62";
	/* <S2>/Sum */
	this.urlHashMap["even_and_odd:5"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=even_and_odd:5";
	/* <S2>/Switch */
	this.urlHashMap["even_and_odd:8"] = "msg=rtwMsg_reducedBlock&block=even_and_odd:8";
	/* <S2>/Switch1 */
	this.urlHashMap["even_and_odd:13"] = "msg=rtwMsg_reducedBlock&block=even_and_odd:13";
	/* <S2>/Unit Delay */
	this.urlHashMap["even_and_odd:6"] = "even_and_odd.c:58,62&even_and_odd.h:42";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "even_and_odd"};
	this.sidHashMap["even_and_odd"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "even_and_odd:30"};
	this.sidHashMap["even_and_odd:30"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "even_and_odd:26"};
	this.sidHashMap["even_and_odd:26"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<Root>/Chart"] = {sid: "even_and_odd:30"};
	this.sidHashMap["even_and_odd:30"] = {rtwname: "<Root>/Chart"};
	this.rtwnameHashMap["<Root>/counter [0 to 20]"] = {sid: "even_and_odd:26"};
	this.sidHashMap["even_and_odd:26"] = {rtwname: "<Root>/counter [0 to 20]"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "even_and_odd:31"};
	this.sidHashMap["even_and_odd:31"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>:3"] = {sid: "even_and_odd:30:3"};
	this.sidHashMap["even_and_odd:30:3"] = {rtwname: "<S1>:3"};
	this.rtwnameHashMap["<S1>:5"] = {sid: "even_and_odd:30:5"};
	this.sidHashMap["even_and_odd:30:5"] = {rtwname: "<S1>:5"};
	this.rtwnameHashMap["<S1>:4"] = {sid: "even_and_odd:30:4"};
	this.sidHashMap["even_and_odd:30:4"] = {rtwname: "<S1>:4"};
	this.rtwnameHashMap["<S1>:18"] = {sid: "even_and_odd:30:18"};
	this.sidHashMap["even_and_odd:30:18"] = {rtwname: "<S1>:18"};
	this.rtwnameHashMap["<S1>:19"] = {sid: "even_and_odd:30:19"};
	this.sidHashMap["even_and_odd:30:19"] = {rtwname: "<S1>:19"};
	this.rtwnameHashMap["<S2>/Constant"] = {sid: "even_and_odd:3"};
	this.sidHashMap["even_and_odd:3"] = {rtwname: "<S2>/Constant"};
	this.rtwnameHashMap["<S2>/Constant1"] = {sid: "even_and_odd:9"};
	this.sidHashMap["even_and_odd:9"] = {rtwname: "<S2>/Constant1"};
	this.rtwnameHashMap["<S2>/Constant2"] = {sid: "even_and_odd:10"};
	this.sidHashMap["even_and_odd:10"] = {rtwname: "<S2>/Constant2"};
	this.rtwnameHashMap["<S2>/Constant3"] = {sid: "even_and_odd:14"};
	this.sidHashMap["even_and_odd:14"] = {rtwname: "<S2>/Constant3"};
	this.rtwnameHashMap["<S2>/Constant4"] = {sid: "even_and_odd:15"};
	this.sidHashMap["even_and_odd:15"] = {rtwname: "<S2>/Constant4"};
	this.rtwnameHashMap["<S2>/Constant5"] = {sid: "even_and_odd:17"};
	this.sidHashMap["even_and_odd:17"] = {rtwname: "<S2>/Constant5"};
	this.rtwnameHashMap["<S2>/Min"] = {sid: "even_and_odd:16"};
	this.sidHashMap["even_and_odd:16"] = {rtwname: "<S2>/Min"};
	this.rtwnameHashMap["<S2>/Sum"] = {sid: "even_and_odd:5"};
	this.sidHashMap["even_and_odd:5"] = {rtwname: "<S2>/Sum"};
	this.rtwnameHashMap["<S2>/Switch"] = {sid: "even_and_odd:8"};
	this.sidHashMap["even_and_odd:8"] = {rtwname: "<S2>/Switch"};
	this.rtwnameHashMap["<S2>/Switch1"] = {sid: "even_and_odd:13"};
	this.sidHashMap["even_and_odd:13"] = {rtwname: "<S2>/Switch1"};
	this.rtwnameHashMap["<S2>/Unit Delay"] = {sid: "even_and_odd:6"};
	this.sidHashMap["even_and_odd:6"] = {rtwname: "<S2>/Unit Delay"};
	this.rtwnameHashMap["<S2>/Out1"] = {sid: "even_and_odd:29"};
	this.sidHashMap["even_and_odd:29"] = {rtwname: "<S2>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
