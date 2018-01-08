window.onload = function () {

    var body = $("body"),
        active = "active",
        $window = $(window),
        allPrices = $(".bl_viewCoast");



    //  hideShowEffect
    function hideShowEffect(button, element) {
        button.click(function () {
            element.toggleClass("hidden");
        });
    }



    //// Mobile menu

    var btnMenu = $(".btn_menuList");

    btnMenu.on("click", function(){
       $(".header").toggleClass(active);
    });


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

//// Prise Slider

  if($window.width() < 1200){

      allPrices.addClass("owl-carousel");

      allPrices.owlCarousel({
          items: 1,
          loop: true,
          nav: true,
          navText: true,
          dots: false,
          autoplay: false,
          stopOnHover: true,
          margin: 90,
          smartSpeed: 1000,
          autoplayTimeout: 4000,
          pagination: false
      });
  }



// Slow Ancor

        $("a[href^=\"#\"]").on("click", function(){
            event.preventDefault();
            var id = $(this).attr('href'),
                destination = $(id).offset().top;
            $('body,html').animate({scrollTop: destination}, 1000);

            $(".header").removeClass(active);
        });


// Video play
    var btnPlayVideo = $(".js-play");

    btnPlayVideo.on("click", function () {
        $(this).toggleClass(active);
        $("video")[0].volume=0.8; /// громкость видио
        volume=0.2;
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

//// Для примера, удалить
$(".js-callBack2").on("click", function() {$(".bl_success").removeClass("hidden")});