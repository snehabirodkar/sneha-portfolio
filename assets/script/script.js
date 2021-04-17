
/*********************************************************
                        PRELOADER JS
*********************************************************/
$(window).on('load',function(){
    $("#preloader").delay(500).fadeOut('slow');
    clearForm();
    console.log("inside loader");
});


// var loader = document.querySelector(".loader-wrapper")
// window.addEventListener("load", vanish);

// function vanish() {
//   loader.classList.add("disppear");
// }
//   Navigation menu
//   Navigation menu
const nav = document.querySelector('.nav-icon');
const text = document.querySelector('.links');
const navpanel = document.getElementById('nav-wrapper');
const line1 = document.getElementById('first');
const line2 = document.getElementById('second');
const line3 = document.getElementById('third');
nav.addEventListener("click", openMenu);

function openMenu(){
    console.log("clicked");
    if(navpanel.classList.contains("closed")){
        console.log("inside closed");
        
        navpanel.style.height = "100vh";
        navpanel.style.visibility = "visible";
        navpanel.style.position = "fixed";
        navpanel.style.top="0";
        navpanel.style.bottom="0";
        navpanel.style.left="0";
        navpanel.style.right="0";
        navpanel.style.transition = "all .3s ease-in-out";
        navpanel.style.zIndex = "9999";
        navpanel.classList.remove("closed");
        navpanel.classList.add("opened");
        // line1.style.transform = "rotate(45deg) translate(0px, 23px)";
        // line3.style.transform = "rotate(-45deg) translate(7px, -29px)";
        // line2.style.visibility = "hidden";
        // line1.style.transition = "all .3s ease-in-out";
        // line2.style.transition = "all .3s ease-in-out";
        // line3.style.transition = "all .3s ease-in-out";
        line1.style.transform = "rotate(45deg) translate(10px,9px)"
        line2.style.visibility = "hidden";
        line3.style.transform = "rotate(-45deg) translate(7px,-8px)"

        line1.style.transition = "all .3s ease-in-out";

        line3.style.transition = "all .3s ease-in-out";
    }
    else  if(navpanel.classList.contains("opened")){
        navpanel.style.visibility = "hidden";
        navpanel.style.height = "0px";
        navpanel.classList.remove("opened");
        navpanel.classList.add("closed");
        navpanel.style.transition = "all .5s ease-in-out";
        navpanel.style.overflow ="hidden";
        // line1.style.transform = "unset";
        // line3.style.transform = "rotate(0deg) translateY(-15px)";
        // line2.style.visibility = "visible";
        // line1.style.transition = "all .3s ease-in-out";
        // line2.style.transition = "all .3s ease-in-out";
        // line3.style.transition = "all .3s ease-in-out";
        line1.style.transform = "unset"

        line3.style.transform = "unset"
        line2.style.visibility = "visible";
        line1.style.transition = "all .3s ease-in-out";

        line3.style.transition = "all .3s ease-in-out";
    }
}

function closeme(){
    if(navpanel.classList.contains("opened")){
        navpanel.style.visibility = "hidden";
        navpanel.style.height = "0px";
        navpanel.classList.remove("opened");
        navpanel.classList.add("closed");
        navpanel.style.transition = "all .5s ease-in-out";
        navpanel.style.overflow ="hidden";
        // line1.style.transform = "unset";
        // line3.style.transform = "rotate(0deg) translateY(-15px)";
        // line2.style.visibility = "visible";
        // line1.style.transition = "all .3s ease-in-out";
        // line2.style.transition = "all .3s ease-in-out";
        // line3.style.transition = "all .3s ease-in-out";
        line1.style.transform = "unset"

        line3.style.transform = "unset"
        line2.style.visibility = "visible";
        line1.style.transition = "all .3s ease-in-out";

        line3.style.transition = "all .3s ease-in-out";
    }
}




var typed = new Typed("#typer", {
    strings: ['Freelancer',   
    'UI/UX Designer',
    'Graphic Designer', 
    'Full Stack Dev'
    ],
    typeSpeed: 120,
    backSpeed: 40,
    backDelay: 500,
    startDelay: 500,
    smartBackspace: true,
    loop: true
});
// ***********************************************//
// social - slick

$('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    edgeFriction: 0.50,
    prevArrow: "<button type='button' class='slick-prev'><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></button>",
    nextArrow: "<button type='button' class='slick-next'><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></button>",
    accessibility: false,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            // 600 or less than 600
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
})

// Counter
$(".number").counterUp({time:3000});

//Load more
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

// Reade  more script

jQuery(document).ready(function ($) {
    $(".show-more-btn").click(function (e) {
        $(".show-more-item:hidden").slice(0).fadeIn();
        if ($(".show-more-item:hidden").length < 1) $(this).fadeOut();
    });
    $(".show-less-btn").click(function (e) {
        $(".show-more-item:hidden").slice(0).fadeIn();
        if ($(".show-more-item:hidden").length < 1) $(this).fadeOut();
    });
});

// clear fields
 
 function clearForm(){
    const name1 = document.getElementById('name').value = '';
    const email = document.getElementById('email').value = '';
    const message = document.getElementById('message').value = '';
 }

// Change year automatic
const currentyear = document.getElementById("currentyear");
var date = new Date();
var year = new date.getFullYear();
var fullYearText = "@" + year;

currentyear.innerHTML = fullYearText;
