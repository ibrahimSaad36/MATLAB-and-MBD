function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["even_and_odd:30"] = "even_and_odd";
    this.sidParentMap["even_and_odd:26"] = "even_and_odd";
    this.sidParentMap["even_and_odd:31"] = "even_and_odd";
    this.sidParentMap["even_and_odd:30:3"] = "even_and_odd:30";
    this.sidParentMap["even_and_odd:30:5"] = "even_and_odd:30";
    this.sidParentMap["even_and_odd:30:4"] = "even_and_odd:30";
    this.sidParentMap["even_and_odd:30:18"] = "even_and_odd:30";
    this.sidParentMap["even_and_odd:30:19"] = "even_and_odd:30";
    this.sidParentMap["even_and_odd:3"] = "even_and_odd:26";
    this.sidParentMap["even_and_odd:9"] = "even_and_odd:26";
    this.sidParentMap["even_and_odd:10"] = "even_and_odd:26";
    this.sidParentMap["even_and_odd:14"] = "even_and_odd:26";
    this.sidParentMap["even_and_odd:15"] = "even_and_odd:26";
    this.sidParentMap["even_and_odd:17"] = "even_and_odd:26";
    this.sidParentMap["even_and_odd:16"] = "even_and_odd:26";
    this.sidParentMap["even_and_odd:5"] = "even_and_odd:26";
    this.sidParentMap["even_and_odd:8"] = "even_and_odd:26";
    this.sidParentMap["even_and_odd:13"] = "even_and_odd:26";
    this.sidParentMap["even_and_odd:6"] = "even_and_odd:26";
    this.sidParentMap["even_and_odd:29"] = "even_and_odd:26";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
