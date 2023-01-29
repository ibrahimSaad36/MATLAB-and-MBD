function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["calculator:5"] = "calculator";
    this.sidParentMap["calculator:6"] = "calculator";
    this.sidParentMap["calculator:1"] = "calculator";
    this.sidParentMap["calculator:11"] = "calculator";
    this.sidParentMap["calculator:12"] = "calculator";
    this.sidParentMap["calculator:13"] = "calculator";
    this.sidParentMap["calculator:14"] = "calculator";
    this.sidParentMap["calculator:2"] = "calculator";
    this.sidParentMap["calculator:4"] = "calculator";
    this.sidParentMap["calculator:3"] = "calculator";
    this.sidParentMap["calculator:7"] = "calculator";
    this.sidParentMap["calculator:8"] = "calculator";
    this.sidParentMap["calculator:9"] = "calculator";
    this.sidParentMap["calculator:10"] = "calculator";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
