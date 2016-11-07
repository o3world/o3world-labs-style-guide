/********************
 ** Global Variables
 ********************/

var mq = jQuery('#js-mediaQueryReference')[0],
    mqSupport = Modernizr.mq('only all'),
    prevDevice = '',
    device = '',
    activeClass = 'is-active',
    loadedClass = 'is-loaded',
    sections = jQuery('.section'),
    primaryNav = jQuery('#primaryNav'),
    primaryNavLinks = primaryNav.find('a'),
    hamburger = jQuery('.js-hamburger');

/********************
 ** Custom Functions
 ********************/

 function checkDevice()
 {
    //Set up event listeners tied to media queries
    mq.addEventListener('webkitTransitionEnd', checkMediaQuery, true);
    mq.addEventListener('MSTransitionEnd', checkMediaQuery, true);
    mq.addEventListener('oTransitionEnd', checkMediaQuery, true);
    mq.addEventListener('transitionend', checkMediaQuery, true);
 }

//Create an event checker function that grabs the current value of the after pseudo class of the #js-mediaquery-reference <div>
//Based on: http://seesparkbox.com/demos/css-content-check/index.html
function checkMediaQuery()
{
    if (mqSupport)
    {
        prevDevice = device;
        device = window.getComputedStyle(mq, ':after').getPropertyValue('content').replace(/"|'/g, '');
        resetStyles();
    }
    else
    {
        device = 'desktop';
    }
}

function parallexScroll()
{
  var scrollPos = jQuery(window).scrollTop();
  var header = jQuery('.header');

  if (!Modernizr.touch)
  {
    jQuery('.banner', header).css({'transform': 'translate3d(0px,' + (scrollPos *.4) + 'px, 0px)'});
  }
}

//Function to reset any styles that may have been changed on screen resize
function resetStyles()
{
    //
}

/********************
 ** Event Listeners
 ********************/

hamburger.on('click', function ()
{
    jQuery(this).toggleClass(activeClass);
    jQuery(this).children('span').toggleClass(activeClass);
    primaryNav.toggleClass(activeClass);
 });

primaryNavLinks.on('click', function ()
{
    if (device == 'mobile')
    {
        hamburger.click();
    }
})


/********************
 ** jQuery Window Load
 ********************/

jQuery(window).load(function ()
{
    jQuery('.bxslider').bxSlider({
        pagerType: 'short',
    });

    sections.waypoint(function(direction)
    {
        if (direction === 'down')
        {
            primaryNavLinks.removeClass(activeClass);
            jQuery('#primaryNav a[href="#' + jQuery(jQuery(this)[0]['element']).attr('id') + '"]').addClass(activeClass);
        }
    }, {
        offset: '17%'
    });

    sections.waypoint(function(direction)
    {
        if (direction === 'up')
        {
            primaryNavLinks.removeClass(activeClass);
            jQuery('#primaryNav a[href="#' + jQuery(jQuery(this)[0]['element']).attr('id') + '"]').addClass(activeClass);
        }
    }, {
        offset: '-30%'
    });
});

/********************
 ** jQuery Window Scroll
 ********************/

jQuery(window).scroll(function()
{
    parallexScroll();
});

/********************
 ** jQuery DOM Ready
 ********************/

jQuery(document).ready(function ()
{
    //If the browser supports media queries
    if (mqSupport)
    {
        checkDevice();
        checkMediaQuery();
    }

    if (device != 'mobile')
    {
        primaryNav.fixTo('html');
    }

    jQuery('.js-logo').addClass(loadedClass);

    primaryNavLinks.smoothScroll({
        offset: -100
    });
});

/********************
 ** apply now button
 ********************/

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var subfooterHeight = $('.subfooter').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 300);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > subfooterHeight){
        // Scroll Down
        $('.subfooter').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.subfooter').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}
