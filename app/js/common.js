window.onload = function() {

    var blackWrapper = $(".blackWrapper"),
        body = $("body"),
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
    function slideSubMenu(btn, fieldUnderBtn, displayView){
        btn.each(function(){
            $(this).on({
                click: function (){
                    if ($window.width() <= displayView) {
                        fieldUnderBtn.slideToggle(400);
                    }
                }
            });
        });
    }



////// customers slider

    function sliderHits() {

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
            autoplay: false,
            stopOnHover: true,
            margin: 90,
            smartSpeed: 1000, //Время движения слайда
            autoplayTimeout: 4000, //Время смены слайда
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

    sliderHits();

/// SLICK SLIDER

    /*
        $(".bl_product__productSlider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.bl_product__verticalSlider',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        arrows: true,
                        prevArrow: '<div class="mainProductSlickArrow-prev"></div>',
                        nextArrow: '<div class="mainProductSlickArrow-next"></div>',
                        infinite: true
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                        arrows: true,
                        prevArrow: '<div class="mainProductSlickArrow-prev"></div>',
                        nextArrow: '<div class="mainProductSlickArrow-next"></div>',
                        infinite: true
                    }
                }
            ]
        });
    */



// Ancor to top
    /*
        $(".bl_ancor").on("click", "a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 500);
        });
        $(window).scroll(function () {



            var ancor = $(".bl_ancor"),
                windowHeight = $(window).height() / 2;

            if ($(this).scrollTop() > windowHeight) {

                ancor.removeClass("hidden");

            } else {
                ancor.addClass("hidden");
            }


            if ( ($(this).scrollTop() >= topMainHeaderBlock) && (screenWidth >= 1027)) {
                mainHeaderBlock.addClass(mainHeaderFixed);
                mainNavigation.addClass(mainNavigationFixed);
            } else {
                mainHeaderBlock.removeClass(mainHeaderFixed);
                mainNavigation.removeClass(mainNavigationFixed);
            }


        });
     */

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

        var btnQestion =$(".js-question");
    btnQestion.on("click", function () {
       $(this).parent(".bl_qustions__item").toggleClass(active);
    });



// FILTER for telephone number

    var telephonseInput = $("input[type='tel']");
    telephonseInput.mask("+38 (0" + "99) 999-99-99", {placeholder: "+38 (0__) ___+__+__"});



};


