function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["stateflow_calculator:2"] = "stateflow_calculator";
    this.sidParentMap["stateflow_calculator:3"] = "stateflow_calculator";
    this.sidParentMap["stateflow_calculator:1"] = "stateflow_calculator";
    this.sidParentMap["stateflow_calculator:4"] = "stateflow_calculator";
    this.sidParentMap["stateflow_calculator:5"] = "stateflow_calculator";
    this.sidParentMap["stateflow_calculator:6"] = "stateflow_calculator";
    this.sidParentMap["stateflow_calculator:7"] = "stateflow_calculator";
    this.sidParentMap["stateflow_calculator:1:8"] = "stateflow_calculator:1";
    this.sidParentMap["stateflow_calculator:1:17"] = "stateflow_calculator:1";
    this.sidParentMap["stateflow_calculator:1:18"] = "stateflow_calculator:1";
    this.sidParentMap["stateflow_calculator:1:19"] = "stateflow_calculator:1";
    this.sidParentMap["stateflow_calculator:1:20"] = "stateflow_calculator:1";
    this.sidParentMap["stateflow_calculator:1:21"] = "stateflow_calculator:1";
    this.sidParentMap["stateflow_calculator:1:22"] = "stateflow_calculator:1";
    this.sidParentMap["stateflow_calculator:1:23"] = "stateflow_calculator:1";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
