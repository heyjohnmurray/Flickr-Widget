$(function() {	
	$("a").click(function(e){
		e.preventDefault();
	});

	$("#image-size a").click(function(){
		var idWidth = $(this).width();
		var idHeight = $(this).height();
		$(".thumbnail img").width(idWidth);
		$(".thumbnail img").height(idHeight);				
		$(".dimensions").remove();
		$("#image-size ul").prepend('<li class="dimensions"><strong>Dimensions</strong>: ' + idWidth + ' x ' + idHeight + '</li>');
	});
	
	$("#show-options").click(function(){
		$("#color-editor").slideDown(750);
	});
	
	$.ajax({
		//http://ycpi.api.flickr.com/services/feeds/photos_public.gne
		//FLICKR API URL: http://www.flickr.com/services/api/
		dataType: "jsonp",		
		url: "http://ycpi.api.flickr.com/services/feeds/photos_public.gne?id=27453474@N02&format=json&jsoncallback=?",
		success: function(data){			
			//to show all the data being returned just console "data"
			//console.log(data);
			//data.items lets you iterate down another level within data
			/* i used each at first but needed to limit the number of images i showed to 12 so i just went with a for loop*/
			/*$.each(data.items,function(i, value){
				$("#preview .images ul").append("<li>" + "<img src='" + data.items[i].media.m + "' width='' height='' alt='' />" + "</li>");
			});
			*/			
			
			for(var i=0; i<12; i++){
				$("#preview .images ul").append("<li class='flickr-image'>" + "<img src='" + data.items[i].media.m + "' width='' height='' alt='' />" + "</li>");
			}
			
			var $children = $("#preview .images li.flickr-image");
			for(var i = 0, l = $children.length; i < l; i += 4) {
			    $children.slice(i, i+4).wrapAll('<div class="row"></div>');
			}			

		},
		error: function(){
			console.log("something went wrong!");
		}
	});
	
	
		
	
//close jquery	
});
