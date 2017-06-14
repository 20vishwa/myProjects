clear();

$(".input").click(function () {
    var cliq = $(this).text();

    if ($('#screen').text().length < 10) {
        $('#screen').append(cliq);
    } else {
        clear();
    }

});

$("#clearAll").click(function () {
    clear();
});
$("#clearOne").click(function () {
    var n = $('#screen').text().length;
    if (n != 0) {
        var str = $('#screen').text();
        str = str.replace(/(\s+)?.$/, '');
        $('#screen').text(str);
    }
});

$("#equal").click(function () {
    var str = $('#screen').text();
    str = str.replace(/÷/g, '/');
    var res = eval(str);
    res = +res.toFixed(9);
    $('#screen').text(res);
});

function clear() {

    $('#screen').text("");
}
