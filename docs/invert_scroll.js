$( document ).ready(function() {
    // $("#scroller").hover(console.log("hover"), function(){
    //     alert('Left it')
    // });
    $("#scroller").scrollLeft( parseInt($(this).prop('clientWidth') / 2) );
    console.log($("#scroller"));


    $(document).on("scroll", function() {
      //  console.log($(".bigboi").scrollLeft());
      //  console.log($(document).scrollTop());

         $(".bigboi").scrollLeft($(document).scrollTop());

    });




});