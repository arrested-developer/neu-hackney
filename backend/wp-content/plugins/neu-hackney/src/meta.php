<?php
/**
 * Import all meta setup files
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register Common Meta Fields
 *
 */

function neuhack_register_common_meta() {
	register_meta( 'post', 'neuhack_image_url', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );
	register_meta( 'post', 'neuhack_image_alt', array(
	'show_in_rest' => true,
	'single' => true,
	'type' => 'string',
	) );
	register_meta( 'post', 'neuhack_attachment_url', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );
	register_meta( 'post', 'neuhack_date_time', array(
	'show_in_rest' => true,
	'single' => true,
	'type' => 'string',
	) );
	register_meta( 'post', 'neuhack_details', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
		) );
}
add_action('init', 'neuhack_register_common_meta');


/**
 * Register Meta Fields
 */
require_once plugin_dir_path( __FILE__ ) . 'events/meta.php';
require_once plugin_dir_path( __FILE__ ) . 'team-members/meta.php';
require_once plugin_dir_path( __FILE__ ) . 'campaigns/meta.php';
