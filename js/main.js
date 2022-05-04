$(function(){

	$("#responsive-icon").click(function(){
	$('#responsive-menu').slideToggle();
	});

$(".textbox").focus(function(){
$(this).css("border","1px solid #3F56B3");
});
$(".textbox").blur(function(){
$(this).css("border","1px solid #D8D8D8");
});
$(document).keypress(function(e) {
    if(e.which == 13 && $("#search-box").is(':focus')) {
       window.location.href = "search?q=" + $("#search-box").val();
    }
});
	});
