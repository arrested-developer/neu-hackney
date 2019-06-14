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
	remove_meta_box( 'dashboard_primary', 'dashboard', 'side' );
	remove_meta_box( 'dashboard_secondary', 'dashboard', 'normal' );
	remove_meta_box( 'dashboard_quick_press', 'dashboard', 'side' );
	remove_meta_box( 'dashboard_recent_drafts', 'dashboard', 'side' );
	remove_meta_box( 'dashboard_recent_comments', 'dashboard', 'normal' );
	remove_meta_box( 'dashboard_right_now', 'dashboard', 'normal' );
	remove_meta_box( 'dashboard_activity', 'dashboard', 'normal');//since 3.8
	remove_action('welcome_panel', 'wp_welcome_panel');
}
add_action( 'admin_init', 'remove_dashboard_meta' );

/**
 * Add a widget to the dashboard to trigger builds
 *
 * This function is hooked into the 'wp_dashboard_setup' action below.
 */
function neuhack_add_dashboard_widgets() {

	wp_add_dashboard_widget(
                 'neuhack_staging_dashboard',         // Widget slug.
                 'View staging site',         // Title.
                 'neuhack_staging_dashboard_widget' // Display function.
	);	
	wp_add_dashboard_widget(
									'neuhack_publish_dashboard',         // Widget slug.
									'Publish your site',         // Title.
									'neuhack_publish_dashboard_widget' // Display function.
	);	
}
add_action( 'wp_dashboard_setup', 'neuhack_add_dashboard_widgets' );

/**
 * Create the function to output the contents of our Dashboard Widget.
 */
function neuhack_staging_dashboard_widget() {

	// Display whatever it is you want to show.
	echo '<p>Want to see how your changes look? Build a new staging site, and 
	check your new changes before building to production.</p>';
	echo '<p><a class="button button-primary button-hero" id="neuhack-build-staging" style="margin-right:1rem">Build Staging Site</a>';
	echo '<a class="button button-primary button-hero" href="https://youthful-stonebraker-1236a6.netlify.com/" target="_blank" rel="noopener norefferer">View Staging Site</a></p>';
	echo '<h3>Staging site status</h3>';
	echo '<img id="neuhack-status-staging" src="https://api.netlify.com/api/v1/badges/4d4cb85d-0f61-4639-b46c-4cc2c7147969/deploy-status" alt="deploy status" />';
}

/**
 * Create the function to output the contents of our Dashboard Widget.
 */
function neuhack_publish_dashboard_widget() {

	// Display whatever it is you want to show.
	echo '<p>Happy with your changes? Publish your site by clicking below.</p>';
	echo '<a class="button button-primary button-hero" id="neuhack-build-production" style="margin-right:1rem">Build Production Site</a>';
	echo '<a class="button button-primary button-hero" href="https://hackneyneu.org.uk" target="_blank" rel="noopener norefferer"">View Production Site</a></p>';
	echo '<h3>Production site status</h3>';
	echo '<img id="neuhack-status-production" src="https://api.netlify.com/api/v1/badges/dfe35096-442b-4c49-a8ff-0f63105e8737/deploy-status" alt="deploy status" />';
}

/**
 * Remove the Media section as editors don't need access
 */

add_action( 'admin_menu', 'neuhack_remove_menu_links' );
function neuhack_remove_menu_links() {
		remove_menu_page('upload.php'); //remove media
		remove_menu_page('post-new.php?post_type=sitesettings'); // remove add new settings
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
		$wp_admin_bar->remove_node( 'archive' );
		$wp_admin_bar->remove_node( 'view' );
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

/**
 * Enqueue JS for staging and production build triggers
 */

function enqueue_build_scripts($hook) {
	if ( 'index.php' != $hook ) {
			return;
	}

	wp_enqueue_script( 'neuhack_build_script', plugins_url( 'assets/js/admin.js', __FILE__ ) );
}
add_action( 'admin_enqueue_scripts', 'enqueue_build_scripts' );