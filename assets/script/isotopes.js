$(document).ready(function () {
    $("#isotope-container").isotope({});

    $("#isotope-filters").on("click", "button", function () {
        let filtervalue = $(this).attr("data-filter");
        //        console.log(filtervalue);

        $("#isotope-container").isotope({
            filter: filtervalue
        });
        $("#isotope-filters").find('.active').removeClass('active');

        $(this).addClass('active');
    })
})


$(document).ready(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',
            opener: function (openerElement) {
                return openerElement.is('img') ? openerElement : openerElement
                    .find('img');
            }
        }
    })
});
