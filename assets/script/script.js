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
    // dots: true,
    infinite: true,
    speed: 200,
    prevArrow:false,
    nextArrow:false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // edgeFriction: 0.50,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true
                // dots: true
            }
        },
        {
            breakpoint: 600,
            // 600 or less than 600
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
})

const tabs = document.querySelector('#experience-section');

tabs.addEventListener('click', e => handleClick(e));

function handleClick(e) {
  const target = e.target;
  const tabNum = target.dataset.tab;
  const activeTab = document.querySelector('.tabs.active');
  const activeContent = document.querySelector('.content .visible');
  const currentContent = document.querySelector(`.content__section[data-tab='${tabNum}']`);
  
  if (!tabNum) {
    return;
  }
  
  activeTab.classList.remove('active');
  target.classList.add('active');
  activeContent.classList.remove('visible');
  currentContent.classList.add('visible');
}
