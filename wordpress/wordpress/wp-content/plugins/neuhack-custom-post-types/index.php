<?php

/*
Plugin Name: NEU Hackney Custom Post Types
Description: Defines custom post types for NEU Hackney Wordpress Site
Version: 1.0
Author: Michael Watts
Author URI: https://michaelwatts.co
License: MIT
*/

// add a flag to flush rewrite rules when plugin is activated
register_activation_hook( __FILE__, 'neuhack_activate' );

function neuhack_activate() {
    if ( ! get_option( 'neuhack_flush_rewrite_rules_flag' ) ) {
        add_option( 'neuhack_flush_rewrite_rules_flag', true );
    }
}

// Define the categories
function neuhack_register_categories() {
	wp_insert_term(
		'Leadership',
		'category',
		array(
		  'description'	=> 'School leaders, heads, deputies',
		  'slug' 		=> 'leadership'
		)
  );
  wp_insert_term(
		'Teachers',
		'category',
		array(
		  'description'	=> 'Teachers',
		  'slug' 		=> 'teachers'
		)
  );
  wp_insert_term(
		'Support Staff',
		'category',
		array(
		  'description'	=> 'Support staff in schools, colleges, etc.',
		  'slug' 		=> 'supportstaff'
		)
  );
}
add_action( 'after_setup_theme', 'neuhack_register_categories' );

// Register Event Custom Post Type
function neuhack_custom_post_events() {

	$labels = array(
		'name'                  => 'Events',
		'singular_name'         => 'Event',
		'menu_name'             => 'Events',
		'name_admin_bar'        => 'Event',
		'archives'              => 'Event Archives',
		'attributes'            => 'Item Attributes',
		'parent_item_colon'     => 'Parent Item:',
		'all_items'             => 'All Items',
		'add_new_item'          => 'Add New Event',
		'add_new'               => 'Add New',
		'new_item'              => 'New Item',
		'edit_item'             => 'Edit Item',
		'update_item'           => 'Update Item',
		'view_item'             => 'View Item',
		'view_items'            => 'View Items',
		'search_items'          => 'Search Item',
		'not_found'             => 'Not found',
		'not_found_in_trash'    => 'Not found in Trash',
		'featured_image'        => 'Featured Image',
		'set_featured_image'    => 'Set featured image',
		'remove_featured_image' => 'Remove featured image',
		'use_featured_image'    => 'Use as featured image',
		'insert_into_item'      => 'Insert into item',
		'uploaded_to_this_item' => 'Uploaded to this item',
		'items_list'            => 'Items list',
		'items_list_navigation' => 'Items list navigation',
		'filter_items_list'     => 'Filter items list',
	);
	$rewrite = array(
		'slug'                  => 'events',
		'with_front'            => true,
		'pages'                 => true,
		'feeds'                 => true,
  );
  $template = array(
    array('neuhack/flyer'),
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

// Register Campaign Custom Post Type
function neuhack_custom_post_campaign() {

	$labels = array(
		'name'                  => 'Campaigns',
		'singular_name'         => 'Campaign',
		'menu_name'             => 'Campaigns',
		'name_admin_bar'        => 'Campaign',
		'archives'              => 'Campaign Archives',
		'attributes'            => 'Item Attributes',
		'parent_item_colon'     => 'Parent Item:',
		'all_items'             => 'All Items',
		'add_new_item'          => 'Add New Campaign',
		'add_new'               => 'Add New',
		'new_item'              => 'New Item',
		'edit_item'             => 'Edit Item',
		'update_item'           => 'Update Item',
		'view_item'             => 'View Item',
		'view_items'            => 'View Items',
		'search_items'          => 'Search Item',
		'not_found'             => 'Not found',
		'not_found_in_trash'    => 'Not found in Trash',
		'featured_image'        => 'Featured Image',
		'set_featured_image'    => 'Set featured image',
		'remove_featured_image' => 'Remove featured image',
		'use_featured_image'    => 'Use as featured image',
		'insert_into_item'      => 'Insert into item',
		'uploaded_to_this_item' => 'Uploaded to this item',
		'items_list'            => 'Items list',
		'items_list_navigation' => 'Items list navigation',
		'filter_items_list'     => 'Filter items list',
	);
	$rewrite = array(
		'slug'                  => 'campaigns',
		'with_front'            => true,
		'pages'                 => true,
		'feeds'                 => true,
  );
  $template = [
    ['core/paragraph', [
      'placeholder' => 'Type a short description',
    ] ],
    ['core/image', [] ],
    ['core/paragraph', [
      'placeholder' =>  'Type a paragraph about the campaign'
    ]],
    ];
	$args = array(
		'label'                 => 'Campaign',
		'description'           => 'Campaigns',
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
    'rest_base'             => 'campaigns',
    'template'              => $template,
    'template_lock'         => 'all',
	);
	register_post_type( 'campaigns', $args );

}
// register post types with priority 10
add_action( 'init', 'neuhack_custom_post_campaign', 10 );

// Register Officer Custom Post Type
function neuhack_custom_post_officer() {

	$labels = array(
		'name'                  => 'Officers',
		'singular_name'         => 'Officer',
		'menu_name'             => 'Officers',
		'name_admin_bar'        => 'Officer',
		'archives'              => 'Officer Archives',
		'attributes'            => 'Item Attributes',
		'parent_item_colon'     => 'Parent Item:',
		'all_items'             => 'All Items',
		'add_new_item'          => 'Add New Officer',
		'add_new'               => 'Add New',
		'new_item'              => 'New Item',
		'edit_item'             => 'Edit Item',
		'update_item'           => 'Update Item',
		'view_item'             => 'View Item',
		'view_items'            => 'View Items',
		'search_items'          => 'Search Item',
		'not_found'             => 'Not found',
		'not_found_in_trash'    => 'Not found in Trash',
		'featured_image'        => 'Featured Image',
		'set_featured_image'    => 'Set featured image',
		'remove_featured_image' => 'Remove featured image',
		'use_featured_image'    => 'Use as featured image',
		'insert_into_item'      => 'Insert into item',
		'uploaded_to_this_item' => 'Uploaded to this item',
		'items_list'            => 'Items list',
		'items_list_navigation' => 'Items list navigation',
		'filter_items_list'     => 'Filter items list',
  );
  $template = [
    ['core/image'],
  ];
	$rewrite = array(
		'slug'                  => 'officers',
		'with_front'            => true,
		'pages'                 => true,
		'feeds'                 => true,
	);
	$args = array(
		'label'                 => 'Officer',
		'description'           => 'Officers',
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
    'rest_base'             => 'officers',
    'template'              => $template,
    'template_lock'         => 'all',
	);
	register_post_type( 'officer', $args );

}
// register post types with priority 10
add_action( 'init', 'neuhack_custom_post_officer', 10 );

// flush rewrite rules only if required, with a later priority
add_action( 'init', 'neuhack_flush_rewrite_rules_maybe', 20 );
/**
 * Flush rewrite rules if the previously added flag exists,
 * and then remove the flag.
 */
function neuhack_flush_rewrite_rules_maybe() {
    if ( get_option( 'neuhack_flush_rewrite_rules_flag' ) ) {
        flush_rewrite_rules();
        delete_option( 'neuhack_flush_rewrite_rules_flag' );
    }
}