// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  fixNavBar();
};

// Get the headerbar
var headerbar = document.querySelector('.headerbar');
// Get the Company logo ie. .title
var title = document.querySelector('.title');

// Get the navbar and all of the links inside of it and put it inside navlinks variable
var navNodes = document.querySelector('.navbar-nav').childNodes;
var navlinks = [];

for (var i = 0; i < navNodes.length; i++) {
  if (navNodes[i].nodeName === 'LI')
    navlinks.push(navNodes[i].firstElementChild);
}

function removeClassFromListItems(list, className) {
  list.forEach(function(item) {
    item.classList.remove(className);
  });
}

function addClassToListItems(list, className) {
  list.forEach(function(item) {
    item.classList.add(className);
  });
}
// Get the offset position of the headerbar
var sticky = headerbar.offsetTop + 10;

function isSticky() {
  return window.pageYOffset >= sticky;
}
// Add the sticky class to the headerbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function fixNavBar() {
  if (isSticky()) {
    headerbar.classList.add('sticky');
    title.classList.add('sticky-title');
    addClassToListItems(navlinks, 'sticky-nav-link');
  } else {
    headerbar.classList.remove('sticky');
    title.classList.remove('sticky-title');
    removeClassFromListItems(navlinks, 'sticky-nav-link');
  }
}

$(document).ready(function() {
  // put jquery here
  $('.appointment').click(function() {
    $('#book').fadeIn('slow');
  });

  $('#modal-close').click(function() {
    $('#book').fadeOut('slow');
  });
});

$(document).ready(function() {
  $('.appointment2').click(function() {
    $('#book').fadeIn('slow');
  });

  $('#modal-close').click(function() {
    $('#book').fadeOut('slow');
  });
});
