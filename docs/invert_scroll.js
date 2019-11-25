$( document ).ready(function() {
    // $("#scroller").hover(console.log("hover"), function(){
    //     alert('Left it')
    // });

    $(function() {

        $("#scroller").mousewheel(function(event, delta) {
     
           this.scrollLeft -= (delta * 10);
         
           event.preventDefault();
     
        });
     
     });




});