let slideIndex = 1;
let direction = "next"; 
showSlides(slideIndex);


function plusSlides(n) {
  direction = n > 0 ? "next" : "prev";  // detect direction
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  direction = "next";
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("slide-next", "slide-prev"); // reset animations
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }


  slides[slideIndex - 1].style.display = "block";

  
  if (direction === "next") {
    slides[slideIndex - 1].classList.add("slide-next");
  } else {
    slides[slideIndex - 1].classList.add("slide-prev");
  }

  dots[slideIndex - 1].className += " active";
}
