
$(document).on("click",".option",function(){
    $(".option").removeClass("active");
    $(this).addClass("active");

});

$(document).on("click",".trabajoseleccionado",function(){
    $(this).addClass(".vehiculo");
});

