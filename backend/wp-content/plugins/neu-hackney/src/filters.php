<?php
/**
 * Import all filters
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


/**
 * Register Filters
 */
require_once plugin_dir_path( __FILE__ ) . 'newsletters/filter.php';
require_once plugin_dir_path( __FILE__ ) . 'settings/filter.php';