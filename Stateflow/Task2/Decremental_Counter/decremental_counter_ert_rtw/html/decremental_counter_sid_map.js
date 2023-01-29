function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["decremental_counter:2"] = "decremental_counter";
    this.sidParentMap["decremental_counter:4"] = "decremental_counter";
    this.sidParentMap["decremental_counter:6"] = "decremental_counter";
    this.sidParentMap["decremental_counter:3"] = "decremental_counter";
    this.sidParentMap["decremental_counter:1"] = "decremental_counter";
    this.sidParentMap["decremental_counter:5"] = "decremental_counter";
    this.sidParentMap["decremental_counter:7"] = "decremental_counter";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
