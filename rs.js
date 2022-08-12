var version = {
    first: 1,
    second: 0,
    third: 0,
    strver: function(){
        return "v" + version.first + "." + version.second + "." + version.third;
    }
};

function Init() {
    initPage();
}

function rand(minNum, maxNum) {
    return Math.floor(minNum + Math.random()*(maxNum+1-minNum));
}

function initPage() {
    document.title = "a " +version.strver();
    var rowPartsHTML = 
    {
        0: '<div class="rows" id="row',
        1: '">',
        2: '</div>'
    };
    var cellPartsHTML = 
    {
        0: '<div id="row',
        1: 'cell',
        2: '" class="grids ',
        3: '">',
        4: '</div>'
    };
    var gridsinh = ""
    var gridCls = {
        0: "grass",
        1: "grass",
        2: "grass",
        3: "grass",
        4: "grass",
        5: "grass",
        6: "grass",
        7: "forest",
        8: "forest",
        9: "cave"
    }
    for(var i=1;i<=cfg.gridRows;i++) {
        var str = ""
        for(var j=1;j<=cfg.gridCells;j++) {
            str +=  cellPartsHTML[0] + i + cellPartsHTML[1] + j + cellPartsHTML[2] + gridCls[rand(0,9)] + "Grid" + cellPartsHTML[3]  + cellPartsHTML[4]
        }
        gridsinh += rowPartsHTML[0] + i + rowPartsHTML[1] + str + rowPartsHTML[2]
    }
    getEle("grids").innerHTML = gridsinh
}
var doc=document

function getEle(name) {
    return document.getElementById(name);
}

function show(Id) {
    var ele = getEle(Id);
    var classes = ele.className.split(' ');
    var afterHideClassName = ""
    for(var i in classes) {
        if(classes[i]!="Hides" && classes[i]!="") {
            afterHideClassName += classes[i]+" ";
        }
    }
    ele.className = afterHideClassName;
}
function hide(Id) {
    show(Id)
    getEle(Id).className += " Hides";
}