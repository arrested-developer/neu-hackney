<?php
/**
 * Post Save Filter
 *
 * Programmatically set the post title at save time
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function set_newsletter_title( $data , $postarr ) {
  if($data['post_type'] == 'newsletters') {
		$data['post_title'] = date("F Y", strtotime($data['post_date']));
  }
  return $data;
}
add_filter( 'wp_insert_post_data' , 'set_newsletter_title' , '500', 2 );
