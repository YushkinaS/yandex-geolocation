jQuery(document).ready(function($) {
	
	function issetCookie(name) {
	  var matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	  ));
	  return matches ? true : false;
	}
	
	function getCookie(name) {
	  var matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	  ));
	  return matches ? decodeURIComponent(matches[1]) : undefined;
	}
	
	function setCookie(name,value) {
		var date = new Date(new Date().getTime() + 600 * 1000);
		document.cookie = name+"="+value+"; path=/; expires=" + date.toUTCString();
	}
	
	
	window.onload = function () {
		//при первом входе, когда нет кук
		if(!issetCookie('user_city')) {
			city = ymaps20.geolocation.city;
			setCookie('user_city',city);
		}
		if(!issetCookie('user_region')) {
			region = ymaps20.geolocation.region;
			setCookie('user_region',region);
		}
		if(!issetCookie('user_country')) {
			country = ymaps20.geolocation.country;
			setCookie('user_country',country);
		}
		
		city = getCookie('user_city')+' ';
		region = getCookie('user_region')+' ';
		country = getCookie('user_country')+' ';
		$('div#geotest').html(city+region+country);
		
	}



});


