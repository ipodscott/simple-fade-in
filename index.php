<?php
/**
 * Plugin Name: Simple FadeIn Plugin
 * Description: A simple Vanilla JS plugin to add fadein effects on scroll. Add 'fade-in-element' to an element to have it fade in on scroll.
 * Version: 1.0
 * Author: Scott Saunders
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

// Exit if accessed directly
if( !defined( 'ABSPATH' ) ) exit;

class WP_FadeIn_Plugin {
	public function __construct() {
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
	}

	public function enqueue_scripts() {
		// Enqueue your JavaScript
		wp_enqueue_script( 'custom-scripts', plugin_dir_url( __FILE__ ) . 'fade-script.js', '1.0', true );

		// Pass ajax_url to script.js
		wp_localize_script( 'custom-scripts', 'frontendajax', array( 'ajaxurl' => admin_url( 'admin-ajax.php' ) ));
	}
}

new WP_FadeIn_Plugin();