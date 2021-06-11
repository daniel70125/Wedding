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

// Countdown Timer

// Set the date we're counting down to
var countDownDate = new Date("June 26, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("cd-days").innerHTML = `<p>${days}</p> Days`;
  document.getElementById("cd-hours").innerHTML = `<p>${hours}</p> Hours`;
  document.getElementById("cd-minutes").innerHTML = `<p>${minutes}</p> Minutes`;
  document.getElementById("cd-seconds").innerHTML = `<p>${seconds}</p> Seconds`;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);