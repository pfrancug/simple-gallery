$(window).load(function() {
	$(".load").hide();
	$(".content").show();
});
$(".element").click(function() {
	$(this).find("img").clone().appendTo(".image");
	$(this).find("i").clone().appendTo(".main");
	$(".view").show();
	$("body").addClass("over");
});
$(".background, .close").click(function() {
	$(".view").hide();
	$(".view").find("img").remove();
	$(".main").find("i").remove();
	$("body").removeClass("over");
});