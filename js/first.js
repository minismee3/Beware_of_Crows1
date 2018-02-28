var  nb = $(".navbar");
    nbs = "navbar-scrolled";
    hdr = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(nbs);
  } else {
    mn.removeClass(nbs);
  }
});
