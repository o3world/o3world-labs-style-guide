/*******************
** DOM Ready
********************/

jQuery(document).ready(function() {

    /*********** Menus ***********/

    $('#burger').on('click', function() {
		    $('#burger, .container-nav, .logo').toggleClass('active');
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
        controls: true,
        pager: false
    });

});
