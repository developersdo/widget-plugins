<?php
/*
Plugin Name: devdo-members
Description: Plugin de los miembros de la comunidad de developers Dominicanos
Version: 0.1
Author: Carlos V&aacute;squez Polanco
Author URI: http://www.linkedin.com/in/carlosvasquez
*/

function scripts() {
    wp_enqueue_style(
                'devdom_css',
                path_join(WP_PLUGIN_URL, basename( dirname( __FILE__ ) ).'/devdomembers-styles.css'));

  wp_enqueue_script(
		'devdom_js',
		path_join(WP_PLUGIN_URL, basename( dirname( __FILE__ ) ).'/devdomembers-script.js'));
} 

class devdomembers extends WP_Widget{
    
    function devdomembers(){
        $widget_ops = array('classname' => 'devdomembers', 'description' => 'devdom' );
        $this->WP_Widget('devdomembers', 'devdom', $widget_ops);
    }

    function widget($args, $instance) {
        extract($args, EXTR_SKIP);
 
     }
}

add_action('widgets_init', create_function('', 'return register_widget("devdomembers");'));
add_action('wp_enqueue_scripts', 'scripts');
?>