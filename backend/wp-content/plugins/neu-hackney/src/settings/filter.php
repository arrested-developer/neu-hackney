<?php

/**
 * Add filter to prevent settings post being deleted
 */

 // Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_filter( 'post_row_actions', 'remove_settings_row_actions', 10, 1 );
function remove_settings_row_actions( $actions )
{
		if( get_post_type() === 'sitesettings' && !current_user_can('administrator') ) {
				unset( $actions['trash'] );
				unset( $actions['inline hide-if-no-js'] );
		}
		return $actions;
}