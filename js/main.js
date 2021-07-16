

// function plusSlide(n){
//     showSlide(slideIndex+=n)
// }
// function currentSlide(n){
//     showSlide(slideIndex = n);
// }
// function showSlide(n){
//     var i;
//     var slides = document.getElementsByClassName("myslide");
//     var indicators = document.getElementsByClassName("indicator");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < indicators.length; i++) {
//         indicators[i].className = indicators[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     indicators[slideIndex-1].className += " active";
// }




// Navigation Bar Buttons
var searchBtn = document.getElementById("search-btn");

var searchInput = document.getElementById("search-input");
function searchInputFunction(){
  if(searchInput.style.display === "none"){
    searchInput.style.display = "block";
  }else{
    searchInput.style.display = "none";
  }
}

var userLoginRegisterBtn = document.getElementById("user-login");
var userLoginRegisterModel = document.getElementById("signin-register-model");
userLoginRegisterBtn.addEventListener('click', function(){
  userLoginRegisterModel.style.display = 'block';
})
var userModelHideBtn = document.getElementById("user-model-hide-btn");
userModelHideBtn.addEventListener('click', function(){
  userLoginRegisterModel.style.display = 'none';
})

// Hero Section(Automatic Slider)
let slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("myslide");
  var indicators = document.getElementsByClassName("indicator");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < indicators.length; i++) {
    indicators[i].className = indicators[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  indicators[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

// Portfolio Carousel Filtering
var list = document.getElementsByClassName("list");
var carousel = document.getElementsByClassName("carousel");

for(var k = 1; k < carousel.length; k++){
  carousel[k].classList.add('hide');
}
for(var i = 0; i< list.length; i++){
  list[i].addEventListener('click', function(){
    for(var j = 0; j < list.length; j++){
      list[j].classList.remove('active');
    }
    this.classList.add('active');
    let dataFilter = this.getAttribute('data-filter');

    for(var k = 0; k < carousel.length; k++){
      carousel[k].classList.add('hide');

      if(carousel[k].getAttribute('data-item') == dataFilter){
        carousel[k].classList.remove('hide');
      }
    }
  });
}

