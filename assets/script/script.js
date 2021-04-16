//   Navigation menu
const nav = document.querySelector('.ham-btn');
console.log(nav);
const navpanel = document.getElementById('nav-wrapper');
console.log(navpanel);
nav.addEventListener("click", openMenu);

function openMenu(){
    console.log("clicked");
    if(navpanel.classList.contains("closed")){
        console.log("inside closed");
        navpanel.style.visibility = "visible";
        navpanel.style.height = "100vh";
        navpanel.style.position = "fixed";
        navpanel.style.top="0";
        navpanel.style.bottom="0";
        navpanel.style.left="0";
        navpanel.style.right="0";
        navpanel.style.zIndex = "9999";
        navpanel.classList.remove("closed");
        navpanel.classList.add("opened");
        // navpanel.style.background = "rgba(21, 40, 78, 0.97)";
    }else  if(navpanel.classList.contains("opened")){
        navpanel.style.visibility = "hidden";
        navpanel.style.height = "0px";
        navpanel.classList.remove("opened");
        navpanel.classList.add("closed");

    }
}

function closeme(){
    if(navpanel.classList.contains("opened")){
        navpanel.style.visibility = "hidden";
        navpanel.classList.remove("opened");
        navpanel.classList.add("closed");
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

