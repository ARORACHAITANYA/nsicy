var toggler = document.querySelector(".toggler");

var nav = document.querySelector(".navigation");

toggler.addEventListener("click", function(){
    nav.classList.toggle("isvisible");
});

window.addEventListener("resize", function(){
    if(nav.classList.contains("isvisible") && window.innerWidth > 960){
        nav.classList.remove("isvisible");
    }
});
//animation from hamburger to cross
var clickToggle = document.querySelector(".toggler");
var addChange = document.querySelector(".hamburger");
clickToggle.addEventListener("click", function(){
    addChange.classList.toggle("change");
});
//On scrolling down 150px the button appears
window.onscroll = function() {scrollFunction()};
function scrollFunction(){
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
        document.getElementById("moveToTop").style.display = "block";
    } else{
        document.getElementById("moveToTop").style.display = "none";
    }
}
//On clicking go to top of the page
function moveToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//slideshow
var slideIndex = 0;
showSlides();
//function to automate change of slides
function showSlides(){
  var i;
  var slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++){
      slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length){slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout (showSlides,10000);
}
//function to change slide manually by clicking pevious or next button
function plusSlides(n){
  changeSlides(slideIndex += n);
}
function changeSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length){slideIndex = 1}    
  if (n < 1){slideIndex = slides.length}
  for (i = 0; i < slides.length; i++){
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";
}
//folder expansion
function expand(x){
    x.classList.toggle("col-12");
    x.classList.toggle("expand");
};
//tab function
function openTab(evt, sem){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(sem).style.display = "block";
    document.getElementById(sem).style.backgroundColor = "skyblue";
    evt.currentTarget.className += " active";
}
