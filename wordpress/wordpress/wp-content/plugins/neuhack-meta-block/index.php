<?php

/*
Plugin Name: NEU Meta Block
Version: 1.0
Author: Michael Watts
Author URI: https://michaelwatts.co
License: MIT
*/

// register custom meta tag field
function myguten_register_meta() {
  register_meta( 'events', 'myguten_meta_block_field', array(
      'show_in_rest' => true,
      'single' => true,
      'type' => 'string',
  ) );
  register_meta( 'events', 'neuhack_image_alt', array(
    'show_in_rest' => true,
    'single' => true,
    'type' => 'string',
) );
}
add_action( 'init', 'myguten_register_meta' );

// enqueue block script
function myguten_enqueue() {
  wp_enqueue_script(
      'myguten-script',
      plugins_url( 'build/index.js', __FILE__ ),
      array( 'wp-blocks', 'wp-element', 'wp-components' )
  );
}
add_action( 'enqueue_block_editor_assets', 'myguten_enqueue' );