function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["subsystem_calculator:15"] = "subsystem_calculator";
    this.sidParentMap["subsystem_calculator:16"] = "subsystem_calculator";
    this.sidParentMap["subsystem_calculator:1"] = "subsystem_calculator";
    this.sidParentMap["subsystem_calculator:17"] = "subsystem_calculator";
    this.sidParentMap["subsystem_calculator:18"] = "subsystem_calculator";
    this.sidParentMap["subsystem_calculator:19"] = "subsystem_calculator";
    this.sidParentMap["subsystem_calculator:20"] = "subsystem_calculator";
    this.sidParentMap["subsystem_calculator:2"] = "subsystem_calculator:1";
    this.sidParentMap["subsystem_calculator:4"] = "subsystem_calculator:1";
    this.sidParentMap["subsystem_calculator:10"] = "subsystem_calculator:1";
    this.sidParentMap["subsystem_calculator:14"] = "subsystem_calculator:1";
    this.sidParentMap["subsystem_calculator:13"] = "subsystem_calculator:1";
    this.sidParentMap["subsystem_calculator:11"] = "subsystem_calculator:1";
    this.sidParentMap["subsystem_calculator:3"] = "subsystem_calculator:1";
    this.sidParentMap["subsystem_calculator:7"] = "subsystem_calculator:1";
    this.sidParentMap["subsystem_calculator:8"] = "subsystem_calculator:1";
    this.sidParentMap["subsystem_calculator:9"] = "subsystem_calculator:1";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
