var version = {
    first: 1,
    second: 0,
    third: 0,
    strver: function(){
        return "v" + version.first + "." + version.second + "." + version.third;
    }
};

function initPage() {
    document.title = "a " +version.strver();

}

function getEle(name) {
    return document.getElementById(name);
}
function hideGetStartWrapper() {
    
$(document).ready(
    function(){
        $("GetStartWrapper").click(
            function(){
                $(this).hide();
            }
        );
    }
    );
  
}