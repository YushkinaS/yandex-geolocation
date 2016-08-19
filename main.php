<?php
/*
Plugin Name: Yandex Geolocation
Author: YushkinaS
*/

add_action( 'wp_enqueue_scripts', 'geolocation_scripts' );
function geolocation_scripts() {

	wp_enqueue_script(
		'jquery'
	);
	
	wp_enqueue_script(
		'yandex-map20',
		'http://api-maps.yandex.ru/2.0-stable/?load=package.standard&lang=ru-RU&ns=ymaps20'
	);

	wp_enqueue_script(
		'yandex-geolocation-scripts',
		plugin_dir_url( __FILE__ ).'scripts.js',
		array('jquery','yandex-map20')
	);
	
}

?>
