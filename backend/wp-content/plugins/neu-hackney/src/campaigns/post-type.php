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

// Register Campaign Custom Post Type
function neuhackney_custom_post_campaigns() {

	$labels = array(
		'name'                  => 'Campaigns',
		'singular_name'         => 'Campaign',
		'menu_name'             => 'Campaigns',
		'name_admin_bar'        => 'Campaign',
		'archives'              => 'Campaign Archives',
		'attributes'            => 'Campaign Attributes',
		'parent_item_colon'     => 'Parent Campaign:',
		'all_items'             => 'All Campaigns',
		'add_new_item'          => 'Add New Campaign',
		'add_new'               => 'Add New',
		'new_item'              => 'New Campaign',
		'edit_item'             => 'Edit Campaign',
		'update_item'           => 'Update Campaign',
    'view_item'             => 'View Campaign',
		'view_items'            => 'View Campaigns',
		'search_items'          => 'Search Campaign',
		'not_found'             => 'Not found',
		'not_found_in_trash'    => 'Not found in Trash',
		'featured_image'        => 'Featured Image',
		'set_featured_image'    => 'Set featured image',
		'remove_featured_image' => 'Remove featured image',
		'use_featured_image'    => 'Use as featured image',
		'insert_into_item'      => 'Insert into Campaign',
		'uploaded_to_this_item' => 'Uploaded to this Campaign',
		'items_list'            => 'Campaigns list',
		'items_list_navigation' => 'Campaigns list navigation',
		'filter_items_list'     => 'Filter Campaigns list',
	);
	$rewrite = array(
		'slug'                  => 'campaigns',
		'with_front'            => true,
		'pages'                 => true,
		'feeds'                 => true,
	);
	$template = array(
		array('neu-hackney/campaign')
	);
	$args = array(
		'label'                 => 'Campaign',
		'description'           => 'NEU Hackney Campaigns',
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'custom-fields' ),
		'taxonomies'            => array( 'category', 'post_tag' ),
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
		'rest_base'             => 'campaigns',
		'template'              => $template,
		'template_lock'         => 'all',
	);
	register_post_type( 'Campaigns', $args );

}
// register post types with priority 10
add_action( 'init', 'neuhackney_custom_post_campaigns', 10 );
