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

// Register Useful Resource Custom Post Type
function neuhackney_custom_post_useful_resources() {

	$labels = array(
		'name'                  => 'Useful Resources',
		'singular_name'         => 'Useful Resource',
		'menu_name'             => 'Useful Resources',
		'name_admin_bar'        => 'Useful Resource',
		'archives'              => 'Useful Resource Archives',
		'attributes'            => 'Useful Resource Attributes',
		'parent_item_colon'     => 'Parent Useful Resource:',
		'all_items'             => 'All Useful Resources',
		'add_new_item'          => 'Add New Useful Resource',
		'add_new'               => 'Add New',
		'new_item'              => 'New Useful Resource',
		'edit_item'             => 'Edit Useful Resource',
		'update_item'           => 'Update Useful Resource',
    'view_item'             => 'View Useful Resource',
		'view_items'            => 'View Useful Resources',
		'search_items'          => 'Search Useful Resources',
		'not_found'             => 'Not found',
		'not_found_in_trash'    => 'Not found in Trash',
		'featured_image'        => 'Featured Image',
		'set_featured_image'    => 'Set featured image',
		'remove_featured_image' => 'Remove featured image',
		'use_featured_image'    => 'Use as featured image',
		'insert_into_item'      => 'Insert into Useful Resource',
		'uploaded_to_this_item' => 'Uploaded to this Useful Resource',
		'items_list'            => 'Useful Resources list',
		'items_list_navigation' => 'Useful Resources list navigation',
		'filter_items_list'     => 'Filter Useful Resources list',
	);
	$rewrite = array(
		'slug'                  => 'useful-resources',
		'with_front'            => true,
		'pages'                 => true,
		'feeds'                 => true,
	);
	$template = array(
    array('neu-hackney/useful-resource')
	);
	$args = array(
		'label'                 => 'Useful Resource',
		'description'           => 'NEU Hackney Useful Resources',
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'custom-fields' ),
		'taxonomies'            => array( 'category' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_icon'             => 'dashicons-sos',
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
		'rest_base'             => 'useful-resources',
		'template'              => $template,
		'template_lock'         => 'all',
	);
	register_post_type( 'Useful Resources', $args );

}
// register post types with priority 10
add_action( 'init', 'neuhackney_custom_post_useful_resources', 10 );
