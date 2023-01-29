function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["factorial_matlab_function:4"] = "factorial_matlab_function.c:40,42&factorial_matlab_function.h:40";
	/* <Root>/MATLAB Function */
	this.urlHashMap["factorial_matlab_function:1"] = "factorial_matlab_function.c:39,50";
	/* <Root>/Out1 */
	this.urlHashMap["factorial_matlab_function:5"] = "factorial_matlab_function.c:49,52&factorial_matlab_function.h:45";
	/* <S1>:1 */
	this.urlHashMap["factorial_matlab_function:1:1"] = "msg=rtwMsg_optimizedSfObject&block=factorial_matlab_function:1:1";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "factorial_matlab_function"};
	this.sidHashMap["factorial_matlab_function"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "factorial_matlab_function:1"};
	this.sidHashMap["factorial_matlab_function:1"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "factorial_matlab_function:4"};
	this.sidHashMap["factorial_matlab_function:4"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/MATLAB Function"] = {sid: "factorial_matlab_function:1"};
	this.sidHashMap["factorial_matlab_function:1"] = {rtwname: "<Root>/MATLAB Function"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "factorial_matlab_function:5"};
	this.sidHashMap["factorial_matlab_function:5"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>:1"] = {sid: "factorial_matlab_function:1:1"};
	this.sidHashMap["factorial_matlab_function:1:1"] = {rtwname: "<S1>:1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
