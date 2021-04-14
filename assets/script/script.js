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

// $(function () {
//     $("#testtext-1").show("slow");
//     $("#testtext-2").hide();
//     $("#testtext-3").hide();
//     $("div.test-2").addClass("changeafter");
//     $("div.test-3").addClass("changeafter");

//     $("#test-1").click(function () {
//         $("#testtext-1").show("slow");
//         $("#testtext-2").hide();
//         $("#testtext-3").hide();
//         $("div.test-1").removeClass("changeafter");
//         $("div.test-2").addClass("changeafter");
//         $("div.test-3").addClass("changeafter");
//     });
//     $("#test-2").click(function () {
//         $("#testtext-1").hide();
//         $("#testtext-2").show("slow");
//         $("#testtext-3").hide();
//         $("div.test-2").removeClass("changeafter");
//         $("div.test-1").addClass("changeafter");
//         $("div.test-3").addClass("changeafter");
//     });
//     $("#test-3").click(function () {
//         $("#testtext-1").hide();
//         $("#testtext-2").hide();
//         $("#testtext-3").show("slow");
//         $("div.test-3").removeClass("changeafter");
//         $("div.test-2").addClass("changeafter");
//         $("div.test-1").addClass("changeafter");
//     });
// });

// jQuery.
$(function() {
	// Reference the tab links.
	const tabLinks = $('#tab-links li a');
	
	// Handle link clicks.
	tabLinks.click(function(event) {
		var $this = $(this);
		
		// Prevent default click behaviour.
		event.preventDefault();
		
		// Remove the active class from the active link and section.
		$('#tab-links a.active, section.active').removeClass('active');
		
		// Add the active class to the current link and corresponding section.
		$this.addClass('active');
		$($this.attr('href')).addClass('active');
	});
});

  