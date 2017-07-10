'use strict'
//when document is ready and html is loaded

$(function(){
// start the request
        getData();

		function getData(){
			//get players
	$.ajax({
        url: 'http://localhost:3000/api/players',
        type: 'GET',
		dataType : "json",
		cache: false,
        success: function(json) {
			//itereate over json and add to the html
             $('#location1').after(
				$.map(json, function (data, index) {
				return '<tr><td>' + data.name + " " + data.vorname +'</td><td>' + data.club + '</td><td>' + data.coach + '</td></tr>';
    }).join()
);


        }
		});
		// get favorite players
		$.ajax({
        url: 'http://localhost:3000/api/players?favorites=true',
        type: 'GET',
		dataType : "json",
		cache: false,
        success: function(json) {
			//iterate over the json and add to the html
            $("#location2").after(
    $.map(json, function (data, index) {
        return '<tr><td>' + data.position + '</td><td>' + data.number + '</td><td>' + data.year + '</td></tr>';
    }).join()
);
        }

});
}

});

