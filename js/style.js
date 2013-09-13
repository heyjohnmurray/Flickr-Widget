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
	//widget size creator code
	$(".wRow li").on("click", function(){
		var column = $(this).data("column");
		var row = $(this).data("row");
		//console.log("column:" + column + ", row:" + row);
		//remove class
		$("li").removeClass("highlight");
		//only apply a class to a <ul> that is less than or equal to the row value of the <li> you clicked on
		$(".wRow").filter(function(index){
			if(index <= row){
				return true;
			}
			//console.log(row);
		})  .children()
			.addClass("highlight");
		//look through the <li>s and remove the class from any <li> that is in a column that is greate than or equal to the value of the <li> you clicked on
		$(".wRow li").each(function(){
		  $(this).siblings()
		   .filter(function(index){
		   		if(index >= column){
		   			return true;
		   		}
		   	})
		   .nextAll()
		   .removeClass("highlight");
		});
	});
//close jquery
});
