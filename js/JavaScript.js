var takMenuOP = 0;
var buttonNumber = 0;
var elmHeader = $(".tak-header");

$(document).ready(function(){

    $(".tak-menu-nav , .bottom-nav-menu-js").click(function(){
        if (takMenuOP === 0){
            takMenuOP = 1;
            document.getElementsByClassName('tak-menu-wide')[0].style.display = "flex";
            $(".bottom-nav-menu-js").attr("src","images/close.svg");
            $('.tak-menu-a').addClass("fadeInUpBig");
        }else{
            takMenuOP = 0;
            document.getElementsByClassName('tak-menu-wide')[0].style.display = "none";
            $(".bottom-nav-menu-js").attr("src","images/list.svg");
            $('.tak-menu-a').removeClass("fadeInUpBig");
        }
    });

    $(window).on("scroll",function (e) {

        if(elmHeader.offset().top >= 5){
            elmHeader.css({
                backgroundColor: "#0d0d0d",
                boxShadow: "0 0 50px -5px #000",
                backdropFilter: "blur(15px) saturate(180%)",
            });
        }else{
            elmHeader.css({
                backgroundColor: "transparent",
                backdropFilter: "unset",
                boxShadow: "unset",
            });
        }
    });

    $(".tak-call-js").click(function(){
        if (buttonNumber === 0){
            buttonNumber = 1;
            $(".bottom-nav-inner-numbers-div").css({
                bottom: "66px",
            })
        }else{
            buttonNumber = 0;
            $(".bottom-nav-inner-numbers-div").css({
                bottom: "0",
            })
        }
    });
});
