<?php
/**
 * Import all filters
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


/**
 * Register Post Type for Newsletters
 */
require_once plugin_dir_path( __FILE__ ) . 'newsletters/post-type.php';
