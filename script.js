var apikey = 'YOUR-API-KEY'; // Put your API key here

// Use this function to do stuff with your results. 
// It is called after 'search' is executed.
function searchCallback(results) {
	for (var i = 0; i < 10; i++) {
		var platformName = "";
		for ( j = 0; j < results[i].platforms.length; j++) {
			platformName +=  "- " + results[i].platforms[j].name;
		};
		
		if((i +1) % 3 == 0 ){
			$('#searchResults').append(
				'<div id="searchRow" class= "row">' +
					'<div id="result' + (i+1) + '" class="col-md-4">' +
						'<div id="name"> Tittle: ' + results[i].name + '</div>' +
						'<div id="image"><img src="' + results[i].image.thumb_url +'"/></div>' +
						'<div id="description"><h4>Description: </h4>' + results[i].deck + '</div>' +
						'<div id="platforms"><h4> Supported Platforms</h4>' + platformName + '</div>' +
					'</div>' +
				'</div>'
			);

		} else {
		$('#searchResults').append(
			'<div id="result' + (i+1) + '" class="col-md-4">' +
				'<div id="name"> Tittle: ' + results[i].name + '</div>' +
				'<div id="image"><img src="' + results[i].image.thumb_url +'"/></div>' +
				'<div id="description"><h4>Description: </h4>' + results[i].deck + '</div>' +
				'<div id="platforms"><h4> Supported Platforms</h4>' + platformName + '</div>' +
			'</div>' 

			);

		};

	}
}





var userInput = "";
var apikey = "360640851fd82bba03cfed3e035021eb9eef3ef3";


$(document).ready(function() {
	$('#submit').on('click', function(){
	$('#searchResults').empty();
		console.log("before " + userInput);
		userInput = $('#search').val();
		console.log("after " + userInput);
		search(userInput);
	});
	// Start the search here!
	


});

// HELPER FUNCTION
// Executes a search using 'query' and runs searchCallback on the results of a success.
function search(query){

	$.ajax ({
	    type: 'GET',
	    dataType: 'jsonp',
	    crossDomain: true,
	    jsonp: 'json_callback',
	    url: 'http://www.giantbomb.com/api/search/?format=jsonp&resources=game&api_key=' + apikey +'&query=' + encodeURI(query),
	    complete: function() {
	        console.log('ajax complete');
	    },
	    success: function(data) {
	        searchCallback(data.results);
	        console.log("results :" + data.results);
	    }
	});

}
