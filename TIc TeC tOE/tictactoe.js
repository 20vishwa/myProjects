var change = true;
var select;

$(document).ready(function () {

    $('#onePlayer').click(function () {
        $('#firstPage').toggle();
        $('#secPage').fadeToggle(2000);
    });
    $('#twoPlayer').click(function () {
        $('#firstPage').toggle();
        $('#thirdPage').fadeToggle(2000);
    });
    $('#secPage').on('click', '#back', function () {
        $('#secPage').toggle();
        $('#firstPage').fadeToggle(2000);
    });
    $('#thirdPage').on('click', '#back', function () {
        $('#thirdPage').toggle();
        $('#firstPage').fadeToggle(2000);
    });
    $('#thirdPage').on('click', '.ex', function () {
        $('#thirdPage').toggle();
        $('#gameBoard').fadeToggle();
        select = "ex";
    });
    $('#thirdPage').on('click', '.oh', function () {
        $('#thirdPage').toggle();
        $('#gameBoard').fadeToggle();
        select = "oh";
    });
    $('#gameBoard').on('click', '.square', function () {
        if(select=="oh"){
            $(this).addClass("fa fa-circle-o fa-4x");
            select="ex";
        }else{
            $(this).addClass("fa fa-times fa-4x");
            select="oh";
        }
    });
});
