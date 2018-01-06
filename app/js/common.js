window.onload = function () {

    var body = $("body"),
        active = "active",
        $window = $(window);

    ///  sliderEffect
    function sliderEffectForButtons(button, element, duration) {
        button.click(function () {
            element.slideToggle(duration);
        });
    }

    //  hideShowEffect
    function hideShowEffect(button, element) {
        button.click(function () {
            element.toggleClass("hidden");
        });
    }

    /// scrollButton
    function slideSubMenu(btn, fieldUnderBtn, displayView) {
        btn.each(function () {
            $(this).on({
                click: function () {
                    if ($window.width() <= displayView) {
                        fieldUnderBtn.slideToggle(400);
                    }
                }
            });
        });
    }

////////// Animation Plane

    var btnPlane = $(".icon-plane");

    btnPlane.on("click", function () {
        $(this).addClass(active);
        setTimeout(function () {
            btnPlane.removeClass(active)
        }, 2000);
    });

////// customers slider

    function sliderCustomers() {

        var currentItems = 4,
            sliderItems = $(".bl_customers__item").length,
            currentLoop;
        currentLoop = sliderItems > currentItems;


        $(".bl_customers__full").owlCarousel({
            items: currentItems,
            loop: currentLoop,
            nav: true,
            navText: true,
            dots: false,
            autoplay: true,
            stopOnHover: true,
            margin: 90,
            smartSpeed: 1000,
            autoplayTimeout: 4000,
            pagination: false,
            responsiveClass: true,
            responsive: {
                1200: {
                    items: 4
                },
                992: {
                    items: 3,
                    center: true
                },
                550: {

                    dots: false,
                    items: 2
                },
                320: {
                    dots: false,
                    items: 1,
                    center: true
                }

            }
        });
    }

    sliderCustomers();



// Slow Ancor



        $("a[href^=\"#\"]").on("click", function(){
            event.preventDefault();
            var id = $(this).attr('href'),
                destination = $(id).offset().top;
            $('body,html').animate({scrollTop: destination}, 1000);
        });


// Video play
    var btnPlayVideo = $(".js-play");

    btnPlayVideo.on("click", function () {
        $(this).toggleClass(active);
        if (btnPlayVideo.hasClass("active")) {
            $("video")[0].play();
        } else {
            $("video")[0].pause();
        }
    });


////////////

    var btnQestion = $(".js-question");
    btnQestion.on("click", function () {
        $(this).parent(".bl_qustions__item").toggleClass(active);
    });


// FILTER for telephone number

    var telephonseInput = $("input[type='tel']");
    telephonseInput.mask("+38 (0" + "99) 999-99-99", {placeholder: "+38 (0__) ___+__+__"});

};

/// Map

var coverMap = $(".bl_map__wrapper");
coverMap.on("click", function () {
    $(this).remove();
});
