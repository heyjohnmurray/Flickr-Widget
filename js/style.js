$(function() {
	$("a").click(function(e){
		e.preventDefault();
	});

	$(".image-size a").click(function(){
		var idWidth = $(this).width();
		var idHeight = $(this).height();
		var size = $(this).data("size");
		$(".thumbnail img").width(idWidth);
		$(".thumbnail img").height(idHeight);
		$(".dimensions").remove();
		$(".image-size ul").prepend('<li class="dimensions"><strong>Dimensions</strong>: ' + idWidth + ' x ' + idHeight + '</li>');
		
		$(".preview .flickr-image").animate({
			width: idWidth,
			height: idHeight
		});
	});
	
	//widget size creator code
	$(".wRow li").on("click", function(){
		var column = $(this).data("column");
		var row = $(this).data("row");
		
		$("li").removeClass("highlight");
		$(".wRow").filter(function(index){
			if(index <= row){
				return true;
			}
		}).children().addClass("highlight");
		
		$(".wRow li").each(function(){
			$(this).siblings()
				.filter(function(index){
			   		if(index >= column){
			   			return true;
			   		}
			   	}).nextAll().removeClass("highlight");
		});
	});
	//get flickr images and organize them on the page
	var $children = $(".preview .images .flickr-image");
	$.ajax({
		dataType: "jsonp",		
		url: "http://ycpi.api.flickr.com/services/feeds/photos_public.gne?id=27453474@N02&format=json&jsoncallback=?",
		beforeSend: function(){
			$(".loading").addClass("show");
		},
		success: function(data){
			$(".loading").removeClass("show").addClass("hide");
			for(var i=0; i<12; i++){
				$(".preview .images").append("<div class='flickr-image'>" + "<img src='" + data.items[i].media.m + "' width='' height='' alt='' />" + "</div>");
			}					
			for(var i = 0, l = $children.length; i < l; i += 4) {
			    $children.slice(i, i+4).wrapAll('<div class="previewRow"></div>');
			}			
		},
		error: function(){
			console.log("something went wrong!");
		}
	});
	//keep working on this
	$(".js-get-code").on("click", function(){
		var number = 2;
		function restack(number){
			for(var i = 0, l = $children.length; i < l; i += number) {
			    $children.slice(i, i+number).wrapAll('<div class="previewRow"></div>');
			}
		}
	});
//close jquery
});
