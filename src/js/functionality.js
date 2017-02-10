/*******************
** DOM Ready
********************/

jQuery(document).ready(function() {

    /*********** Menus ***********/

    var menuHide = function(){
        var sidebar = jQuery('.fixed-panel, .menu-close');
        sidebar.animate({ 'left' : '-100%' }, 200);
    }

    var menuShow = function(){
        var sidebar = jQuery('.fixed-panel, .menu-close');
        sidebar.animate({ 'left' : '0' }, 200);
    }

    /* Hide push menu on click */
    jQuery('.menu-close').click('click', function(){
        menuHide();
    });

    /* Show push menu on click */
    jQuery('.menu-toggle--inline').click('click', function(){
        menuShow();
    });

    var viewport = jQuery(window);
    var header = jQuery('.site-header');

    /* Hide menu/header based on width */
    viewport.resize(function(){
        if (jQuery(this).width() > 768) {
            menuShow();
            header.slideUp();
        } else {
            header.slideDown();
        }
    });

    /* Slide header up/down based on scrolling up/down */

    var previousScroll = 0;
    var headerOrgOffset = $('.top-nav').height();

    $('.site-header').height(headerOrgOffset);

    viewport.scroll(function(){

        var currentScroll = $(this).scrollTop();
        if (currentScroll > headerOrgOffset) {
            if (currentScroll > previousScroll) {
                header.slideUp();
            } else {
                if (jQuery(this).width() < 768) {
                    header.slideDown();
                }
            }
        }

        previousScroll = currentScroll;

    });

    /*********** Accordions ***********/

    jQuery('.accordion__toggle').on('click', function(){

        var thisToggle = jQuery(this);

        /* Expand or collapse panel */
        thisToggle.toggleClass('is-open');
        jQuery(this).next('.accordion__content').slideToggle(250, function() {
            jQuery(this).attr('aria-hidden', 'false');
        });

        /* Hide other panels */
        jQuery('.accordion__toggle').not( thisToggle ).removeClass('is-open');
        jQuery('.accordion__content').not( jQuery(this).next('.accordion__content') ).slideUp(250, function() {
            jQuery(this).attr('aria-hidden', 'true');
        });

    });

    /*********** Sliders ***********/

    jQuery('.bxslider').bxSlider({
        controls: true
    });

});
