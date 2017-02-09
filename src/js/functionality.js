/*******************
** DOM Ready
********************/

jQuery(document).ready(function() {

    /* Accordions */

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

    jQuery('.menu-close').click('click', function(){

        var sidebar = jQuery('.fixed-panel, .menu-close');
        var mainContent = jQuery('.container-patterns');

        sidebar.animate({ 'left' : '-250px' }, 200);
        mainContent.css({ 'margin' : '15px 0 0 0' });
    });

    jQuery('.menu-toggle--inline').click('click', function(){

        var sidebar = jQuery('.fixed-panel, .menu-close');
        var mainContent = jQuery('.container-patterns');

        sidebar.animate({ 'left' : '0' }, 200);
        mainContent.css({ 'margin' : '15px 0 0 250px' });
    });

});
