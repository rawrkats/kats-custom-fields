<?php
/*
Plugin Name: Kat's Custom Fields
Description: Add Media Button next to custom fields that contain keywords like pdf,file,url,icon - inserts selected media's URL into custom field value
Plugin URI: http://about.me/katsnell
Author: Kat Snell
Author URI: http://about.me/katsnell
Version: 1.0
License: GPL2
*/
$kcf_version = '1.0';
/*

    Copyright (C) Year  Kat Snell  Email

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/


function kats_custom_fields_assets() {
  wp_enqueue_script( 'kats-custom-fields', plugins_url() .'/kats-custom-fields/kats-custom-fields.js', 'jquery', $kcf_version, false );
}

add_action('admin_enqueue_scripts','kats_custom_fields_assets');
