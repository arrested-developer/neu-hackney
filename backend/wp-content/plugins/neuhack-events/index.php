<?php

/*
Plugin Name: Events Post-type with Gutenberg Support
Version: 1.0
Author: Michael Watts
Author URI: https://michaelwatts.co
License: MIT
*/

// add a flag to flush rewrite rules when plugin is activated
register_activation_hook( __FILE__, 'neuhack_events_activate' );

function neuhack_meta_block_activate() {
    if ( ! get_option( 'neuhack_events_flush_rewrite_rules_flag' ) ) {
        add_option( 'neuhack_events_flush_rewrite_rules_flag', true );
    }
}

add_action( 'init', 'neuhack_events_flush_rewrite_rules_maybe', 20 );
/**
 * Flush rewrite rules if the previously added flag exists,
 * and then remove the flag.
 */
function neuhack_events_flush_rewrite_rules_maybe() {
    if ( get_option( 'neuhack_events_flush_rewrite_rules_flag' ) ) {
        flush_rewrite_rules();
        delete_option( 'neuhack_events_flush_rewrite_rules_flag' );
    }
}

// Register Event Custom Post Type
function neuhack_custom_post_events() {

	$labels = array(
		'name'                  => 'Events',
		'singular_name'         => 'Event',
		'menu_name'             => 'Events',
		'name_admin_bar'        => 'Event',
		'archives'              => 'Event Archives',
		'attributes'            => 'Event Attributes',
		'parent_item_colon'     => 'Parent Event:',
		'all_items'             => 'All Events',
		'add_new_item'          => 'Add New Event',
		'add_new'               => 'Add New',
		'new_item'              => 'New Event',
		'edit_item'             => 'Edit Event',
		'update_item'           => 'Update Event',
    'view_item'             => 'View Event',
		'view_items'            => 'View Events',
		'search_items'          => 'Search Event',
		'not_found'             => 'Not found',
		'not_found_in_trash'    => 'Not found in Trash',
		'featured_image'        => 'Featured Image',
		'set_featured_image'    => 'Set featured image',
		'remove_featured_image' => 'Remove featured image',
		'use_featured_image'    => 'Use as featured image',
		'insert_into_item'      => 'Insert into event',
		'uploaded_to_this_item' => 'Uploaded to this event',
		'items_list'            => 'Events list',
		'items_list_navigation' => 'Events list navigation',
		'filter_items_list'     => 'Filter events list',
	);
	$rewrite = array(
		'slug'                  => 'events',
		'with_front'            => true,
		'pages'                 => true,
		'feeds'                 => true,
  );
  $template = array(
    array('neuhack/event')
  );
	$args = array(
		'label'                 => 'Event',
		'description'           => 'Events',
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'custom-fields' ),
		'taxonomies'            => array( 'category', 'post_tag' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'rewrite'               => $rewrite,
		'capability_type'       => 'post',
		'show_in_rest'          => true,
    'rest_base'             => 'events',
    'template'              => $template,
    'template_lock'         => 'all',
	);
	register_post_type( 'events', $args );

}
// register post types with priority 10
add_action( 'init', 'neuhack_custom_post_events', 10 );

// register custom meta tag field

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

// enqueue event block script
function neuhack_events_block_enqueue() {
  wp_enqueue_script(
      'neuhack-event-block-script',
      plugins_url( 'build/index.js', __FILE__ ),
      array( 'wp-blocks', 'wp-element', 'wp-components', 'wp-editor' )
  );
}
add_action( 'enqueue_block_editor_assets', 'neuhack_events_block_enqueue' );