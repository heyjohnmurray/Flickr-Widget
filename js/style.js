$(function() {
	var wRowLi = $(".wRow li");
	var size;	
	
	$("a").click(function(e){
		e.preventDefault();
	});

	$(".image-size a").click(function(){
		var idWidth = $(this).width();
		var idHeight = $(this).height();
		size = $(this).data("size");
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
	wRowLi.on("click", function(){
		var column = $(this).data("column");
		var row = $(this).data("row");
		//widget-dimensions finds the row and column value for the <li> I clicked on and lets me pass those
		wRowLi.removeClass("widget-dimensions");				
		$(this).addClass("widget-dimensions");
		wRowLi.removeClass("highlight");
		$(".wRow").filter(function(index){
			if(index <= row){
				return true;
			}
		}).children().addClass("highlight");
		
		wRowLi.each(function(){
			$(this).siblings()
				.filter(function(index){
			   		if(index >= column){
			   			return true;
			   		}
			   	}).nextAll().removeClass("highlight");
		});
	});

	//get flickr images and organize them on the page
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
			var $children = $(".preview .images .flickr-image");
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
		var wColumn = ($(".widget-dimensions").data("column") + 1);
		var wRow = ($(".widget-dimensions").data("row") + 1);
		var wLength = $(".highlight").length;
		var outputStyles = '<style type="text/css">.previewRow{float:left;display:block;width:100%}.previewRow .flickr-image{float:left;width:125px;height:125px;margin:10px;overflow:hidden;border:1px solid #fff;-webkit-box-shadow:1px 1px 0 0 #ccc;box-shadow:1px 1px 0 0 #ccc}.previewRow .flickr-image:hover{-webkit-box-shadow:1px 3px 0 0 #ccc;box-shadow:1px 3px 0 0 #ccc;cursor:pointer}.previewRow .flickr-image.large{width:125px;height:125px}.previewRow .flickr-image.medium{width:100px;height:100px}.previewRow .flickr-image.small{width:75px;height:75px}.previewRow .flickr-image img{max-width:none;margin:0 0 -80px -40px}</style>';
		var widgetOutput;
		
		$(".preview .images, textarea").empty();
		
		$.ajax({
			dataType: "jsonp",		
			url: "http://ycpi.api.flickr.com/services/feeds/photos_public.gne?id=27453474@N02&format=json&jsoncallback=?",
			beforeSend: function(){
				$(".loading").addClass("show");
			},
			success: function(data){
				$(".loading").removeClass("show").addClass("hide");
				for(var i=0; i<wLength; i++){
					$(".preview .images").append("<div class='flickr-image " + size + "'>" + "<img src='" + data.items[i].media.m + "' width='' height='' alt='' />" + "</div>");
				}
				var $children = $(".flickr-image");
				for(var i = 0, l = $children.length; i < l; i += wColumn) {
				    $children.slice(i, i+wColumn).wrapAll('<div class="previewRow"></div>');
				}
				widgetOutput = $(".preview .images").html();
				$("textarea").text(outputStyles + widgetOutput);
			},
			error: function(){
				console.log("something went wrong!");
			}
		});
	});
//close jquery
});
