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

// Register Site Settings Custom Post Type
function neuhackney_custom_post_site_settings() {

	$labels = array(
		'name'                  => 'Site Settings',
		'singular_name'         => 'Site Settings',
		'menu_name'             => 'Site Settings',
		'name_admin_bar'        => 'Site Settings',
		'archives'              => 'Site Settings Archives',
		'attributes'            => 'Site Settings Attributes',
		'parent_item_colon'     => 'Parent Site Settings:',
		'all_items'             => 'All Site Settings',
		'add_new_item'          => 'Add New Site Settings',
		'add_new'               => 'Add New',
		'new_item'              => 'New Site Settings',
		'edit_item'             => 'Edit Site Settings',
		'update_item'           => 'Update Site Settings',
    'view_item'             => 'View Site Settings',
		'view_items'            => 'View Site Settings',
		'search_items'          => 'Search Site Settings',
		'not_found'             => 'Not found',
		'not_found_in_trash'    => 'Not found in Trash',
		'featured_image'        => 'Featured Image',
		'set_featured_image'    => 'Set featured image',
		'remove_featured_image' => 'Remove featured image',
		'use_featured_image'    => 'Use as featured image',
		'insert_into_item'      => 'Insert into Site Settings',
		'uploaded_to_this_item' => 'Uploaded to this Site Settings',
		'items_list'            => 'Site Settings list',
		'items_list_navigation' => 'Site Settings list navigation',
		'filter_items_list'     => 'Filter Site Settings list',
	);
	$rewrite = array(
		'slug'                  => 'site-settings',
		'with_front'            => true,
		'pages'                 => true,
		'feeds'                 => true,
	);
	$template = array(
		array('neu-hackney/settings')
	);
	$args = array(
		'label'                 => 'Site Settings',
		'description'           => 'NEU Hackney Site Settings',
		'labels'                => $labels,
		'supports'              => array( 'editor', 'title', 'custom-fields' ),
		'taxonomies'            => array( ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 20,
		'show_in_admin_bar'     => true,
		'menu_icon'             => 'dashicons-admin-generic',
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'rewrite'               => $rewrite,
		'capability_type' => 'post',
		'capabilities' => array(
			'delete_posts' => current_user_can('administrator'),
			'create_posts' => current_user_can('administrator'),
		),
		'map_meta_cap' => true, // Set to `false`, if users are not allowed to edit/delete existing posts
		'show_in_rest'          => true,
		'rest_base'             => 'site-settings',
		'template'              => $template,
		'template_lock'         => 'all',
	);
	register_post_type( 'Site Settings', $args );

}
// register post types with priority 10
add_action( 'init', 'neuhackney_custom_post_site_settings', 10 );
