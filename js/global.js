// A $( document ).ready() block.
$(document).ready(function () {
    //set jumbotron height
    $('.jumbotron').css('height', $(window).height() + 'px');
    $('#about').css('height', $(window).height() * .8 + 'px');

    $("#jumbo-table").addClass("jumbo-table");
    $("#jumbo-cell").addClass("jumbo-cell");

    //when the window resizes, resize the divs.
    $(window).resize(function(){
        $('.jumbotron').css('height', $(window).height() + 'px');
        $('#about').css('height', $(window).height() * .8 + 'px');
    });

    $('body').scrollspy({ target: '.week-matches-wrapper' })

    $('#myScrollspy').on('activate.bs.scrollspy', function () {
        alert("YEYYYYYY");
    })

});