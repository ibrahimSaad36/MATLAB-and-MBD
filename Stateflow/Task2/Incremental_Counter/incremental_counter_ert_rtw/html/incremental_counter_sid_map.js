function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["incremental_counter:3"] = "incremental_counter";
    this.sidParentMap["incremental_counter:6"] = "incremental_counter";
    this.sidParentMap["incremental_counter:4"] = "incremental_counter";
    this.sidParentMap["incremental_counter:2"] = "incremental_counter";
    this.sidParentMap["incremental_counter:1"] = "incremental_counter";
    this.sidParentMap["incremental_counter:5"] = "incremental_counter";
    this.sidParentMap["incremental_counter:7"] = "incremental_counter";
    this.sidParentMap["incremental_counter:8"] = "incremental_counter";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
