<?php
/**
 * Register meta fields for the events post type
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


// note, we can use 'object_subtype' => 'events' to restrict these fields
// to the events post type
function neuhack_useful_resources_register_meta() {
	register_meta( 'post', 'neuhack_resource_url', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
  ) );
  register_meta( 'post', 'neuhack_resource_is_external', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'number',
	) );
}
add_action( 'init', 'neuhack_useful_resources_register_meta' );
