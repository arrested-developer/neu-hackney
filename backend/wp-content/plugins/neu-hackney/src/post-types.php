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
require_once plugin_dir_path( __FILE__ ) . 'useful-resources/post-type.php';
require_once plugin_dir_path( __FILE__ ) . 'gallery/post-type.php';
require_once plugin_dir_path( __FILE__ ) . 'settings/post-type.php';

add_filter( 'allowed_block_types', 'neuhack_allowed_block_types', 10, 2 );
 
function neuhack_allowed_block_types( $allowed_blocks, $post ) {

 
	if( $post->post_type === 'page' ) {
        $allowed_blocks = array(
            'core/image',
            'core/paragraph',
            'core/heading',
            'core/list'
        );
        return $allowed_blocks;
	}
 
    return array();
 
}