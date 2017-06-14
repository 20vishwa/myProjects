$(document).ready(function () {
    var quote;
    var author;


    function getRandomColor() {
        var letters = '123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 15)];
        }
        return color;
    }

    function getNewQuote() {
        var col = getRandomColor();
        $.ajax({
            url: 'http://api.forismatic.com/api/1.0/',
            jsonp: 'jsonp',
            dataType: 'jsonp',
            data: {
                method: 'getQuote',
                lang: 'en',
                format: 'jsonp'
            },
            success: function (response) {
                quote = response.quoteText;
                author = response.quoteAuthor;

                $("body").animate({
                    color: col
                }, 600);

                $("body").animate({
                    backgroundColor: col
                }, 600);

                $(".btn").animate({
                    color: col
                }, 600);

                $('#quote').text(quote);
                if (author) {
                    $('#author').text("- " + author);
                } else {
                    author = "VishwaTeja";
                    $('#author').text("- " + author);
                }

            }
        });
    }
    getNewQuote();
    $('.get-quote').on('click', function (event) {
        event.preventDefault();
        getNewQuote();
    });
    $('.share-quote').on('click', function (event) {
        event.preventDefault();
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' - ' + author));
    });
});
