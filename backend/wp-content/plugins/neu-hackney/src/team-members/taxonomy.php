<?php
/**
 * Register taxonomy
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Register Custom Taxonomy
function neuhack_position() {

	$labels = array(
		'name'                       => _x( 'Positions', 'Taxonomy General Name', 'text_domain' ),
		'singular_name'              => _x( 'Position', 'Taxonomy Singular Name', 'text_domain' ),
		'menu_name'                  => __( 'Position', 'text_domain' ),
		'all_items'                  => __( 'All Positions', 'text_domain' ),
		'parent_item'                => __( 'Parent Position', 'text_domain' ),
		'parent_item_colon'          => __( 'Parent Position:', 'text_domain' ),
		'new_item_name'              => __( 'New Position Name', 'text_domain' ),
		'add_new_item'               => __( 'Add New Position', 'text_domain' ),
		'edit_item'                  => __( 'Edit Position', 'text_domain' ),
		'update_item'                => __( 'Update Position', 'text_domain' ),
		'view_item'                  => __( 'View Position', 'text_domain' ),
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
		'rest_base'                  => 'position',
		// prevent users from changing the taxonomy as the site will rely on it
		'capabilities' => array(
			'manage_terms' => 'edit_users',
			'edit_terms'   => 'edit_users',
			'delete_terms' => 'edit_users',
			'assign_terms' => 'edit_posts',
		),
	);
	register_taxonomy( 'position', array( 'team' ), $args );

}
add_action( 'init', 'neuhack_position', 0 );

function neuhack_register_positions(){
		wp_insert_term(
			'Divisional Secretary', // the term
			'position', // the taxonomy
			array(
				'slug' => 'divisional-secretary',
			)
		);
		wp_insert_term(
			'President', // the term
			'position', // the taxonomy
			array(
				'slug' => 'president',
			)
		);
		wp_insert_term(
			'Vice President', // the term
			'position', // the taxonomy
			array(
				'slug' => 'vice-president',
			)
		);
		wp_insert_term(
			'Associate Secretary', // the term
			'position', // the taxonomy
			array(
				'slug' => 'associate-secretary',
			)
		);
		wp_insert_term(
			'Treasurer', // the term
			'position', // the taxonomy
			array(
				'slug' => 'treasurer',
			)
		);
		wp_insert_term(
			'Membership Secretary', // the term
			'position', // the taxonomy
			array(
				'slug' => 'membership-secretary',
			)
		);
		wp_insert_term(
			'Health and Safety Officer', // the term
			'position', // the taxonomy
			array(
				'slug' => 'health-and-safety',
			)
		);
		wp_insert_term(
			'Press and Publicity Officer', // the term
			'position', // the taxonomy
			array(
				'slug' => 'press-and-publicity',
			)
		);
		wp_insert_term(
			'Equal Opportunities Officer', // the term
			'position', // the taxonomy
			array(
				'slug' => 'equal-opportunities',
			)
		);
		wp_insert_term(
			'New Professionals Officer', // the term
			'position', // the taxonomy
			array(
				'slug' => 'new-professionals',
			)
		);
		wp_insert_term(
			'International Solidarity Officer', // the term
			'position', // the taxonomy
			array(
				'slug' => 'international-solidarity',
			)
		);
		wp_insert_term(
			'Independent Sector Officer', // the term
			'position', // the taxonomy
			array(
				'slug' => 'independent-sector',
			)
		);
		wp_insert_term(
			'Post 16 Officer', // the term
			'position', // the taxonomy
			array(
				'slug' => 'post-16',
			)
		);
		wp_insert_term(
			'Support Staff Officer', // the term
			'position', // the taxonomy
			array(
				'slug' => 'support-staff',
			)
		);
		wp_insert_term(
			'Committee Member', // the term
			'position', // the taxonomy
			array(
				'slug' => 'committee-member',
			)
		);
}
add_action( 'admin_init', 'neuhack_register_positions', 0 );
