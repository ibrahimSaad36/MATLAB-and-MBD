function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["triggered_system:6"] = "triggered_system";
    this.sidParentMap["triggered_system:8"] = "triggered_system";
    this.sidParentMap["triggered_system:1"] = "triggered_system";
    this.sidParentMap["triggered_system:7"] = "triggered_system";
    this.sidParentMap["triggered_system:2"] = "triggered_system:1";
    this.sidParentMap["triggered_system:3"] = "triggered_system:1";
    this.sidParentMap["triggered_system:5"] = "triggered_system:1";
    this.sidParentMap["triggered_system:4"] = "triggered_system:1";
    this.sidParentMap["triggered_system:5:3"] = "triggered_system:5";
    this.sidParentMap["triggered_system:5:4"] = "triggered_system:5";
    this.sidParentMap["triggered_system:5:5"] = "triggered_system:5";
    this.sidParentMap["triggered_system:5:6"] = "triggered_system:5";
    this.sidParentMap["triggered_system:5:7"] = "triggered_system:5";
    this.sidParentMap["triggered_system:5:8"] = "triggered_system:5";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
