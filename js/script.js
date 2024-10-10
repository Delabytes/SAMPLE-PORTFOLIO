$(document).ready(function(){
    console.log($(window).width());

    $("#menu_toggle").click(function(){
        $("#nav2").slideToggle();
    });

    var $window = $(window);
    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize < 800) {
            $("#toggler").show();

        }
        else{
            $("#toggler").hide();
            $("#nav2").hide();
        }
    }
     checkWidth();
    $(window).resize(checkWidth);
});

