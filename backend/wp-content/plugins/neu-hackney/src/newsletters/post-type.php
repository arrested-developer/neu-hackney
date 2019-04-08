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

// Register Newsletter Custom Post Type
function neuhackney_custom_post_newsletters() {

	$labels = array(
		'name'                  => 'Newsletters',
		'singular_name'         => 'Newsletter',
		'menu_name'             => 'Newsletters',
		'name_admin_bar'        => 'Newsletter',
		'archives'              => 'Newsletter Archives',
		'attributes'            => 'Newsletter Attributes',
		'parent_item_colon'     => 'Parent Newsletter:',
		'all_items'             => 'All Newsletters',
		'add_new_item'          => 'Add New Newsletter',
		'add_new'               => 'Add New',
		'new_item'              => 'New Newsletter',
		'edit_item'             => 'Edit Newsletter',
		'update_item'           => 'Update Newsletter',
    'view_item'             => 'View Newsletter',
		'view_items'            => 'View Newsletters',
		'search_items'          => 'Search Newsletter',
		'not_found'             => 'Not found',
		'not_found_in_trash'    => 'Not found in Trash',
		'featured_image'        => 'Featured Image',
		'set_featured_image'    => 'Set featured image',
		'remove_featured_image' => 'Remove featured image',
		'use_featured_image'    => 'Use as featured image',
		'insert_into_item'      => 'Insert into Newsletter',
		'uploaded_to_this_item' => 'Uploaded to this Newsletter',
		'items_list'            => 'Newsletters list',
		'items_list_navigation' => 'Newsletters list navigation',
		'filter_items_list'     => 'Filter Newsletters list',
	);
	$rewrite = array(
		'slug'                  => 'newsletters',
		'with_front'            => true,
		'pages'                 => true,
		'feeds'                 => true,
	);
	$template = array(
		array('neu-hackney/newsletter')
	);
	$args = array(
		'label'                 => 'Newsletter',
		'description'           => 'NEU Hackney Newsletters',
		'labels'                => $labels,
		'supports'              => array( 'editor', 'custom-fields' ),
		'taxonomies'            => array( 'category', 'post_tag' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'show_in_admin_bar'     => true,
		'menu_icon'             => 'dashicons-media-document',
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'rewrite'               => $rewrite,
		'capability_type'       => 'post',
		'show_in_rest'          => true,
		'rest_base'             => 'newsletters',
		'template'              => $template,
		'template_lock'         => 'all',
	);
	register_post_type( 'Newsletters', $args );

}
// register post types with priority 10
add_action( 'init', 'neuhackney_custom_post_newsletters', 10 );
