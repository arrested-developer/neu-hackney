<?php
/**
 * Import all taxonomies
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register Taxonomies
 */
require_once plugin_dir_path( __FILE__ ) . 'team-members/taxonomy.php';
require_once plugin_dir_path( __FILE__ ) . 'member-categories/taxonomy.php';

// prevent anyone below admin from adding to taxonomies

add_action( 'pre_insert_term', function ( $term, $taxonomy )
{
    return ( current_user_can('edit_user') )
        ? $term
				: new WP_Error( 'term_addition_blocked', __( 'Only administrators can add terms to a taxonomy' ) );
}, 0, 2 );

/**
 * Add category taxonomy to pages
 */
function add_taxonomies_to_pages() {
  register_taxonomy_for_object_type( 'category', 'page' );
  }
 add_action( 'init', 'add_taxonomies_to_pages' );