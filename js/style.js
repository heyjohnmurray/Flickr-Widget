$(function() {
	$("a").click(function(e){
		e.preventDefault();
	});

	$(".image-size a").click(function(){
		var idWidth = $(this).width();
		var idHeight = $(this).height();
		$(".thumbnail img").width(idWidth);
		$(".thumbnail img").height(idHeight);
		$(".dimensions").remove();
		$(".image-size ul").prepend('<li class="dimensions"><strong>Dimensions</strong>: ' + idWidth + ' x ' + idHeight + '</li>');
	});
	
	$(".show-options").click(function(){
		$(".color-editor").slideDown(750);
	});
	
	$(".wRow li").on("click", function(){
		var column = $(this).data("column");
		var row = $(this).data("row");
		console.log("column:" + column + ", row:" + row);
		//remove class
		$("li").removeClass("bar");
		$(this).addClass("bar");
		$(".wRow li").each(function(){			
			$(this).parent().siblings().children().eq(column).addClass("bar");
		});				
	});
//close jquery	
});
