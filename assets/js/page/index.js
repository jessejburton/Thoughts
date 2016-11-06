"use strict"

function scrollThoughts(){
	$(".thoughts-list").animate({ 'top' : '-=50'}, 2000, function(){
		var first = $(this).find("li:first");
		$(this).append(first);
		$(this).css("top", "+=50");
	});
}

$(document).ready(function(){
	setInterval(scrollThoughts, 4000);
});
