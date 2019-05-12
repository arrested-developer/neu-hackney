<?php
/**
 * Register taxonomy
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Register Custom Taxonomy
function neuhack_member_pages() {

	$labels = array(
		'name'                       => _x( 'Show On Page(s)', 'Taxonomy General Name', 'text_domain' ),
		'singular_name'              => _x( 'Show On Page(s)', 'Taxonomy Singular Name', 'text_domain' ),
		'menu_name'                  => __( 'Show On Page(s)', 'text_domain' ),
		'all_items'                  => __( 'All Show On Page(s)', 'text_domain' ),
		'parent_item'                => __( 'Parent Show On Page(s)', 'text_domain' ),
		'parent_item_colon'          => __( 'Parent Show On Page(s):', 'text_domain' ),
		'new_item_name'              => __( 'New Show On Page(s) Name', 'text_domain' ),
		'add_new_item'               => __( 'Add New Show On Page(s)', 'text_domain' ),
		'edit_item'                  => __( 'Edit Show On Page(s)', 'text_domain' ),
		'update_item'                => __( 'Update Show On Page(s)', 'text_domain' ),
		'view_item'                  => __( 'View Show On Page(s)', 'text_domain' ),
		'separate_items_with_commas' => __( 'Separate items with commas', 'text_domain' ),
		'add_or_remove_items'        => __( 'Add or remove items', 'text_domain' ),
		'choose_from_most_used'      => __( 'Choose from the most used', 'text_domain' ),
		'popular_items'              => __( 'Popular Items', 'text_domain' ),
		'search_items'               => __( 'Search Items', 'text_domain' ),
		'not_found'                  => __( 'Not Found', 'text_domain' ),
		'no_terms'                   => __( 'No items', 'text_domain' ),
		'items_list'                 => __( 'Items list', 'text_domain' ),
		'items_list_navigation'      => __( 'Items list navigation', 'text_domain' ),
	);
	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => true,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_tagcloud'              => true,
		'show_in_rest'               => true,
		'rest_base'                  => 'member-page',
		// prevent users from changing the taxonomy as the site will rely on it
		'capabilities' => array(
			'manage_terms' => 'edit_users',
			'edit_terms'   => 'edit_users',
			'delete_terms' => 'edit_users',
			'assign_terms' => 'edit_posts',
		),
	);
	register_taxonomy( 'member-page', array( 'post', 'team', 'useful-resources', 'page' ), $args );

}
add_action( 'init', 'neuhack_member_pages', 0 );

// register member types in the member-page taxonomy

function neuhack_register_member_pages(){
	wp_insert_term(
		'Teachers', // the term
		'member-page', // the taxonomy
		array(
			'slug' => 'teachers',
		)
	);
	wp_insert_term(
		'Support Staff', // the term
		'member-page', // the taxonomy
		array(
			'slug' => 'support-staff',
		)
	);
	wp_insert_term(
		'Supply Teachers', // the term
		'member-page', // the taxonomy
		array(
			'slug' => 'supply-teachers',
		)
	);
	wp_insert_term(
		'School Leaders', // the term
		'member-page', // the taxonomy
		array(
			'slug' => 'school-leaders',
		)
	);
	wp_insert_term(
		'Reps', // the term
		'member-page', // the taxonomy
		array(
			'slug' => 'reps',
		)
	);
	wp_insert_term(
		'Post 16', // the term
		'member-page', // the taxonomy
		array(
			'slug' => 'post-16',
		)
	);
	wp_insert_term(
		'NQTs', // the term
		'member-page', // the taxonomy
		array(
			'slug' => 'nqts',
		)
	);
	wp_insert_term(
		'Independent Sector', // the term
		'member-page', // the taxonomy
		array(
			'slug' => 'independent-sector',
		)
	);
	wp_insert_term(
		'Equalities', // the term
		'member-page', // the taxonomy
		array(
			'slug' => 'equalities',
		)
	);
	wp_insert_term(
		'Academy Staff', // the term
		'member-page', // the taxonomy
		array(
			'slug' => 'academy-staff',
		)
	);
	wp_insert_term(
		'Affiliations', // the term
		'member-page', // the taxonomy
		array(
			'slug' => 'affiliations',
		)
	);
}
add_action( 'admin_init', 'neuhack_register_member_pages', 0 );