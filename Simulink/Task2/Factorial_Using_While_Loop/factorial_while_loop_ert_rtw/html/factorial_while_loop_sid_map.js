function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["factorial_while_loop:33"] = "factorial_while_loop";
    this.sidParentMap["factorial_while_loop:14"] = "factorial_while_loop";
    this.sidParentMap["factorial_while_loop:34"] = "factorial_while_loop";
    this.sidParentMap["factorial_while_loop:16"] = "factorial_while_loop:14";
    this.sidParentMap["factorial_while_loop:27"] = "factorial_while_loop:14";
    this.sidParentMap["factorial_while_loop:21"] = "factorial_while_loop:14";
    this.sidParentMap["factorial_while_loop:28"] = "factorial_while_loop:14";
    this.sidParentMap["factorial_while_loop:17"] = "factorial_while_loop:14";
    this.sidParentMap["factorial_while_loop:18"] = "factorial_while_loop:14";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
