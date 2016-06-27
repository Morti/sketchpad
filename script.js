$(document).ready(function() {
	createTable(16);

	$(".resetbutton").click(function() {
		var gridsize = prompt("Enter size of new grid:");
		$("tbody").detach();
		createTable(gridsize);
	});
	
	function createTable (size)
	{
		var newsize = 960 / size;
		
		
		for (var j = 0; j < size; j++) {
			$("table").append("<tr></tr>");
		};
	
		$("tr").each(function () {
			$(this).append("<th></th>");
		});
	
		$("th").each(function () {
			for (var i = 0; i < size; i++) {
				$(this).append("<div class='magic'></div>");
			}
		});
		
		$(".magic").css("width", newsize);
		$(".magic").css("height", newsize);
		
		$(".magic").mouseenter(function() {
			$(this).css("background-color",getRandomColor());
		});
	}
	
	function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
});



