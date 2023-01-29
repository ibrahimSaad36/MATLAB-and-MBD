function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["factorial:2"] = "factorial";
    this.sidParentMap["factorial:1"] = "factorial";
    this.sidParentMap["factorial:3"] = "factorial";
    this.sidParentMap["factorial:1:7"] = "factorial:1";
    this.sidParentMap["factorial:1:9"] = "factorial:1";
    this.sidParentMap["factorial:1:10"] = "factorial:1";
    this.sidParentMap["factorial:1:11"] = "factorial:1";
    this.sidParentMap["factorial:1:12"] = "factorial:1";
    this.sidParentMap["factorial:1:13"] = "factorial:1";
    this.sidParentMap["factorial:1:14"] = "factorial:1";
    this.sidParentMap["factorial:1:15"] = "factorial:1";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
