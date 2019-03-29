<?php

/*
Plugin Name: NEU Meta Block
Version: 1.0
Author: Michael Watts
Author URI: https://michaelwatts.co
License: MIT
*/

// add a flag to flush rewrite rules when plugin is activated
register_activation_hook( __FILE__, 'neuhack_meta_block_activate' );

function neuhack_meta_block_activate() {
    if ( ! get_option( 'neuhack_meta_flush_rewrite_rules_flag' ) ) {
        add_option( 'neuhack_meta_flush_rewrite_rules_flag', true );
    }
}

// register custom meta tag field
function neuhack_register_meta() {
  register_meta( 'post', 'neuhack_event_flyer_url', array(
      'show_in_rest' => true,
      'single' => true,
      'type' => 'string',
      'object_subtype' => 'events',
  ) );
  register_meta( 'post', 'neuhack_event_image_alt', array(
    'show_in_rest' => true,
    'single' => true,
    'type' => 'string',
    'object_subtype' => 'events',
  ) );
  register_meta( 'post', 'neuhack_event_date_time', array(
    'show_in_rest' => true,
    'single' => true,
    'type' => 'string',
    'object_subtype' => 'events',
  ) );
  register_meta( 'post', 'neuhack_event_location', array(
    'show_in_rest' => true,
    'single' => true,
    'type' => 'string',
    'object_subtype' => 'events',
  ) );
  register_meta( 'post', 'neuhack_event_is_general_meeting', array(
    'show_in_rest' => true,
    'single' => true,
    'type' => 'number',
    'object_subtype' => 'events',
  ) );
  register_meta( 'post', 'neuhack_event_agenda', array(
    'show_in_rest' => true,
    'single' => true,
    'type' => 'string',
    'object_subtype' => 'events',
  ) );
}
add_action( 'init', 'neuhack_register_meta' );

// enqueue block script
function neuhack_enqueue() {
  wp_enqueue_script(
      'neuhack-custom-blocks-script',
      plugins_url( 'build/index.js', __FILE__ ),
      array( 'wp-blocks', 'wp-element', 'wp-components' )
  );
}
add_action( 'enqueue_block_editor_assets', 'neuhack_enqueue' );

add_action( 'init', 'neuhack_flush_rewrite_rules_maybe', 20 );
/**
 * Flush rewrite rules if the previously added flag exists,
 * and then remove the flag.
 */
function neuhack_meta_flush_rewrite_rules_maybe() {
    if ( get_option( 'neuhack_meta_flush_rewrite_rules_flag' ) ) {
        flush_rewrite_rules();
        delete_option( 'neuhack_meta_flush_rewrite_rules_flag' );
    }
}