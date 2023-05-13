//modules tab

var basicSign = document.getElementById('sign1');
var intermSign = document.getElementById('sign2');
var advSign = document.getElementById('sign3');
//BASIC
function hover(basicSign) {
  basicSign.setAttribute('src', 'moduleImg/basicSignGlow.png');
}

function unhover(basicSign) {
  basicSign.setAttribute('src', 'moduleImg/basicSign.png');
}

//INTERMEDIATE
function hover2(intermSign) {
  intermSign.setAttribute('src', 'moduleImg/intermSignGlow.png');
}

function unhover2(intermSign) {
  intermSign.setAttribute('src', 'moduleImg/intermSign.png');
}

//ADVANCED
function hover3(advSign) {
  advSign.setAttribute('src', 'moduleImg/advSignGlow.png');
}

function unhover3(advSign) {
  advSign.setAttribute('src', 'moduleImg/advSign.png');
}


//BASIC MODULES
function basicHoverSound() {
  var audio = new Audio('audios/basicHover.mp3');
  audio.play();
}

function jeepHonk() {
  var audio = new Audio('audios/honk.mp3');
  audio.play();
}



  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function hoverSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  
  function showSlides(n) {
   
    let slides = document.getElementsByClassName("slider_img");
    let dots = document.getElementsByClassName("dot");



    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
  
    let i;
  
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

  }

