<?php
/**
 * Register meta fields for the campaigns post type
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// note, we can use 'object_subtype' => 'events' to restrict these fields
// to the events post type
function neuhack_register_campaigns_meta() {
  register_meta( 'post', 'neuhack_headline', array(
    'show_in_rest' => true,
    'single' => true,
    'type' => 'string',
  ) );
}
add_action( 'init', 'neuhack_register_campaigns_meta' );
