<?php
/**
 * Register meta fields in database
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function neuhack_register_settings_meta() {
	register_meta( 'post', 'neuhack_settings_nomination_form', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );
	register_meta( 'post', 'neuhack_settings_election_calendar', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );
	register_meta( 'post', 'neuhack_settings_links_twitter', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );
		register_meta( 'post', 'neuhack_settings_links_facebook', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );
}
add_action('init', 'neuhack_register_settings_meta');