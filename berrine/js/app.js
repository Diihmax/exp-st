jQuery(function($) {
	var minValue = 10.00;
	
	// return distance in kilometers
	function calcDistance(p1, p2) {
		return (google.maps.geometry.spherical.computeDistanceBetween(p1.geometry.location, p2.geometry.location) / 1000).toFixed(2);
	}

	function getLocation(callback) {
		if (navigator.geolocation) {
			return navigator.geolocation.getCurrentPosition(callback);
		}
		return false;
	}

	function calculateAndDisplayRoute(directionsService, directionsDisplay, A, B) {
		if (A && B) {
			A.marker.setMap(null);
			B.marker.setMap(null);
			directionsDisplay.setMap(map);

			directionsService.route({
				origin: document.getElementById("input-a").value,
				destination: document.getElementById("input-b").value,
				travelMode: google.maps.TravelMode.DRIVING,
			}, function(response, status) {
				if (status === google.maps.DirectionsStatus.OK) {
					setDistance(response.routes[0].legs[0].distance);
					setDuration(response.routes[0].legs[0].duration);

					setTimeout(function() {
						directionsDisplay.setDirections(response);
					}, 100);
				}
			});
		}
	}

	var setDistance = function(distance) {
		$('.distance span').text(distance.text);
		
		var calculatedValue = (distance.value * parseFloat($('#type').val())) / 1000;
		
		value = (calculatedValue < minValue) ? minValue : calculatedValue;

		$('.value span').text('R$ ' + value.toFixed(2));
	};

	var setDuration = function(duration) {
		$('.duration span').text(duration.text);
	};

	var map, icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAA0CAYAAAAE/1FHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTg5MzgzNkZBRDhBMTFFNUJFRDRCMUNCNzQ5NDcyNEIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTg5MzgzNzBBRDhBMTFFNUJFRDRCMUNCNzQ5NDcyNEIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBODkzODM2REFEOEExMUU1QkVENEIxQ0I3NDk0NzI0QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBODkzODM2RUFEOEExMUU1QkVENEIxQ0I3NDk0NzI0QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgqtpAsAAAK6SURBVHjazJlNSFVBFMfHmxGu6iq5tI1GKCFkKmUUtWhRankXrcSFiG2ihYnUpkWkGNgiahW5kCioaNQMIZK+dKcZ8TQx+3TTJhkUUyjK/sc3zx72bnfu10x/+J+HMtz789z75pwzZjFVcZGLeBTeD++Ct8F5aSvm4E/wOPwCHmCOPa9y6SyFm5citsEn4Gymru/wPfgSYBLBILjYjHgZblSCddcKfANuBcyCOgQXZRThAhad6FE5AHnlDcFFNeJdOIdFryX4GECG3CG4OIj4CN7I4tMyfAQgz/6G4KIQcRTewuKXgHcD5MMfCC4sxOfwPqZPI/ABgPyy5C8aNAMweb/6ZCa4oGxMw0VMv97COyxJZAKAtJ3uTxC1zKxqCGKPYYi9lkyJSRXRi7liGIJZ7D+QJfdzk1qyZDNiUnMEkTAMkbBk0TKpUYLoMwzRm6qik4jFBgAmUEV3pr6inYay0JG+T9yCJ3W/kPCd9Z1VFeJwyM7ajw7jUTzO1GNeRTylAaAfAMfdtu1z8GzMANTonnGvHY69iNgcM8R53Oe9yvDTI/vOqPUSrgTETxUIGnTfwPkRAtBsWgaACbVS7thU1E5HnIWLmQC8p3IuHlAPGAHAa7gcED+CQNAZxFTIuZSefwUAxoN1Vo79GbE9ZBau/AtA9ZBk02qhYawwAAD9ESWA+BYOIglSu7rL+VcdADxbBfU6wQUNsFU+AJ4C4FDU3fZZH2tpjGhRXeyvYnIxgFitsLIbWWiKa+7oUFhDe8EFPxf13ztwMexxlnEdWTgZ9wTW6fEudOkYAwdlcXNrVmbih3Ds1OFoJl3TORDflC9gut7BT/RBOPbXDDtoj8yS1qOB7nU/3w56oeDtPRcbEL/AW+ExZKFc/yFJsk/ka98Kgyc19+XnQ5MQ9B+ej7J9Mygu6sNe4rcAAwBtdaaWDa4wdQAAAABJRU5ErkJggg==';
	if (!getLocation(function(position) {
		map = new google.maps.Map(document.getElementById('map'), {
			zoom: 15,
			center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
		});
	})) {
		map = new google.maps.Map(document.getElementById('map'), {
			zoom: 15,
			center: new google.maps.LatLng(-23.533773, -46.625290), // defaults to são paulo
		});
	}

	var directionsService = new google.maps.DirectionsService;
	var directionsDisplay = new google.maps.DirectionsRenderer;

	var inputAac = new google.maps.places.Autocomplete(
		(document.getElementById('input-a')),
		{ types: ['geocode'] }
	);
	var inputBac = new google.maps.places.Autocomplete(
		(document.getElementById('input-b')),
		{ types: ['geocode'] }
	);

	var points = {
		'A': null,
		'B': null
	};
	inputAac.addListener('place_changed', function() {
		var place = inputAac.getPlace();
		points['A'] = place;
		points['A'].marker = new google.maps.Marker({
			position: place.geometry.location,
			map: map
		});
		calculateAndDisplayRoute(directionsService, directionsDisplay, points['A'], points['B']);
	});

	inputBac.addListener('place_changed', function() {
		var place = inputAac.getPlace();
		points['B'] = place;
		points['B'].marker = new google.maps.Marker({
			position: place.geometry.location,
			map: map
		});
		calculateAndDisplayRoute(directionsService, directionsDisplay, points['A'], points['B']);
	});

	$('#type').on('change', function() {
		if (points['A'] && points['B'])
			calculateAndDisplayRoute(directionsService, directionsDisplay, points['A'], points['B']);
	});

});
