var change = true;
$('#onePlayer').click(function () {
    $('#firstPage').slideToggle();
    $('#secPage').fadeToggle(3000);
});
$('#twoPlayer').click(function () {
    $('#firstPage').toggle();
    $('#secPage').fadeToggle(2000);
});
$('#secPage').on('click', '#back', function () {
    $('#secPage').toggle();
    $('#firstPage').fadeToggle(2000);
});
$('#thirdPage').on('click', '#back', function () {
    $('#thirdPage').toggle();
    $('#firstPage').fadeToggle(2000);
});
