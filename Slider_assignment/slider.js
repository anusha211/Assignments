let slideIndex = 1;
let direction = "next"; 
let autoSlideInterval;

showSlides(slideIndex);
startAutoSlide();  // start autoplay

function plusSlides(n) {
  direction = n > 0 ? "next" : "prev";  // detect direction
  showSlides(slideIndex += n);
  restartAutoSlide();
}

function currentSlide(n) {
  direction = "next";
  showSlides(slideIndex = n);
  restartAutoSlide();
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


function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    direction = "next";        
    showSlides(++slideIndex);
  }, 3000); 
}

function restartAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}


// === Drag/Swipe functionality ===
const slideshow = document.querySelector(".slideshow-container");
let startX = 0;
let endX = 0;

slideshow.addEventListener("mousedown", dragStart);
slideshow.addEventListener("touchstart", dragStart);

slideshow.addEventListener("mouseup", dragEnd);
slideshow.addEventListener("mouseleave", dragEnd);
slideshow.addEventListener("touchend", dragEnd);

function dragStart(e) {
  startX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
}

function dragEnd(e) {
  endX = e.type === "touchend" ? e.changedTouches[0].clientX : e.clientX;
  handleSwipe();
}

function handleSwipe() {
  let diff = endX - startX;
  if (Math.abs(diff) > 50) { // minimum swipe distance
    if (diff > 0) {
      plusSlides(-1); // swipe right → previous
    } else {
      plusSlides(1);  // swipe left → next
    }
  }
}