function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["grading:26"] = "grading.c:36,38,49,60,71&grading.h:40";
	/* <Root>/Constant */
	this.urlHashMap["grading:29"] = "grading.c:43,46";
	/* <Root>/Constant1 */
	this.urlHashMap["grading:30"] = "grading.c:54,57";
	/* <Root>/Constant2 */
	this.urlHashMap["grading:31"] = "grading.c:65,68";
	/* <Root>/Constant3 */
	this.urlHashMap["grading:32"] = "grading.c:76,79";
	/* <Root>/Constant4 */
	this.urlHashMap["grading:33"] = "grading.c:87,90";
	/* <Root>/If */
	this.urlHashMap["grading:1"] = "grading.c:35,38,46,49,57,60,68,71,79,95";
	/* <Root>/If Action
Subsystem */
	this.urlHashMap["grading:2"] = "grading.c:50,59";
	/* <Root>/If Action
Subsystem1 */
	this.urlHashMap["grading:6"] = "grading.c:61,70";
	/* <Root>/If Action
Subsystem2 */
	this.urlHashMap["grading:10"] = "grading.c:72,81";
	/* <Root>/If Action
Subsystem3 */
	this.urlHashMap["grading:14"] = "grading.c:83,92";
	/* <Root>/If Action
Subsystem4 */
	this.urlHashMap["grading:18"] = "grading.c:39,48";
	/* <Root>/Merge */
	this.urlHashMap["grading:22"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=grading:22";
	/* <Root>/Out1 */
	this.urlHashMap["grading:27"] = "grading.c:42,46,53,57,64,68,75,79,86,90&grading.h:45";
	/* <S1>/In1 */
	this.urlHashMap["grading:3"] = "grading.c:55,57";
	/* <S1>/Action Port */
	this.urlHashMap["grading:4"] = "grading.c:51";
	/* <S2>/In1 */
	this.urlHashMap["grading:7"] = "grading.c:66,68";
	/* <S2>/Action Port */
	this.urlHashMap["grading:8"] = "grading.c:62";
	/* <S3>/In1 */
	this.urlHashMap["grading:11"] = "grading.c:77,79";
	/* <S3>/Action Port */
	this.urlHashMap["grading:12"] = "grading.c:73";
	/* <S4>/In1 */
	this.urlHashMap["grading:15"] = "grading.c:88,90";
	/* <S4>/Action Port */
	this.urlHashMap["grading:16"] = "grading.c:84";
	/* <S5>/In1 */
	this.urlHashMap["grading:19"] = "grading.c:44,46";
	/* <S5>/Action Port */
	this.urlHashMap["grading:20"] = "grading.c:40";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "grading"};
	this.sidHashMap["grading"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "grading:2"};
	this.sidHashMap["grading:2"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "grading:6"};
	this.sidHashMap["grading:6"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "grading:10"};
	this.sidHashMap["grading:10"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<S4>"] = {sid: "grading:14"};
	this.sidHashMap["grading:14"] = {rtwname: "<S4>"};
	this.rtwnameHashMap["<S5>"] = {sid: "grading:18"};
	this.sidHashMap["grading:18"] = {rtwname: "<S5>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "grading:26"};
	this.sidHashMap["grading:26"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/Constant"] = {sid: "grading:29"};
	this.sidHashMap["grading:29"] = {rtwname: "<Root>/Constant"};
	this.rtwnameHashMap["<Root>/Constant1"] = {sid: "grading:30"};
	this.sidHashMap["grading:30"] = {rtwname: "<Root>/Constant1"};
	this.rtwnameHashMap["<Root>/Constant2"] = {sid: "grading:31"};
	this.sidHashMap["grading:31"] = {rtwname: "<Root>/Constant2"};
	this.rtwnameHashMap["<Root>/Constant3"] = {sid: "grading:32"};
	this.sidHashMap["grading:32"] = {rtwname: "<Root>/Constant3"};
	this.rtwnameHashMap["<Root>/Constant4"] = {sid: "grading:33"};
	this.sidHashMap["grading:33"] = {rtwname: "<Root>/Constant4"};
	this.rtwnameHashMap["<Root>/If"] = {sid: "grading:1"};
	this.sidHashMap["grading:1"] = {rtwname: "<Root>/If"};
	this.rtwnameHashMap["<Root>/If Action Subsystem"] = {sid: "grading:2"};
	this.sidHashMap["grading:2"] = {rtwname: "<Root>/If Action Subsystem"};
	this.rtwnameHashMap["<Root>/If Action Subsystem1"] = {sid: "grading:6"};
	this.sidHashMap["grading:6"] = {rtwname: "<Root>/If Action Subsystem1"};
	this.rtwnameHashMap["<Root>/If Action Subsystem2"] = {sid: "grading:10"};
	this.sidHashMap["grading:10"] = {rtwname: "<Root>/If Action Subsystem2"};
	this.rtwnameHashMap["<Root>/If Action Subsystem3"] = {sid: "grading:14"};
	this.sidHashMap["grading:14"] = {rtwname: "<Root>/If Action Subsystem3"};
	this.rtwnameHashMap["<Root>/If Action Subsystem4"] = {sid: "grading:18"};
	this.sidHashMap["grading:18"] = {rtwname: "<Root>/If Action Subsystem4"};
	this.rtwnameHashMap["<Root>/Merge"] = {sid: "grading:22"};
	this.sidHashMap["grading:22"] = {rtwname: "<Root>/Merge"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "grading:27"};
	this.sidHashMap["grading:27"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "grading:3"};
	this.sidHashMap["grading:3"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/Action Port"] = {sid: "grading:4"};
	this.sidHashMap["grading:4"] = {rtwname: "<S1>/Action Port"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "grading:5"};
	this.sidHashMap["grading:5"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S2>/In1"] = {sid: "grading:7"};
	this.sidHashMap["grading:7"] = {rtwname: "<S2>/In1"};
	this.rtwnameHashMap["<S2>/Action Port"] = {sid: "grading:8"};
	this.sidHashMap["grading:8"] = {rtwname: "<S2>/Action Port"};
	this.rtwnameHashMap["<S2>/Out1"] = {sid: "grading:9"};
	this.sidHashMap["grading:9"] = {rtwname: "<S2>/Out1"};
	this.rtwnameHashMap["<S3>/In1"] = {sid: "grading:11"};
	this.sidHashMap["grading:11"] = {rtwname: "<S3>/In1"};
	this.rtwnameHashMap["<S3>/Action Port"] = {sid: "grading:12"};
	this.sidHashMap["grading:12"] = {rtwname: "<S3>/Action Port"};
	this.rtwnameHashMap["<S3>/Out1"] = {sid: "grading:13"};
	this.sidHashMap["grading:13"] = {rtwname: "<S3>/Out1"};
	this.rtwnameHashMap["<S4>/In1"] = {sid: "grading:15"};
	this.sidHashMap["grading:15"] = {rtwname: "<S4>/In1"};
	this.rtwnameHashMap["<S4>/Action Port"] = {sid: "grading:16"};
	this.sidHashMap["grading:16"] = {rtwname: "<S4>/Action Port"};
	this.rtwnameHashMap["<S4>/Out1"] = {sid: "grading:17"};
	this.sidHashMap["grading:17"] = {rtwname: "<S4>/Out1"};
	this.rtwnameHashMap["<S5>/In1"] = {sid: "grading:19"};
	this.sidHashMap["grading:19"] = {rtwname: "<S5>/In1"};
	this.rtwnameHashMap["<S5>/Action Port"] = {sid: "grading:20"};
	this.sidHashMap["grading:20"] = {rtwname: "<S5>/Action Port"};
	this.rtwnameHashMap["<S5>/Out1"] = {sid: "grading:21"};
	this.sidHashMap["grading:21"] = {rtwname: "<S5>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
