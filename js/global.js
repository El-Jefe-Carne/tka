// A $( document ).ready() block.
$(document).ready(function () {

    //set jumbotron height
    $('.jumbotron').css('height', $(window).height() + 'px');
    $('#about').css('height', $(window).height() * .8 + 'px');

    $("#jumbo-table").addClass("jumbo-table");
    $("#jumbo-cell").addClass("jumbo-cell");

    //get the offset of the weeks bar from the top
    var weeksOffsetTop = $("#weeks-nav-wrapper").offset().top;
    var weeksOffsetBottom = $("#standings-section").offset().top;

    //when the window resizes, resize the divs.
    $(window).resize(function(){
        $('.jumbotron').css('height', $(window).height() + 'px');
        $('#about').css('height', $(window).height() * .8 + 'px');

        //reset the vars needed for divFix and exectute
        weeksOffsetTop = $("#weeks-nav-wrapper").offset().top;
        weeksOffsetBottom = $("#standings-section").offset().top - 200;//minus 200 to account for the section header i nthe standings section
        fixDiv();
    });

    $('body').scrollspy({ target: '#weeks-nav-wrapper' })    
    
    function fixDiv() {        
        var weeksWrapper = $("#weeks-nav-wrapper");
        
        //if the scroll position is farther down than the weeks row
        if ($(window).scrollTop() > weeksOffsetTop) {
            // check to see if the scroll position is farther down than the top of the standings
            if ($(window).scrollTop() > weeksOffsetBottom) {
                //if it is it doesn't need to be fixed anymore
                $(weeksWrapper).css({ 'position': 'relative', 'top': 'auto' });                
            }
            else {
                //if it isn't too far down, then it should be fixed.
                $(weeksWrapper).css({ 'position': 'fixed', 'top': '0px' });
            }
        }
            //if it hasn't reached the weeks div, then it doesn't need to be fixed yet. 
        else {
            $(weeksWrapper).css({ 'position': 'relative', 'top': 'auto' });            
        }
    }

    $(window).scroll(fixDiv);
    fixDiv();
});