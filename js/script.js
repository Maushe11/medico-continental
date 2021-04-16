$(document).ready(function(){

    $(".btnMostrar").click(function(){
        $(".campoFondo").css({"display":"block"});
        setTimeout(function(){
            $(".campoFondo").addClass("cerrarModal");
        },10);
        setTimeout(function(){
            $(".campoMenu").css("right","10px");
        },500);
    });

    $(document).on("click",".cerrarModal",function(){
        $(".campoMenu").css("right","-1000px");
        setTimeout(function(){
            $(".campoFondo").removeClass("cerrarModal");
        },1000)
        setTimeout(function(){
            $(".campoFondo").css("display","none");
        },1000)
    })

})