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
 * Register Custom Post Types
 */
require_once plugin_dir_path( __FILE__ ) . 'src/post-types.php';

/**
 * Register Filters
 */
require_once plugin_dir_path( __FILE__ ) . 'src/filters.php';
