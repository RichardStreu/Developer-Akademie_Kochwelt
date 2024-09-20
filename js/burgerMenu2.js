$('a').on('click', function(e){
	e.preventDefault();
  if ( $(this).hasClass('active-menu') ) {
    $( this ).removeClass( 'active-menu' );
  } else {
    $( this ).addClass( 'active-menu' );
  }
});