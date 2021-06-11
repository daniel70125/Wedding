function createBubble() {
    const section = document.querySelector('section');
    const createElement = document.createElement('span');
    var size = Math.random() * 10;

    createElement.style.width = size + 'px';
    createElement.style.height = size + 'px';
    createElement.style.left = Math.random() * innerWidth + 'px';
    section.appendChild(createElement);

    setTimeout(() => {
        createElement.remove
    }, 4000);
}

setInterval(createBubble, 100)

function on() {
    document.getElementById("overlay").style.display = "flex";
    document.getElementById("overlay").classList.remove("animate__fadeOutRight");
    document.getElementById("overlay").classList.add("animate__fadeInLeft");
    }
  function off() {
      document.getElementById("overlay").classList.remove("animate__fadeinLeft");
      document.getElementById("overlay").classList.add("animate__fadeOutRight");
    setTimeout(() => {
        document.getElementById("overlay").style.display = "none";
    }, 2000);
  }

  // Slideshow JS
  var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// End of slideshow JS