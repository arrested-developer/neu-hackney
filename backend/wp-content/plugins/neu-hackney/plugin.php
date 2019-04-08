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


