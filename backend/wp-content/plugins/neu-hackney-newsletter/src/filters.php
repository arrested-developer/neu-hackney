<?php
/**
 * Import all filters
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


/**
 * Register Filters for Newsletters
 */
require_once plugin_dir_path( __FILE__ ) . 'newsletters/filter.php';
