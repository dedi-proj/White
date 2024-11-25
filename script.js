var pause = false;

// var move = true;
document.addEventListener('DOMContentLoaded', function() {
  move();clockTick();
}, true);


/**************************************/
/************* first loading *************/
/**************************************/
function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 2000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
  setVisible('.mask', false);
  setVisible('.mask #loader', false);
});

/**************************************/
/************* NAV SCROLL *************/
/**************************************/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    
    document.getElementById("navbar").style.padding = "15px 10px";
    document.getElementById("logo").style.fontSize = "25px";
    
  } else {
    document.getElementById("navbar").style.padding = "25px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}
/**************************************/
/************* Dates  *************/
/**************************************/
function clockTick()    {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  currentTime = new Date();
  month = months[currentTime.getMonth()];
  day = currentTime.getDate();
  year = currentTime.getFullYear();
 // alert("hi");
 document.getElementById('date1').innerHTML= day+ " " + month + " " + year;
}

// setInterval(function(){clockTick();}, 3600);
/**************************************/
/************* SLIDE SHOW *************/
/**************************************/

let slideIndex = 1;
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
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");}
  slides[slideIndex-1].style.display = "inline-block";
  dots[slideIndex-1].className += " active";
}

let slideIndex1 = 0;
showSlides1();

function showSlides1() {
  let i;
  let slides = document.getElementsByClassName("result-container");  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex1++;
  if (slideIndex1 > slides.length) {slideIndex1 = 1}
  slides[slideIndex1-1].style.display = "block";    
  setTimeout(showSlides1, 3000); // Change image every 2 seconds
}
/**************************************/
/************* load bar *************/
/**************************************/

// function move() {
//   var i=0;
//   if (pause == false) {
//     i = 1;
//     var elem = document.getElementById("myBar");
//     var width = 1;
//     var id = setInterval(frame, 25);
//     function frame() {
//       if (width == 100) {
//         clearInterval(id);
//         elem.style.width = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//       }
//     }
//   }
  
// }

function move() {
  // var w=0;
  if (pause == false) {
    var width=document.getElementById("myBar").offsetWidth;
    var elem = document.getElementById("myBar");
    var id = setInterval(function() 
    {
            if(width == 100) {
            clearInterval(id);
            // alert('done');
        } else
          width++;
         elem.style.width = width + "%";

    }, 100);
}};



setInterval(function() {
  if (pause === false) {
    slideIndex++;    
    showSlides(slideIndex);    
    // width++;
    // frame(width);
  }  }, 2000);

  var hover_ele = document.querySelector('.colum');

  //pauses the intervall
  hover_ele.addEventListener('mouseover', function() {
    pause = true;
  })
  
  //stops the intervall
  hover_ele.addEventListener('mouseout', function() {
    pause = false;
  })



  
/**************************************/
/************* slide image bawah *************/
/**************************************/

const carouselItems = document.querySelectorAll(".carousel_item"); 
let i = 1;

setInterval(() => {
// Accessing All the carousel Items
 Array.from(carouselItems).forEach((item,index) => {

   if(i < carouselItems.length){
    item.style.transform = `translateX(-${i*75}%)`
   }
  })


  if(i < carouselItems.length){
    i++;
  }
  else{
    i=0;
  }
},1500)

/**************************************/
/************* slide image bank *************/
/**************************************/

const carouselBank = document.querySelectorAll(".item-bank"); 
let x = 1;

setInterval(() => {
// Accessing All the carousel Items
 Array.from(carouselBank).forEach((item,index) => {

   if(x < carouselBank.length){
    item.style.transform = `translateX(-${x*25}%)`
   }
  })


  if(x < carouselBank.length){
    x++;
  }
  else{
    x=0;
  }
},2000)
