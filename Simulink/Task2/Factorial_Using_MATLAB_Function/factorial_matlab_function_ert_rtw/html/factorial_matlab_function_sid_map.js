function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["factorial_matlab_function:4"] = "factorial_matlab_function";
    this.sidParentMap["factorial_matlab_function:1"] = "factorial_matlab_function";
    this.sidParentMap["factorial_matlab_function:5"] = "factorial_matlab_function";
    this.sidParentMap["factorial_matlab_function:1:1"] = "factorial_matlab_function:1";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
