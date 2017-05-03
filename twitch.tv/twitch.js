var url = 'https://wind-bow.glitch.me/twitch-api/';
var cb = '?client_id=asvd7i0ey421gavqqaq2khmqzsvvxgu';
//var $(".container") = $(".container");
// all usernames for Twitch Tracker
var userArray = ["freecodecamp", "storbeck", "terakilobyte", "quill18","RobotCaleb","medrybw","noobs2ninjas","beohoff","comster404","brunofin","asoulji","algo_rhythm","deadline_ninja","2dgamedev","zephyrdev","notch","programmingarchon","devwars","jggames01","morphcat","rockerboo","krzjn","doubletacostreams","dbauchdsloth","mar3k_e3"];

  // query API for each user and add to DOM
userArray.forEach(function(username){
  var user = {};

$.getJSON(url+'users/'+username+cb, function(data){
  user.logo = data.logo;
  user.name = data.display_name;
  // nested async call to ensure all data received
  $.getJSON(url+'streams/'+username+cb, function(data){
  if(data.hasOwnProperty("error")){  //check for disabled user
  user.inactive = true;
  }else{  //colect more info if account enabled
  user.inactive = false;
  user.streaming = ((data.stream === null) ? false : true);
  user.status = ((user.streaming) ? data.stream.channel.status : 'Offline');
  user.url = "http://www.twitch.tv/" + username;
  };
  // call function on user object to update DOM
  addUser(user);
});
});
});

$(document).ready(function(){
  // search function, checks every user name and status
$("#searchbar").on("keyup", function() {
	var searchTerm = $(this).val().toLowerCase();
	$(".user-box .user-name").each(function() {
		var textToSearch = ($(this).text() + $(this).siblings(".user-status").text()).toLowerCase();
		if(textToSearch.indexOf(searchTerm) != -1){
			$(this).closest("a").show();
		} else {
			$(this).closest("a").hide();
		}
	});
});
}); // close ready function

// formats API data and prints to screen
function addUser(user){
  var html;
  if(user.inactive){  //only link to active users
    html = "<a title='Account Disabled' href='#'>";
  } else {  //tooltip allows for viewing longer statuses
    html = "<a target='_blank' href=" + user.url + " title=\"" + user.status + "\" >";
  }
  html += "<div class='user-box'>";
  if(user.logo){  //use user logo if it exists
    html += "<img src=" + user.logo + " ";
  } else {
    html += "<img src=http://i.imgur.com/pWuFJMK.png ";
  }
  if(user.inactive){  //apply inactive & online borders
    html += "class='inactive-img'>";
  } else if(user.streaming){
    html += "class='online-img'>";
  } else{
    html += ">";
  }
  html += "<div class='box-right'><h2 class='user-name'>" + user.name + "</h2>";
  if(user.streaming){  //apply color status if online
    html += "<p class='user-status online-status'>";
  } else {
    html += "<p class='user-status'>";
  }
  if(user.inactive){  //default status for inactives
    html += "Account Disabled</p>";
  } else {
  if(user.status.length > 32){  //shorten long statuses
    html += user.status.substr(0,29)+"...</p>";
  } else{
    html += user.status + "</p>";
  }}
  html += "</div></div></a>";
  // html complete, append to document
  if(user.inactive || !user.streaming){
    $(".container").append(html);
  } else {  // online users to top of page
    $(".container").prepend(html);
  }
}
