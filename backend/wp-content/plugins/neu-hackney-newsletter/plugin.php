<?php
/**
 * Plugin Name: neu-hackney-newsletter — CGB Gutenberg Block Plugin
 * Plugin URI: https://github.com/ahmadawais/create-guten-block/
 * Description: neu-hackney-newsletter — is a Gutenberg plugin created via create-guten-block.
 * Author: mrahmadawais, maedahbatool
 * Author URI: https://AhmadAwais.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
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
 * Register Custom Post Type
 */
require_once plugin_dir_path( __FILE__ ) . 'src/post-types.php';

/**
 * Register Filters
 */
require_once plugin_dir_path( __FILE__ ) . 'src/filters.php';
