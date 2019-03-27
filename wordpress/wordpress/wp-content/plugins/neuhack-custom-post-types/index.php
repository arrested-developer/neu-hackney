<?php

/*
Plugin Name: NEU Hackney Custom Post Types
Description: Defines custom post types for NEU Hackney Wordpress Site
Version: 1.0
Author: Michael Watts
Author URI: https://michaelwatts.co
License: MIT
*/

// add a flag to flush rewrite rules when plugin is activated
register_activation_hook( __FILE__, 'neuhack_activate' );

function neuhack_activate() {
    if ( ! get_option( 'neuhack_flush_rewrite_rules_flag' ) ) {
        add_option( 'neuhack_flush_rewrite_rules_flag', true );
    }
}

// Define the categories
function neuhack_register_categories() {
	wp_insert_term(
		'Leadership',
		'category',
		array(
		  'description'	=> 'School leaders, heads, deputies',
		  'slug' 		=> 'leadership'
		)
  );
  wp_insert_term(
		'Teachers',
		'category',
		array(
		  'description'	=> 'Teachers',
		  'slug' 		=> 'teachers'
		)
  );
  wp_insert_term(
		'Support Staff',
		'category',
		array(
		  'description'	=> 'Support staff in schools, colleges, etc.',
		  'slug' 		=> 'supportstaff'
		)
  );
}
add_action( 'after_setup_theme', 'neuhack_register_categories' );

// Register Event Custom Post Type
function neuhack_custom_post_events() {

	$labels = array(
		'name'                  => 'Events',
		'singular_name'         => 'Event',
		'menu_name'             => 'Events',
		'name_admin_bar'        => 'Event',
		'archives'              => 'Event Archives',
		'attributes'            => 'Item Attributes',
		'parent_item_colon'     => 'Parent Item:',
		'all_items'             => 'All Items',
		'add_new_item'          => 'Add New Event',
		'add_new'               => 'Add New',
		'new_item'              => 'New Item',
		'edit_item'             => 'Edit Item',
		'update_item'           => 'Update Item',
		'view_item'             => 'View Item',
		'view_items'            => 'View Items',
		'search_items'          => 'Search Item',
		'not_found'             => 'Not found',
		'not_found_in_trash'    => 'Not found in Trash',
		'featured_image'        => 'Featured Image',
		'set_featured_image'    => 'Set featured image',
		'remove_featured_image' => 'Remove featured image',
		'use_featured_image'    => 'Use as featured image',
		'insert_into_item'      => 'Insert into item',
		'uploaded_to_this_item' => 'Uploaded to this item',
		'items_list'            => 'Items list',
		'items_list_navigation' => 'Items list navigation',
		'filter_items_list'     => 'Filter items list',
	);
	$rewrite = array(
		'slug'                  => 'events',
		'with_front'            => true,
		'pages'                 => true,
		'feeds'                 => true,
  );
  $template = array(
    array('core/image'),
  );
	$args = array(
		'label'                 => 'Event',
		'description'           => 'Events',
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor' ),
		'taxonomies'            => array( 'category', 'post_tag' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'rewrite'               => $rewrite,
		'capability_type'       => 'post',
		'show_in_rest'          => true,
    'rest_base'             => 'events',
    'template'              => $template,
    'template_lock'         => 'all',
	);
	register_post_type( 'events', $args );

}
// register post types with priority 10
add_action( 'init', 'neuhack_custom_post_events', 10 );

// add custom fields for events

if( function_exists('acf_add_local_field_group') ):

  acf_add_local_field_group(array(
    'key' => 'group_5c9aac9c1322c',
    'title' => 'Event Options',
    'fields' => array(
      array(
        'key' => 'field_5c9aaca3d315c',
        'label' => 'Date and Time',
        'name' => 'date_and_time',
        'type' => 'date_time_picker',
        'instructions' => '',
        'required' => 1,
        'conditional_logic' => 0,
        'wrapper' => array(
          'width' => '',
          'class' => '',
          'id' => '',
        ),
        'display_format' => 'F j, Y g:i a',
        'return_format' => 'Y-m-d H:i:s',
        'first_day' => 1,
      ),
      array(
        'key' => 'field_5c9aacb8d315d',
        'label' => 'Event Type',
        'name' => 'event_type',
        'type' => 'select',
        'instructions' => '',
        'required' => 1,
        'conditional_logic' => 0,
        'wrapper' => array(
          'width' => '',
          'class' => '',
          'id' => '',
        ),
        'choices' => array(
          'General Meeting' => 'General Meeting',
          'NEU Event' => 'NEU Event',
          'Other' => 'Other',
        ),
        'default_value' => array(
        ),
        'allow_null' => 0,
        'multiple' => 0,
        'ui' => 0,
        'return_format' => 'value',
        'ajax' => 0,
        'placeholder' => '',
      ),
      array(
        'key' => 'field_5c9abd315522d',
        'label' => 'Location',
        'name' => 'location',
        'type' => 'textarea',
        'instructions' => 'Details of address or location for the event',
        'required' => 1,
        'conditional_logic' => 0,
        'wrapper' => array(
          'width' => '',
          'class' => '',
          'id' => '',
        ),
        'default_value' => '',
        'placeholder' => '',
        'maxlength' => '',
        'rows' => '',
        'new_lines' => '',
      ),
      array(
        'key' => 'field_5c9aadc3e466a',
        'label' => 'Upload Agenda',
        'name' => 'agenda',
        'type' => 'file',
        'instructions' => 'Upload the full flyer and agenda',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
          'width' => '',
          'class' => '',
          'id' => '',
        ),
        'return_format' => 'url',
        'library' => 'uploadedTo',
        'min_size' => '',
        'max_size' => 1000,
        'mime_types' => 'pdf, jpg, jpeg',
      ),
    ),
    'location' => array(
      array(
        array(
          'param' => 'post_type',
          'operator' => '==',
          'value' => 'events',
        ),
      ),
    ),
    'menu_order' => 0,
    'position' => 'normal',
    'style' => 'seamless',
    'label_placement' => 'top',
    'instruction_placement' => 'label',
    'hide_on_screen' => '',
    'active' => true,
    'description' => '',
  ));
  
  endif;

