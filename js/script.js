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
    });

    $(".btnTop").click(function(){
        $(".btnBot").css("display","inline-flex");
        $(".btnTop").css("display","none");
        $(".campoChats").css("transform","translateY(0%)");
    });

    $(".btnBot").click(function(){
        $(".btnTop").css("display","inline-flex");
        $(".btnBot").css("display","none");
        $(".campoChats").css("transform","translateY(100%) translateY(-48px)");
    });

})