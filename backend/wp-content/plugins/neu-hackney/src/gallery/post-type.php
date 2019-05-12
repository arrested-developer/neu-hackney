<?php
/**
 * Post Type Initializer
 *
 * Register custom post types for the plugin
 *
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Register Gallery Photo Custom Post Type
function neuhackney_custom_post_gallery() {

	$labels = array(
		'name'                  => 'Gallery Photos',
		'singular_name'         => 'Gallery Photo',
		'menu_name'             => 'Gallery Photos',
		'name_admin_bar'        => 'Gallery Photo',
		'archives'              => 'Gallery Photo Archives',
		'attributes'            => 'Gallery Photo Attributes',
		'parent_item_colon'     => 'Parent Gallery Photo:',
		'all_items'             => 'All Gallery Photos',
		'add_new_item'          => 'Add New Gallery Photo',
		'add_new'               => 'Add New',
		'new_item'              => 'New Gallery Photo',
		'edit_item'             => 'Edit Gallery Photo',
		'update_item'           => 'Update Gallery Photo',
    'view_item'             => 'View Gallery Photo',
		'view_items'            => 'View Gallery Photos',
		'search_items'          => 'Search Gallery Photo',
		'not_found'             => 'Not found',
		'not_found_in_trash'    => 'Not found in Trash',
		'featured_image'        => 'Featured Image',
		'set_featured_image'    => 'Set featured image',
		'remove_featured_image' => 'Remove featured image',
		'use_featured_image'    => 'Use as featured image',
		'insert_into_item'      => 'Insert into Gallery Photo',
		'uploaded_to_this_item' => 'Uploaded to this Gallery Photo',
		'items_list'            => 'Gallery Photos list',
		'items_list_navigation' => 'Gallery Photos list navigation',
		'filter_items_list'     => 'Filter Gallery Photos list',
	);
	$rewrite = array(
		'slug'                  => 'gallery',
		'with_front'            => true,
		'pages'                 => true,
		'feeds'                 => true,
	);
	$template = array(
		array('neu-hackney/gallery')
	);
	$args = array(
		'label'                 => 'Gallery Photo',
		'description'           => 'NEU Hackney Gallery Photos',
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'custom-fields' ),
		'taxonomies'            => array( 'post_tag' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_icon'             => 'dashicons-megaphone',
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
		'rest_base'             => 'gallery',
		'template'              => $template,
		'template_lock'         => 'all',
	);
	register_post_type( 'Gallery Photos', $args );

}
// register post types with priority 10
add_action( 'init', 'neuhackney_custom_post_gallery', 10 );
