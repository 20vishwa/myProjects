$(document).ready(function(){

  //initialize search variable
  var search = '';
  //use this to make unique code id
  var num = 0;

  //make tags empty, fill variable up with ajax call
  var tags = [];
  function searchFun(){

    console.log(search);
     $.ajax({url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch='  + search + '&gsrlimit=10&prop=extracts&exintro&explaintext&exsentences=1&exlimit=max',
                      type: 'GET',
                      contentType: 'application/json',
                      dataType: 'jsonp',
                      success: function(data) {

                      $.each(data.query.pages, function(index, value) {

    //make new a, value.id to end of wiki for clickthrough
    //make a new div, append search results into div
    //use regex replace for words with spaces and brackets so we can make id name for them
                        $('<div/>', {
                                    class: 'items',
                                    id: search.replace(/ /g,"-").replace(/\(/g,"-").replace(/\)/g,"-") + num,
                                   }).appendTo('.container');

                          console.log(search);

                        $('#' + search.replace(/ /g,"-").replace(/\(/g,"-").replace(/\)/g,"-") + num).html('<a href="http://en.wikipedia.org/?curid=' + value.pageid + '" target="_blank"><h3>' + value.title + '</h3></a>'  + '<p>' + value.extract + '</p>');
                          console.log(search);
                        num++;

                        });
                      }
                    });
                  }
  //on enter in id search, take input value and feed it into api get request
  $('#search').keypress(function(e) {
    if(e.which == 13) {
        search = $('#search').val();
      //reset container
        $('.container').empty();
        searchFun();
    }
  });
});
