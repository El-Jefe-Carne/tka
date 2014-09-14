// A $( document ).ready() block.
$(document).ready(function () {
    //set jumbotron height
    $('.jumbotron').css('height', $(window).height() + 'px');
    $('#about').css('height', $(window).height() * .8 + 'px');

    $("#jumbo-table").addClass("set-table");
    $("#jumbo-cell").addClass("set-cell");

    //when the window resizes, resize the divs.
    $(window).resize(function(){
        $('.jumbotron').css('height', $(window).height() + 'px');
        $('#about').css('height', $(window).height() * .8 + 'px');
    });    
});