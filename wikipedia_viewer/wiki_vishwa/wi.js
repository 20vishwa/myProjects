$(document).ready(function(){
  var search="";
  function searchFun(){
    $.ajax({
      url:'https://en.wikipedia.org/w/api.php?action=opensearch&search='  + search + '&format=json&callback=?',
        type:'GET',
        async: false ,
        dataType:'json',
        success: function(data){
          //console.log(data[3][0]);
          //console.log(data[1][0]);
          //console.log(data[2][0]);
          var n=data[1].length;
          for(var i=0;i<n;i++){
              //console.log(data[3][i]);
              $('.container').append("<div class='items'><a href="+data[3][i]+" target='_blank'><h2>"+data[1][i]+"</h2></a><h3>"+data[2][i]+"</h3><hr></div>");
          }
        }

    })
  }
  $('#search').keypress(function(e) {
    if(e.which == 13) {
        search = $('#search').val();
      //reset container
        $('.container').empty();
        searchFun();
    }
  });
})