// Register Campaign Custom Post Type
function neuhack_custom_post_campaign() {

	$labels = array(
		'name'                  => 'Campaigns',
		'singular_name'         => 'Campaign',
		'menu_name'             => 'Campaigns',
		'name_admin_bar'        => 'Campaign',
		'archives'              => 'Campaign Archives',
		'attributes'            => 'Item Attributes',
		'parent_item_colon'     => 'Parent Item:',
		'all_items'             => 'All Items',
		'add_new_item'          => 'Add New Campaign',
		'add_new'               => 'Add New',
		'new_item'              => 'New Item',
		'edit_item'             => 'Edit Item',
		'update_item'           => 'Update Item',
		'view_item'             => 'View Item',
		'view_items'            => 'View Items',
		'search_items'          => 'Search Item',
		'not_found'             => 'Not found',
		'not_found_in_trash'    => 'Not found in Trash',
		'featured_image'        => 'Featured Image',
		'set_featured_image'    => 'Set featured image',
		'remove_featured_image' => 'Remove featured image',
		'use_featured_image'    => 'Use as featured image',
		'insert_into_item'      => 'Insert into item',
		'uploaded_to_this_item' => 'Uploaded to this item',
		'items_list'            => 'Items list',
		'items_list_navigation' => 'Items list navigation',
		'filter_items_list'     => 'Filter items list',
	);
	$rewrite = array(
		'slug'                  => 'campaign',
		'with_front'            => true,
		'pages'                 => true,
		'feeds'                 => true,
  );
  $template = [
    ['core/paragraph', [
      'placeholder' => 'Type a short description',
    ] ],
    ['core/image', [] ],
    ['core/paragraph', [
      'placeholder' =>  'Type a paragraph about the campaign'
    ]],
    ];
	$args = array(
		'label'                 => 'Campaign',
		'description'           => 'Campaigns',
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor' ),
		'taxonomies'            => array( 'category', 'post_tag' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'rewrite'               => $rewrite,
		'capability_type'       => 'post',
		'show_in_rest'          => true,
    'rest_base'             => 'campaign',
    'template'              => $template,
    'template_lock'         => 'all',
	);
	register_post_type( 'campaign', $args );

}
// register post types with priority 10
add_action( 'init', 'neuhack_custom_post_campaign', 10 );

// Register Officer Custom Post Type
function neuhack_custom_post_officer() {

	$labels = array(
		'name'                  => 'Officers',
		'singular_name'         => 'Officer',
		'menu_name'             => 'Officers',
		'name_admin_bar'        => 'Officer',
		'archives'              => 'Officer Archives',
		'attributes'            => 'Item Attributes',
		'parent_item_colon'     => 'Parent Item:',
		'all_items'             => 'All Items',
		'add_new_item'          => 'Add New Officer',
		'add_new'               => 'Add New',
		'new_item'              => 'New Item',
		'edit_item'             => 'Edit Item',
		'update_item'           => 'Update Item',
		'view_item'             => 'View Item',
		'view_items'            => 'View Items',
		'search_items'          => 'Search Item',
		'not_found'             => 'Not found',
		'not_found_in_trash'    => 'Not found in Trash',
		'featured_image'        => 'Featured Image',
		'set_featured_image'    => 'Set featured image',
		'remove_featured_image' => 'Remove featured image',
		'use_featured_image'    => 'Use as featured image',
		'insert_into_item'      => 'Insert into item',
		'uploaded_to_this_item' => 'Uploaded to this item',
		'items_list'            => 'Items list',
		'items_list_navigation' => 'Items list navigation',
		'filter_items_list'     => 'Filter items list',
  );
  $template = [
    ['core/image'],
  ];
	$rewrite = array(
		'slug'                  => 'officers',
		'with_front'            => true,
		'pages'                 => true,
		'feeds'                 => true,
	);
	$args = array(
		'label'                 => 'Officer',
		'description'           => 'Officers',
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor' ),
		'taxonomies'            => array( 'category', 'post_tag' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'rewrite'               => $rewrite,
		'capability_type'       => 'post',
		'show_in_rest'          => true,
    'rest_base'             => 'officers',
    'template'              => $template,
    'template_lock'         => 'all',
	);
	register_post_type( 'officer', $args );

}
// register post types with priority 10
add_action( 'init', 'neuhack_custom_post_officer', 10 );

// add custom fields for officer post type

if( function_exists('acf_add_local_field_group') ):

  acf_add_local_field_group(array(
    'key' => 'group_5c9b95a9483c4',
    'title' => 'Officer Details',
    'fields' => array(
      array(
        'key' => 'field_5c9b95ae33823',
        'label' => 'Name',
        'name' => 'officer_name',
        'type' => 'text',
        'instructions' => '',
        'required' => 1,
        'conditional_logic' => 0,
        'wrapper' => array(
          'width' => '',
          'class' => '',
          'id' => '',
        ),
        'default_value' => '',
        'placeholder' => '',
        'prepend' => '',
        'append' => '',
        'maxlength' => '',
      ),
      array(
        'key' => 'field_5c9b95c133824',
        'label' => 'Email',
        'name' => 'officer_email',
        'type' => 'email',
        'instructions' => '',
        'required' => 1,
        'conditional_logic' => 0,
        'wrapper' => array(
          'width' => '',
          'class' => '',
          'id' => '',
        ),
        'default_value' => '',
        'placeholder' => '',
        'prepend' => '',
        'append' => '',
      ),
      array(
        'key' => 'field_5c9b95dd33825',
        'label' => 'Position',
        'name' => 'officer_position',
        'type' => 'select',
        'instructions' => '',
        'required' => 1,
        'conditional_logic' => 0,
        'wrapper' => array(
          'width' => '',
          'class' => '',
          'id' => '',
        ),
        'choices' => array(
          'Divisional Secretary' => 'Divisional Secretary',
          'Vice President' => 'Vice President',
          'Associate Secretary' => 'Associate Secretary',
          'Treasurer' => 'Treasurer',
          'Membership Secretary' => 'Membership Secretary',
          'Health and Safety Officer' => 'Health and Safety Officer',
          'Press and Publicity Officer' => 'Press and Publicity Officer',
          'Equal Opportunities Officer' => 'Equal Opportunities Officer',
          'New Professionals Officer' => 'New Professionals Officer',
          'International Solidarity Officer' => 'International Solidarity Officer',
          'Independent Sector Officer' => 'Independent Sector Officer',
          'Post 16 Officer' => 'Post 16 Officer',
          'Support Staff Officer' => 'Support Staff Officer',
          'Committee Member' => 'Committee Member',
        ),
        'default_value' => array(
        ),
        'allow_null' => 0,
        'multiple' => 0,
        'ui' => 0,
        'return_format' => 'value',
        'ajax' => 0,
        'placeholder' => '',
      ),
      array(
        'key' => 'field_5c9b9a4accb07',
        'label' => 'Show on Page',
        'name' => 'show_on_page',
        'type' => 'taxonomy',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
          'width' => '',
          'class' => '',
          'id' => '',
        ),
        'taxonomy' => 'category',
        'field_type' => 'multi_select',
        'allow_null' => 0,
        'add_term' => 1,
        'save_terms' => 0,
        'load_terms' => 0,
        'return_format' => 'id',
        'multiple' => 0,
      ),
    ),
    'location' => array(
      array(
        array(
          'param' => 'post_type',
          'operator' => '==',
          'value' => 'officer',
        ),
      ),
    ),
    'menu_order' => 0,
    'position' => 'normal',
    'style' => 'default',
    'label_placement' => 'top',
    'instruction_placement' => 'label',
    'hide_on_screen' => '',
    'active' => true,
    'description' => '',
  ));

endif;

// flush rewrite rules only if required, with a later priority
add_action( 'init', 'neuhack_flush_rewrite_rules_maybe', 20 );
/**
 * Flush rewrite rules if the previously added flag exists,
 * and then remove the flag.
 */
function neuhack_flush_rewrite_rules_maybe() {
    if ( get_option( 'neuhack_flush_rewrite_rules_flag' ) ) {
        flush_rewrite_rules();
        delete_option( 'neuhack_flush_rewrite_rules_flag' );
    }
}