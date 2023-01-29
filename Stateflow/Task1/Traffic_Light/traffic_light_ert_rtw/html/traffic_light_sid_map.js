function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["traffic_light:1"] = "traffic_light";
    this.sidParentMap["traffic_light:4"] = "traffic_light";
    this.sidParentMap["traffic_light:5"] = "traffic_light";
    this.sidParentMap["traffic_light:6"] = "traffic_light";
    this.sidParentMap["traffic_light:1:8"] = "traffic_light:1";
    this.sidParentMap["traffic_light:1:6"] = "traffic_light:1";
    this.sidParentMap["traffic_light:1:10"] = "traffic_light:1";
    this.sidParentMap["traffic_light:1:5"] = "traffic_light:1";
    this.sidParentMap["traffic_light:1:7"] = "traffic_light:1";
    this.sidParentMap["traffic_light:1:12"] = "traffic_light:1";
    this.sidParentMap["traffic_light:1:9"] = "traffic_light:1";
    this.sidParentMap["traffic_light:1:11"] = "traffic_light:1";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
