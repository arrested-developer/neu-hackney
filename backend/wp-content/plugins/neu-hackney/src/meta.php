<?php
/**
 * Import all meta setup files
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register Meta Fields for Events
 */
require_once plugin_dir_path( __FILE__ ) . 'events/meta.php';
