$(document).ready(function() {
	for (var j = 0; j < 16; j++) {
		$("table").append("<tr></tr>");
	};
	
	$("tr").each(function () {
		$(this).append("<th></th>");
		
	});
	
	$("th").each(function () {
		for (var i = 0; i < 16; i++) {
			$(this).append("<div></div>");
		}
	});
});

