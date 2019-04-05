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
