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
function neuhack_register_meta() {
  register_meta( 'post', 'neuhack_event_flyer_url', array(
      'show_in_rest' => true,
      'single' => true,
      'type' => 'string',
  ) );
  register_meta( 'post', 'neuhack_event_image_alt', array(
    'show_in_rest' => true,
    'single' => true,
    'type' => 'string',
  ) );
  register_meta( 'post', 'neuhack_event_date_time', array(
    'show_in_rest' => true,
    'single' => true,
    'type' => 'string',
  ) );
  register_meta( 'post', 'neuhack_event_is_general_meeting', array(
    'show_in_rest' => true,
    'single' => true,
    'type' => 'number',
  ) );
  register_meta( 'post', 'neuhack_event_agenda', array(
    'show_in_rest' => true,
    'single' => true,
    'type' => 'string',
  ) );
}
add_action( 'init', 'neuhack_register_meta' );
