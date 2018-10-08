window.onscroll = function() {myFunction()};

var header = document.getElementById("main_navbar");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("fixed_nav");
  } else {
    header.classList.remove("fixed_nav");
  }
}
