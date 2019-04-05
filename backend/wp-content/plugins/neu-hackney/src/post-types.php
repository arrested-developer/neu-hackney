<?php
/**
 * Import all filters
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Add a flag to flush permalink rewrite rules when plugin
 * is activated
 */
register_activation_hook( __FILE__, 'neu_hackney_activate' );

function neu_hackney_activate() {
    if ( ! get_option( 'neu_hackney_flush_rewrite_rules_flag' ) ) {
        add_option( 'neu_hackney_flush_rewrite_rules_flag', true );
    }
}

add_action( 'init', 'neu_hackney_flush_rewrite_rules_maybe', 20 );
/**
 * Flush rewrite rules if the previously added flag exists,
 * and then remove the flag.
 */
function neu_hackney_flush_rewrite_rules_maybe() {
    if ( get_option( 'neu_hackney_flush_rewrite_rules_flag' ) ) {
        flush_rewrite_rules();
        delete_option( 'neu_hackney_flush_rewrite_rules_flag' );
    }
}

/**
 * Register Post Types
 */
require_once plugin_dir_path( __FILE__ ) . 'newsletters/post-type.php';
require_once plugin_dir_path( __FILE__ ) . 'events/post-type.php';
require_once plugin_dir_path( __FILE__ ) . 'campaigns/post-type.php';
require_once plugin_dir_path( __FILE__ ) . 'team-members/post-type.php';
