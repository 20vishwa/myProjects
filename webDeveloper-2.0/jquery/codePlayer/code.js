"use strict";

$('.toggleButton').click(function () {
    $(this).toggleClass('active');


    var panelId = $(this).attr('id') + "Panel";

    $("#" + panelId).toggleClass("hidden");

    var numOfActivePanels = 4 - $('.hiden').length;

    $('.panel').width(($(window).width() / numOfActivePanels) - 10);
})

$(".panel").height($(window).height() - $('#navbar').height());

$('.panel').width(($(window).width() / 2) - 10);



$('textarea').on('change keyup paste', function () {
    $('#outputPanel').contents().find("html").html($('#htmlPanel').val());
});
