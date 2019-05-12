<?php
/**
 * Plugin Name: NEU Hackney
 * Description: Sets up custom post types, categories and editors
 * Author: Michael Watts
 * Author URI: https://michaelwatts.co
 * Version: 1.0.0
 * License: MIT
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';

/**
 * Register Taxonomies
 */
require_once plugin_dir_path( __FILE__ ) . 'src/taxonomies.php';

/**
 * Register Custom Post Types
 */
require_once plugin_dir_path( __FILE__ ) . 'src/post-types.php';

/**
 * Register Filters
 */
require_once plugin_dir_path( __FILE__ ) . 'src/filters.php';

/**
 * Register Meta Fields
 */
require_once plugin_dir_path( __FILE__ ) . 'src/meta.php';

/**
 * Remove standard posts from admin menu
 */

function neuhack_remove_menu_pages() {
		remove_menu_page('edit.php');
		remove_menu_page('edit-comments.php');
}
add_action( 'admin_menu', 'neuhack_remove_menu_pages' );

/**
 * Remove boxes from the dashboard
 */

function remove_dashboard_meta() {
	remove_meta_box( 'dashboard_incoming_links', 'dashboard', 'normal' );
	remove_meta_box( 'dashboard_plugins', 'dashboard', 'normal' );
	// remove_meta_box( 'dashboard_primary', 'dashboard', 'side' );
	// remove_meta_box( 'dashboard_secondary', 'dashboard', 'normal' );
	remove_meta_box( 'dashboard_quick_press', 'dashboard', 'side' );
	remove_meta_box( 'dashboard_recent_drafts', 'dashboard', 'side' );
	remove_meta_box( 'dashboard_recent_comments', 'dashboard', 'normal' );
	remove_meta_box( 'dashboard_right_now', 'dashboard', 'normal' );
	// remove_meta_box( 'dashboard_activity', 'dashboard', 'normal');//since 3.8
}
add_action( 'admin_init', 'remove_dashboard_meta' );

/**
 * Remove the Media section as editors don't need access
 */

add_action( 'admin_menu', 'neuhack_remove_menu_links' );
function neuhack_remove_menu_links() {
		remove_menu_page('upload.php'); //remove media
}

/**
 * Remove potentially confusing options from the "add new" menu
 */

add_action( 'admin_bar_menu', 'neuhack_remove_wp_nodes', 999 );

function neuhack_remove_wp_nodes() 
{
    global $wp_admin_bar;   
    $wp_admin_bar->remove_node( 'new-post' );
    $wp_admin_bar->remove_node( 'new-page' );
    $wp_admin_bar->remove_node( 'new-media' );
}

/**
 * Remove 'view' option from posts
 */

add_filter( 'post_row_actions', 'remove_row_actions', 10, 1 );

function remove_row_actions( $actions )
{
    unset( $actions['view'] );
    return $actions;
}

/**
 * Remove 'view' option from pages
 */

add_filter( 'page_row_actions', 'remove_page_row_actions', 10, 1 );

function remove_page_row_actions( $actions )
{
    unset( $actions['view'] );
    return $actions;
}