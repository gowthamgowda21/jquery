$(function () {
    var imgname;
    var flag = true;
    $("#onoff").click(function () {

        if (flag) {
            var imgname = "images/off1.jpg"
            flag = false;

        } else {
            var imgname = "images/on.jpg"
            flag = true;

        }
        $("img").attr("src", imgname);
    });
    $("#btnhide").click(function(){
       $("#randomtext").hide(); 
        
    });
     $("#btnshow").click(function(){
       $("#randomtext").show(); 
        
    });
     $("#btntoggle").click(function(){
       $("#randomtext").toggle(); 
        
    });
});
