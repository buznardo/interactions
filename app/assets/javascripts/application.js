// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require shorthand
//= require_tree .


$(function() {

    $('#script-generator select').on('change', function() {
      var trigger = "#" + $.trim($('#trigger').val());
      var action = $.trim($('#action').val());
      var target = "#" + $.trim($('#target').val());
      var triggerAction = $.trim($('#trigger-action').val());
      
      var script = trigger + " should " + action + " " + target + " on " + triggerAction;
      $("#script").text(script);
      
      ShortHand.parseScripts();
    });
    
    
    window.Shorthand.Actions.focus = function(origin, target) {
        target = this.findTarget(target, arguments); // this is required for the magic target selectors to work, like 'self', 'next', and 'previous'
        // After that line, you can do whatever you like here with the target DOM element.
        target.focus();
    }
    
});