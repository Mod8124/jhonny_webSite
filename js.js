//menu hambu
let burger = document.getElementById('burger'),
	 nav    = document.getElementById('main-nav');
	
	

burger.addEventListener('click', function(){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});
//load
window.addEventListener("load", function loading (){
    document.getElementById("loader") .classList.toggle("loaderDos");
});

//slide test
var slideIndex = 2;
showSlides(slideIndex);


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "grid";
  dots[slideIndex-1].className += " active";
}


