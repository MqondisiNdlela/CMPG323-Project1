var slideIndex = 1;
console.log("working");

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  
  
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
 
  var slides = [document.getElementById("briefDescr"),document.getElementById("briefDescr"),document.getElementById("myLanguages"), document.getElementById("myEducation"),document.getElementById("mySkills"), document.getElementById("myHobbies")];
    console.log(slides.length);
    
  for ( var i = 0; i < slides.length; i++) {
  slides[slideIndex-1].style.display = "block";
  }
  if (n >= slides.length){
      slideIndex = 1;
    }    
  if (n < 1){
      slideIndex = slides.length;
    }
  for ( var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex].style.display = "block";  

}