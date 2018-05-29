(function ($, Drupal) {
  'use strict';
  Drupal.behaviors.myBehavoir = {
    attach: function (context, settings) {
    $('#accordion').accordion();
    }
  };
})(jQuery, Drupal);
