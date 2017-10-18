var imagesData_IG = [];
	$(document).ready(function () {
		$.ajax({
			url: 'thumbsumJsonOP.json',
			dataType: 'json',
			success: function(data) {
				imagesData_IG = data;
				$.each(data, function(i){
					if (i < 24) {
						$("ul").append("<li><a target='_blank' href='" + imagesData_IG[i].event_link + "'><img style='height:150px;' src='" + $(imagesData_IG[i].event_html).attr('src')+"'></img></a><b>Datetime: </b>" + (imagesData_IG[i].event_display_date).split(",")[0] + ", " + (imagesData_IG[i].event_display_date).split(",")[1] + "</li>");
						console.log("<li><a target='_blank' href='" + imagesData_IG[i].event_link + "'><img style='height:150px;' src='" + $(imagesData_IG[i].event_html).attr('src')+"'></img></a><b>Datetime: </b>" + (imagesData_IG[i].event_display_date).split(",")[0] + ", " + (imagesData_IG[i].event_display_date).split(",")[1] + "</li>");
					}
				});
			}
		});
	});