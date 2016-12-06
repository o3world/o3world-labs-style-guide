
//
// Window Load
// --------------------------------------------------

jQuery( window ).load( function( ) {

} );


jQuery( window ).bind( "create.xrayhtml", function( ) {

  jQuery( '.source-panel' ).find( 'code' ).addClass( 'language-markup' );

  Prism.highlightAll( );
} );



//
// DOM Ready
// --------------------------------------------------

jQuery( document ).ready( function( ) {

    // reference to content sections
    var contentSections = jQuery( '[data-content-region=true]' );

    // reference to primary nav links
    var contentNavigation = jQuery( 'nav a' );

    // initialize Waypoint functionality tracking on content sections
    contentSections.waypoint( {
      handler: function( direction ) {

        if ( direction =="up" ) {

          // reference to current content section
          var activeSection = jQuery( this );

          // reference to current primary nav link
          var activeLink = jQuery( 'nav a[href="#' + activeSection.attr( 'id' ) + '"]' );

          // remove any previous classes
          contentNavigation.removeClass( 'is-active' );

          // apply new active class
          activeLink.addClass( 'is-active' );
        }
      },
      offset: -2
    } );

    contentSections.waypoint( {
      handler: function( direction ) {

        if ( direction =="down" ) {

          // reference to current content section
          var activeSection = jQuery( this );

          // reference to current primary nav link
          var activeLink = jQuery( 'nav a[href="#' + activeSection.attr( 'id' ) + '"]' );

          // remove any previous classes
          contentNavigation.removeClass( 'is-active' );

          // apply new active class
          activeLink.addClass( 'is-active' );
        }
      },
      offset: 2
    } );

  // click function for individual primary nav links
  jQuery( 'nav a' ).on( 'click', function( e ) {

    e.preventDefault( );

    var navTop = jQuery( jQuery( this ).attr( 'href' ) ).offset( ).top;

    jQuery( 'html, body' ).animate( {
      scrollTop: navTop
    }, 500 );
  } );

} );
