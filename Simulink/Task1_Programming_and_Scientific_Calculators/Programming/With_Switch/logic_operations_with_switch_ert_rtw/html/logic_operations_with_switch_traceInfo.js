function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/op1 */
	this.urlHashMap["logic_operations_with_switch:39"] = "logic_operations_with_switch.c:54,58,69,73,84,88,99,103,114,118,129,133,144,148&logic_operations_with_switch.h:44";
	/* <Root>/op2 */
	this.urlHashMap["logic_operations_with_switch:40"] = "logic_operations_with_switch.c:55,59,70,74,85,89,100,104,115,119,130,134,145,149&logic_operations_with_switch.h:45";
	/* <Root>/select */
	this.urlHashMap["logic_operations_with_switch:49"] = "logic_operations_with_switch.c:39,41&logic_operations_with_switch.h:46";
	/* <Root>/Switch Case */
	this.urlHashMap["logic_operations_with_switch:9"] = "logic_operations_with_switch.c:38,41,42,43,45,48,49,64,79,94,109,124,155";
	/* <Root>/Switch Case Action
Subsystem */
	this.urlHashMap["logic_operations_with_switch:10"] = "logic_operations_with_switch.c:50,61";
	/* <Root>/Switch Case Action
Subsystem1 */
	this.urlHashMap["logic_operations_with_switch:14"] = "logic_operations_with_switch.c:65,76";
	/* <Root>/Switch Case Action
Subsystem2 */
	this.urlHashMap["logic_operations_with_switch:18"] = "logic_operations_with_switch.c:80,91";
	/* <Root>/Switch Case Action
Subsystem3 */
	this.urlHashMap["logic_operations_with_switch:22"] = "logic_operations_with_switch.c:95,106";
	/* <Root>/Switch Case Action
Subsystem4 */
	this.urlHashMap["logic_operations_with_switch:26"] = "logic_operations_with_switch.c:110,121";
	/* <Root>/Switch Case Action
Subsystem5 */
	this.urlHashMap["logic_operations_with_switch:30"] = "logic_operations_with_switch.c:125,136";
	/* <Root>/Switch Case Action
Subsystem6 */
	this.urlHashMap["logic_operations_with_switch:34"] = "logic_operations_with_switch.c:140,151";
	/* <Root>/AND */
	this.urlHashMap["logic_operations_with_switch:50"] = "logic_operations_with_switch.c:53,58&logic_operations_with_switch.h:51";
	/* <Root>/OR */
	this.urlHashMap["logic_operations_with_switch:51"] = "logic_operations_with_switch.c:68,73&logic_operations_with_switch.h:52";
	/* <Root>/NAND */
	this.urlHashMap["logic_operations_with_switch:52"] = "logic_operations_with_switch.c:83,88&logic_operations_with_switch.h:53";
	/* <Root>/NOR */
	this.urlHashMap["logic_operations_with_switch:53"] = "logic_operations_with_switch.c:98,103&logic_operations_with_switch.h:54";
	/* <Root>/XOR */
	this.urlHashMap["logic_operations_with_switch:54"] = "logic_operations_with_switch.c:113,118&logic_operations_with_switch.h:55";
	/* <Root>/XNOR */
	this.urlHashMap["logic_operations_with_switch:55"] = "logic_operations_with_switch.c:128,133&logic_operations_with_switch.h:56";
	/* <Root>/AND_DEF */
	this.urlHashMap["logic_operations_with_switch:56"] = "logic_operations_with_switch.c:143,148&logic_operations_with_switch.h:57";
	/* <S1>/Action Port */
	this.urlHashMap["logic_operations_with_switch:12"] = "logic_operations_with_switch.c:51";
	/* <S1>/Logical
Operator */
	this.urlHashMap["logic_operations_with_switch:3"] = "logic_operations_with_switch.c:56,58";
	/* <S2>/Action Port */
	this.urlHashMap["logic_operations_with_switch:16"] = "logic_operations_with_switch.c:66";
	/* <S2>/Logical
Operator1 */
	this.urlHashMap["logic_operations_with_switch:4"] = "logic_operations_with_switch.c:71,73";
	/* <S3>/Action Port */
	this.urlHashMap["logic_operations_with_switch:20"] = "logic_operations_with_switch.c:81";
	/* <S3>/Logical
Operator2 */
	this.urlHashMap["logic_operations_with_switch:5"] = "logic_operations_with_switch.c:86,88";
	/* <S4>/Action Port */
	this.urlHashMap["logic_operations_with_switch:24"] = "logic_operations_with_switch.c:96";
	/* <S4>/Logical
Operator3 */
	this.urlHashMap["logic_operations_with_switch:6"] = "logic_operations_with_switch.c:101,103";
	/* <S5>/Action Port */
	this.urlHashMap["logic_operations_with_switch:28"] = "logic_operations_with_switch.c:111";
	/* <S5>/Logical
Operator4 */
	this.urlHashMap["logic_operations_with_switch:7"] = "logic_operations_with_switch.c:116,118";
	/* <S6>/Action Port */
	this.urlHashMap["logic_operations_with_switch:32"] = "logic_operations_with_switch.c:126";
	/* <S6>/Logical
Operator5 */
	this.urlHashMap["logic_operations_with_switch:8"] = "logic_operations_with_switch.c:131,133";
	/* <S7>/Action Port */
	this.urlHashMap["logic_operations_with_switch:36"] = "logic_operations_with_switch.c:141";
	/* <S7>/Logical
Operator */
	this.urlHashMap["logic_operations_with_switch:38"] = "logic_operations_with_switch.c:146,148,149";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "logic_operations_with_switch"};
	this.sidHashMap["logic_operations_with_switch"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "logic_operations_with_switch:10"};
	this.sidHashMap["logic_operations_with_switch:10"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "logic_operations_with_switch:14"};
	this.sidHashMap["logic_operations_with_switch:14"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "logic_operations_with_switch:18"};
	this.sidHashMap["logic_operations_with_switch:18"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<S4>"] = {sid: "logic_operations_with_switch:22"};
	this.sidHashMap["logic_operations_with_switch:22"] = {rtwname: "<S4>"};
	this.rtwnameHashMap["<S5>"] = {sid: "logic_operations_with_switch:26"};
	this.sidHashMap["logic_operations_with_switch:26"] = {rtwname: "<S5>"};
	this.rtwnameHashMap["<S6>"] = {sid: "logic_operations_with_switch:30"};
	this.sidHashMap["logic_operations_with_switch:30"] = {rtwname: "<S6>"};
	this.rtwnameHashMap["<S7>"] = {sid: "logic_operations_with_switch:34"};
	this.sidHashMap["logic_operations_with_switch:34"] = {rtwname: "<S7>"};
	this.rtwnameHashMap["<Root>/op1"] = {sid: "logic_operations_with_switch:39"};
	this.sidHashMap["logic_operations_with_switch:39"] = {rtwname: "<Root>/op1"};
	this.rtwnameHashMap["<Root>/op2"] = {sid: "logic_operations_with_switch:40"};
	this.sidHashMap["logic_operations_with_switch:40"] = {rtwname: "<Root>/op2"};
	this.rtwnameHashMap["<Root>/select"] = {sid: "logic_operations_with_switch:49"};
	this.sidHashMap["logic_operations_with_switch:49"] = {rtwname: "<Root>/select"};
	this.rtwnameHashMap["<Root>/Switch Case"] = {sid: "logic_operations_with_switch:9"};
	this.sidHashMap["logic_operations_with_switch:9"] = {rtwname: "<Root>/Switch Case"};
	this.rtwnameHashMap["<Root>/Switch Case Action Subsystem"] = {sid: "logic_operations_with_switch:10"};
	this.sidHashMap["logic_operations_with_switch:10"] = {rtwname: "<Root>/Switch Case Action Subsystem"};
	this.rtwnameHashMap["<Root>/Switch Case Action Subsystem1"] = {sid: "logic_operations_with_switch:14"};
	this.sidHashMap["logic_operations_with_switch:14"] = {rtwname: "<Root>/Switch Case Action Subsystem1"};
	this.rtwnameHashMap["<Root>/Switch Case Action Subsystem2"] = {sid: "logic_operations_with_switch:18"};
	this.sidHashMap["logic_operations_with_switch:18"] = {rtwname: "<Root>/Switch Case Action Subsystem2"};
	this.rtwnameHashMap["<Root>/Switch Case Action Subsystem3"] = {sid: "logic_operations_with_switch:22"};
	this.sidHashMap["logic_operations_with_switch:22"] = {rtwname: "<Root>/Switch Case Action Subsystem3"};
	this.rtwnameHashMap["<Root>/Switch Case Action Subsystem4"] = {sid: "logic_operations_with_switch:26"};
	this.sidHashMap["logic_operations_with_switch:26"] = {rtwname: "<Root>/Switch Case Action Subsystem4"};
	this.rtwnameHashMap["<Root>/Switch Case Action Subsystem5"] = {sid: "logic_operations_with_switch:30"};
	this.sidHashMap["logic_operations_with_switch:30"] = {rtwname: "<Root>/Switch Case Action Subsystem5"};
	this.rtwnameHashMap["<Root>/Switch Case Action Subsystem6"] = {sid: "logic_operations_with_switch:34"};
	this.sidHashMap["logic_operations_with_switch:34"] = {rtwname: "<Root>/Switch Case Action Subsystem6"};
	this.rtwnameHashMap["<Root>/AND"] = {sid: "logic_operations_with_switch:50"};
	this.sidHashMap["logic_operations_with_switch:50"] = {rtwname: "<Root>/AND"};
	this.rtwnameHashMap["<Root>/OR"] = {sid: "logic_operations_with_switch:51"};
	this.sidHashMap["logic_operations_with_switch:51"] = {rtwname: "<Root>/OR"};
	this.rtwnameHashMap["<Root>/NAND"] = {sid: "logic_operations_with_switch:52"};
	this.sidHashMap["logic_operations_with_switch:52"] = {rtwname: "<Root>/NAND"};
	this.rtwnameHashMap["<Root>/NOR"] = {sid: "logic_operations_with_switch:53"};
	this.sidHashMap["logic_operations_with_switch:53"] = {rtwname: "<Root>/NOR"};
	this.rtwnameHashMap["<Root>/XOR"] = {sid: "logic_operations_with_switch:54"};
	this.sidHashMap["logic_operations_with_switch:54"] = {rtwname: "<Root>/XOR"};
	this.rtwnameHashMap["<Root>/XNOR"] = {sid: "logic_operations_with_switch:55"};
	this.sidHashMap["logic_operations_with_switch:55"] = {rtwname: "<Root>/XNOR"};
	this.rtwnameHashMap["<Root>/AND_DEF"] = {sid: "logic_operations_with_switch:56"};
	this.sidHashMap["logic_operations_with_switch:56"] = {rtwname: "<Root>/AND_DEF"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "logic_operations_with_switch:11"};
	this.sidHashMap["logic_operations_with_switch:11"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/In2"] = {sid: "logic_operations_with_switch:41"};
	this.sidHashMap["logic_operations_with_switch:41"] = {rtwname: "<S1>/In2"};
	this.rtwnameHashMap["<S1>/Action Port"] = {sid: "logic_operations_with_switch:12"};
	this.sidHashMap["logic_operations_with_switch:12"] = {rtwname: "<S1>/Action Port"};
	this.rtwnameHashMap["<S1>/Logical Operator"] = {sid: "logic_operations_with_switch:3"};
	this.sidHashMap["logic_operations_with_switch:3"] = {rtwname: "<S1>/Logical Operator"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "logic_operations_with_switch:13"};
	this.sidHashMap["logic_operations_with_switch:13"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S2>/In1"] = {sid: "logic_operations_with_switch:15"};
	this.sidHashMap["logic_operations_with_switch:15"] = {rtwname: "<S2>/In1"};
	this.rtwnameHashMap["<S2>/In2"] = {sid: "logic_operations_with_switch:43"};
	this.sidHashMap["logic_operations_with_switch:43"] = {rtwname: "<S2>/In2"};
	this.rtwnameHashMap["<S2>/Action Port"] = {sid: "logic_operations_with_switch:16"};
	this.sidHashMap["logic_operations_with_switch:16"] = {rtwname: "<S2>/Action Port"};
	this.rtwnameHashMap["<S2>/Logical Operator1"] = {sid: "logic_operations_with_switch:4"};
	this.sidHashMap["logic_operations_with_switch:4"] = {rtwname: "<S2>/Logical Operator1"};
	this.rtwnameHashMap["<S2>/Out1"] = {sid: "logic_operations_with_switch:17"};
	this.sidHashMap["logic_operations_with_switch:17"] = {rtwname: "<S2>/Out1"};
	this.rtwnameHashMap["<S3>/In1"] = {sid: "logic_operations_with_switch:19"};
	this.sidHashMap["logic_operations_with_switch:19"] = {rtwname: "<S3>/In1"};
	this.rtwnameHashMap["<S3>/In2"] = {sid: "logic_operations_with_switch:44"};
	this.sidHashMap["logic_operations_with_switch:44"] = {rtwname: "<S3>/In2"};
	this.rtwnameHashMap["<S3>/Action Port"] = {sid: "logic_operations_with_switch:20"};
	this.sidHashMap["logic_operations_with_switch:20"] = {rtwname: "<S3>/Action Port"};
	this.rtwnameHashMap["<S3>/Logical Operator2"] = {sid: "logic_operations_with_switch:5"};
	this.sidHashMap["logic_operations_with_switch:5"] = {rtwname: "<S3>/Logical Operator2"};
	this.rtwnameHashMap["<S3>/Out1"] = {sid: "logic_operations_with_switch:21"};
	this.sidHashMap["logic_operations_with_switch:21"] = {rtwname: "<S3>/Out1"};
	this.rtwnameHashMap["<S4>/In1"] = {sid: "logic_operations_with_switch:23"};
	this.sidHashMap["logic_operations_with_switch:23"] = {rtwname: "<S4>/In1"};
	this.rtwnameHashMap["<S4>/In2"] = {sid: "logic_operations_with_switch:45"};
	this.sidHashMap["logic_operations_with_switch:45"] = {rtwname: "<S4>/In2"};
	this.rtwnameHashMap["<S4>/Action Port"] = {sid: "logic_operations_with_switch:24"};
	this.sidHashMap["logic_operations_with_switch:24"] = {rtwname: "<S4>/Action Port"};
	this.rtwnameHashMap["<S4>/Logical Operator3"] = {sid: "logic_operations_with_switch:6"};
	this.sidHashMap["logic_operations_with_switch:6"] = {rtwname: "<S4>/Logical Operator3"};
	this.rtwnameHashMap["<S4>/Out1"] = {sid: "logic_operations_with_switch:25"};
	this.sidHashMap["logic_operations_with_switch:25"] = {rtwname: "<S4>/Out1"};
	this.rtwnameHashMap["<S5>/In1"] = {sid: "logic_operations_with_switch:27"};
	this.sidHashMap["logic_operations_with_switch:27"] = {rtwname: "<S5>/In1"};
	this.rtwnameHashMap["<S5>/In2"] = {sid: "logic_operations_with_switch:46"};
	this.sidHashMap["logic_operations_with_switch:46"] = {rtwname: "<S5>/In2"};
	this.rtwnameHashMap["<S5>/Action Port"] = {sid: "logic_operations_with_switch:28"};
	this.sidHashMap["logic_operations_with_switch:28"] = {rtwname: "<S5>/Action Port"};
	this.rtwnameHashMap["<S5>/Logical Operator4"] = {sid: "logic_operations_with_switch:7"};
	this.sidHashMap["logic_operations_with_switch:7"] = {rtwname: "<S5>/Logical Operator4"};
	this.rtwnameHashMap["<S5>/Out1"] = {sid: "logic_operations_with_switch:29"};
	this.sidHashMap["logic_operations_with_switch:29"] = {rtwname: "<S5>/Out1"};
	this.rtwnameHashMap["<S6>/In1"] = {sid: "logic_operations_with_switch:31"};
	this.sidHashMap["logic_operations_with_switch:31"] = {rtwname: "<S6>/In1"};
	this.rtwnameHashMap["<S6>/In2"] = {sid: "logic_operations_with_switch:47"};
	this.sidHashMap["logic_operations_with_switch:47"] = {rtwname: "<S6>/In2"};
	this.rtwnameHashMap["<S6>/Action Port"] = {sid: "logic_operations_with_switch:32"};
	this.sidHashMap["logic_operations_with_switch:32"] = {rtwname: "<S6>/Action Port"};
	this.rtwnameHashMap["<S6>/Logical Operator5"] = {sid: "logic_operations_with_switch:8"};
	this.sidHashMap["logic_operations_with_switch:8"] = {rtwname: "<S6>/Logical Operator5"};
	this.rtwnameHashMap["<S6>/Out1"] = {sid: "logic_operations_with_switch:33"};
	this.sidHashMap["logic_operations_with_switch:33"] = {rtwname: "<S6>/Out1"};
	this.rtwnameHashMap["<S7>/In1"] = {sid: "logic_operations_with_switch:35"};
	this.sidHashMap["logic_operations_with_switch:35"] = {rtwname: "<S7>/In1"};
	this.rtwnameHashMap["<S7>/In2"] = {sid: "logic_operations_with_switch:48"};
	this.sidHashMap["logic_operations_with_switch:48"] = {rtwname: "<S7>/In2"};
	this.rtwnameHashMap["<S7>/Action Port"] = {sid: "logic_operations_with_switch:36"};
	this.sidHashMap["logic_operations_with_switch:36"] = {rtwname: "<S7>/Action Port"};
	this.rtwnameHashMap["<S7>/Logical Operator"] = {sid: "logic_operations_with_switch:38"};
	this.sidHashMap["logic_operations_with_switch:38"] = {rtwname: "<S7>/Logical Operator"};
	this.rtwnameHashMap["<S7>/Out1"] = {sid: "logic_operations_with_switch:37"};
	this.sidHashMap["logic_operations_with_switch:37"] = {rtwname: "<S7>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
