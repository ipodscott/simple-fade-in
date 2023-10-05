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
		wp_enqueue_script( 'fade-scripts', plugin_dir_url( __FILE__ ) . 'fade-script.js', array(), '1.0', true );

		// Enqueue your CSS
		wp_enqueue_style( 'fade-styles', plugin_dir_url( __FILE__ ) . 'fade-style.css', array(), wp_get_theme()->get( 'Version' ) );

	}
}

new WP_FadeIn_Plugin();
