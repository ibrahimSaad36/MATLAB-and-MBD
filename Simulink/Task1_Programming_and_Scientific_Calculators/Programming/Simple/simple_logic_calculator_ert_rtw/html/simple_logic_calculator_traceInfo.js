function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Operand1 */
	this.urlHashMap["simple_logic_calculator:1"] = "simple_logic_calculator.c:40,44,53,57,66,70,74,77,86,89&simple_logic_calculator.h:41";
	/* <Root>/Operand2 */
	this.urlHashMap["simple_logic_calculator:2"] = "simple_logic_calculator.c:41,45,54,58,67,71,80,83,87,90&simple_logic_calculator.h:42";
	/* <Root>/Logical
Operator */
	this.urlHashMap["simple_logic_calculator:9"] = "simple_logic_calculator.c:39,44,48,50";
	/* <Root>/Logical
Operator1 */
	this.urlHashMap["simple_logic_calculator:10"] = "simple_logic_calculator.c:52,57,61,63";
	/* <Root>/Logical
Operator2 */
	this.urlHashMap["simple_logic_calculator:11"] = "simple_logic_calculator.c:68,70";
	/* <Root>/Logical
Operator3 */
	this.urlHashMap["simple_logic_calculator:12"] = "simple_logic_calculator.c:75,77";
	/* <Root>/Logical
Operator4 */
	this.urlHashMap["simple_logic_calculator:13"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=simple_logic_calculator:13";
	/* <Root>/Logical
Operator5 */
	this.urlHashMap["simple_logic_calculator:14"] = "simple_logic_calculator.c:55,57,93,95";
	/* <Root>/Logical
Operator6 */
	this.urlHashMap["simple_logic_calculator:15"] = "simple_logic_calculator.c:42,44,98,100";
	/* <Root>/Logical
Operator7 */
	this.urlHashMap["simple_logic_calculator:16"] = "simple_logic_calculator.c:81,83";
	/* <Root>/AND */
	this.urlHashMap["simple_logic_calculator:28"] = "simple_logic_calculator.c:47,50&simple_logic_calculator.h:47";
	/* <Root>/OR */
	this.urlHashMap["simple_logic_calculator:29"] = "simple_logic_calculator.c:60,63&simple_logic_calculator.h:48";
	/* <Root>/XOR */
	this.urlHashMap["simple_logic_calculator:30"] = "simple_logic_calculator.c:65,70&simple_logic_calculator.h:49";
	/* <Root>/NOT 1 */
	this.urlHashMap["simple_logic_calculator:31"] = "simple_logic_calculator.c:73,77&simple_logic_calculator.h:50";
	/* <Root>/NOT 2 */
	this.urlHashMap["simple_logic_calculator:32"] = "simple_logic_calculator.c:79,83&simple_logic_calculator.h:51";
	/* <Root>/XNOR */
	this.urlHashMap["simple_logic_calculator:33"] = "simple_logic_calculator.c:85,89&simple_logic_calculator.h:52";
	/* <Root>/NOR */
	this.urlHashMap["simple_logic_calculator:34"] = "simple_logic_calculator.c:92,95&simple_logic_calculator.h:53";
	/* <Root>/NAND */
	this.urlHashMap["simple_logic_calculator:35"] = "simple_logic_calculator.c:97,100&simple_logic_calculator.h:54";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "simple_logic_calculator"};
	this.sidHashMap["simple_logic_calculator"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<Root>/Operand1"] = {sid: "simple_logic_calculator:1"};
	this.sidHashMap["simple_logic_calculator:1"] = {rtwname: "<Root>/Operand1"};
	this.rtwnameHashMap["<Root>/Operand2"] = {sid: "simple_logic_calculator:2"};
	this.sidHashMap["simple_logic_calculator:2"] = {rtwname: "<Root>/Operand2"};
	this.rtwnameHashMap["<Root>/Logical Operator"] = {sid: "simple_logic_calculator:9"};
	this.sidHashMap["simple_logic_calculator:9"] = {rtwname: "<Root>/Logical Operator"};
	this.rtwnameHashMap["<Root>/Logical Operator1"] = {sid: "simple_logic_calculator:10"};
	this.sidHashMap["simple_logic_calculator:10"] = {rtwname: "<Root>/Logical Operator1"};
	this.rtwnameHashMap["<Root>/Logical Operator2"] = {sid: "simple_logic_calculator:11"};
	this.sidHashMap["simple_logic_calculator:11"] = {rtwname: "<Root>/Logical Operator2"};
	this.rtwnameHashMap["<Root>/Logical Operator3"] = {sid: "simple_logic_calculator:12"};
	this.sidHashMap["simple_logic_calculator:12"] = {rtwname: "<Root>/Logical Operator3"};
	this.rtwnameHashMap["<Root>/Logical Operator4"] = {sid: "simple_logic_calculator:13"};
	this.sidHashMap["simple_logic_calculator:13"] = {rtwname: "<Root>/Logical Operator4"};
	this.rtwnameHashMap["<Root>/Logical Operator5"] = {sid: "simple_logic_calculator:14"};
	this.sidHashMap["simple_logic_calculator:14"] = {rtwname: "<Root>/Logical Operator5"};
	this.rtwnameHashMap["<Root>/Logical Operator6"] = {sid: "simple_logic_calculator:15"};
	this.sidHashMap["simple_logic_calculator:15"] = {rtwname: "<Root>/Logical Operator6"};
	this.rtwnameHashMap["<Root>/Logical Operator7"] = {sid: "simple_logic_calculator:16"};
	this.sidHashMap["simple_logic_calculator:16"] = {rtwname: "<Root>/Logical Operator7"};
	this.rtwnameHashMap["<Root>/AND"] = {sid: "simple_logic_calculator:28"};
	this.sidHashMap["simple_logic_calculator:28"] = {rtwname: "<Root>/AND"};
	this.rtwnameHashMap["<Root>/OR"] = {sid: "simple_logic_calculator:29"};
	this.sidHashMap["simple_logic_calculator:29"] = {rtwname: "<Root>/OR"};
	this.rtwnameHashMap["<Root>/XOR"] = {sid: "simple_logic_calculator:30"};
	this.sidHashMap["simple_logic_calculator:30"] = {rtwname: "<Root>/XOR"};
	this.rtwnameHashMap["<Root>/NOT 1"] = {sid: "simple_logic_calculator:31"};
	this.sidHashMap["simple_logic_calculator:31"] = {rtwname: "<Root>/NOT 1"};
	this.rtwnameHashMap["<Root>/NOT 2"] = {sid: "simple_logic_calculator:32"};
	this.sidHashMap["simple_logic_calculator:32"] = {rtwname: "<Root>/NOT 2"};
	this.rtwnameHashMap["<Root>/XNOR"] = {sid: "simple_logic_calculator:33"};
	this.sidHashMap["simple_logic_calculator:33"] = {rtwname: "<Root>/XNOR"};
	this.rtwnameHashMap["<Root>/NOR"] = {sid: "simple_logic_calculator:34"};
	this.sidHashMap["simple_logic_calculator:34"] = {rtwname: "<Root>/NOR"};
	this.rtwnameHashMap["<Root>/NAND"] = {sid: "simple_logic_calculator:35"};
	this.sidHashMap["simple_logic_calculator:35"] = {rtwname: "<Root>/NAND"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
