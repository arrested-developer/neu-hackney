<?php
/**
 * Register meta fields for the events post type
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


// note, we can use 'object_subtype' => 'events' to restrict these fields
// to the events post type
function neuhack_team_members_register_meta() {
  register_meta( 'post', 'neuhack_team_member_name', array(
      'show_in_rest' => true,
      'single' => true,
      'type' => 'string',
  ) );
}
add_action( 'init', 'neuhack_team_members_register_meta' );
