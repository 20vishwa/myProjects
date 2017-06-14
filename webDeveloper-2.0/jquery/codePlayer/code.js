"use strict";

function updateOutput() {
    $('#outputPanel').contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");

    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());


}

$('.toggleButton').click(function () {
    $(this).toggleClass('active');


    var panelId = $(this).attr('id') + "Panel";

    $("#" + panelId).toggleClass("hidden", 3000);

    var numOfActivePanels = 4 - $('.hiden').length;

    $('.panel').width(($(window).width() / numOfActivePanels) - 10);
});

$(".panel").height($(window).height() - $('#navbar').height());

$('.panel').width(($(window).width() / 2) - 10);

updateOutput();

$('textarea').on('change keyup paste', function () {
    updateOutput();
});
