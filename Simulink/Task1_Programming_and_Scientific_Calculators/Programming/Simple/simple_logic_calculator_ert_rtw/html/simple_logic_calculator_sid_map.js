function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["simple_logic_calculator:1"] = "simple_logic_calculator";
    this.sidParentMap["simple_logic_calculator:2"] = "simple_logic_calculator";
    this.sidParentMap["simple_logic_calculator:9"] = "simple_logic_calculator";
    this.sidParentMap["simple_logic_calculator:10"] = "simple_logic_calculator";
    this.sidParentMap["simple_logic_calculator:11"] = "simple_logic_calculator";
    this.sidParentMap["simple_logic_calculator:12"] = "simple_logic_calculator";
    this.sidParentMap["simple_logic_calculator:13"] = "simple_logic_calculator";
    this.sidParentMap["simple_logic_calculator:14"] = "simple_logic_calculator";
    this.sidParentMap["simple_logic_calculator:15"] = "simple_logic_calculator";
    this.sidParentMap["simple_logic_calculator:16"] = "simple_logic_calculator";
    this.sidParentMap["simple_logic_calculator:28"] = "simple_logic_calculator";
    this.sidParentMap["simple_logic_calculator:29"] = "simple_logic_calculator";
    this.sidParentMap["simple_logic_calculator:30"] = "simple_logic_calculator";
    this.sidParentMap["simple_logic_calculator:31"] = "simple_logic_calculator";
    this.sidParentMap["simple_logic_calculator:32"] = "simple_logic_calculator";
    this.sidParentMap["simple_logic_calculator:33"] = "simple_logic_calculator";
    this.sidParentMap["simple_logic_calculator:34"] = "simple_logic_calculator";
    this.sidParentMap["simple_logic_calculator:35"] = "simple_logic_calculator";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
