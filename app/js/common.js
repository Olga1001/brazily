$(document).ready(function () {

     $(".popup-close, .overlay").click(function () {
        $(".popup-flex, .overlay, .popup").removeClass('active');
     });

    var $body = $(window.document.body);
    function bodyFreezeScroll() {
        var bodyWidth = $body.innerWidth();
        $body.css('overflow', 'hidden');
        $body.css('marginRight', ($body.css('marginRight') ? '+=' : '') + ($body.innerWidth() - bodyWidth));
        // $body.css('position', 'fixed');
    }

    function bodyUnfreezeScroll() {
        var bodyWidth = $body.innerWidth();
        $body.css('marginRight', '0');
        $body.css('overflow', 'auto');
        $body.css('position', 'relative');
    }

    $(".home-slider").slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        fade: true,
        autoplaySpeed: 5000,
        speed: 2000,
    });
    $(".store-first-slider").slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: true,
        arrows: false,
        speed: 1000,
    });
    $(".store-third-slider").slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: true,
        arrows: true,
        speed: 1000,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false
                }
            },
        ]
    });

    // $(".header-btn").click(function () {
    //     $(".header-drop").slideDown(500);
    // });
    // $(".header-drop-btn").click(function () {
    //     $(".header-drop").slideUp(500);
    // });

        // if ($(".checkbox").is(':checked') === 'true') {
        //     $(".header-drop-text").css("background", "#000000");
        // } else {
        //     $(".header-drop-text").css("background", "#ffffff");
        // }

    //header btn and menu
    $('.header-btn-menu').click(function(){
        $(this).toggleClass('btn-active');
        $('.header-menu').slideDown(500);

        if (!$(this).hasClass('btn-active')) {
            $('.header-menu').slideUp(500);
        }
    });

    //Store - star
    $(".my-rating").starRating({
        initialRating: 4,
        activeColor: '#d26e4b',
        hoverColor: '#d26e4b',
        strokeColor: '#d26e4b',
        fillColor: '#d26e4b',
        strokeWidth: 15,
        starSize: 20
    });

    //arrow up
    $(document).ready(function(){
        $('body').append('<a href="#" id="go-top" title="Вверх"><i class="fa fa-angle-up"></i></a>');
    });

    $(function() {
        $.fn.scrollToTop = function() {
            $(this).hide().removeAttr("href");
            if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
            var scrollDiv = $(this);
            $(window).scroll(function() {
                if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
                else $(scrollDiv).fadeIn("slow")
            });
            $(this).click(function() {
                $("html, body").animate({scrollTop: 0}, "slow")
            })
        }
    });

    $(function() {
        $("#go-top").scrollToTop();
    });

    //Store btn menu
    $(".header-second-btn_menu").click(function () {
        $(".header-overlay").addClass('active');
        bodyFreezeScroll();

    });
    $(".header-second-close").click(function () {
        $(".header-overlay").removeClass('active');
        bodyUnfreezeScroll();
    });


    //overlay
       // function checkHeight(){
    //     var thisHeight = $('.overlay').outerHeight();
    //     var thisValue = 50%
    //         $('.header-menu-second').height(thisHeight - thisValue);
    // }
    //
    // $(document).mouseup(function (e) {
    //     var container = $(".overlay");
    //     if (container.has(e.target).length === 0){
    //         $(".overlay", this).removeClass('active').siblings().addClass('active');
    //         checkHeight();
    //     }
    //
    // });
    // $(".overlay").click(function () {
    //     $(".overlay").removeClass('active');
    //     bodyUnfreezeScroll();
    //     checkHeight();
    // });

    $(".contact-select").select2({
        placeholder: 'קביעת פגישה',
        minimumResultsForSearch: -1
    });
    $(".contact-second-select").select2({
        placeholder: 'קביעת פגישה',
        minimumResultsForSearch: -1
    });
    $(".lauren-select").select2({
        minimumResultsForSearch: -1
    });
    $(".shop-second-select").select2({
        minimumResultsForSearch: -1
    });

    $(".contact-accordion-main").click(function () {
        $(this).parent().find(".contact-accordion-drop").slideToggle(500);
        $(this).parent().siblings().find('.contact-accordion-drop').slideUp(500);
        $(this).toggleClass('active').parents().siblings().find(".contact-accordion-main").removeClass('active');

    });

    $('[data-fancybox="gallery"]').fancybox({
        zIndex: '9',
    });

    $(".lauren-first-slider").slick({
        slidesToScroll: 1,
        infinite: true,
        slidesToShow: 1,
        dots: false,
        centerMode: true,
        variableWidth: true,
        arrows: true,
        speed: 1000,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    variableWidth: false,
                    centerMode: false,
                    arrows: false,
                    speed: 500
                }
            }
        ]
    });

    // $(".lauren-first-link").click(function (e) {
    //     e.preventDefault();
    // });

    // $(".lauren-first-zoom").click(function () {
        // $('[data-fancybox="images"]').fancybox({
        //     zIndex: '9',
        // });
    //     if(images.length == 0){
    //         loadImages();
    //     }
    //     $(this).fancybox();
    //
    //     $.fancybox.open(
    //         images,
    //         {
    //             'autoScale': true,
    //             'autoDimensions': true,
    //             'centerOnScroll': true,
    //             helpers:{
    //                 overlay:{
    //                     css:{
    //                         'background' : 'rgba(58, 42, 45, 0.95)'
    //                     }
    //                 },
    //                 buttons:{}
    //             }
    //         });
    // });
    // $("body").on("click", ".fancybox-close", function() {
    //
    //     $.fancybox.close();
    //
    // })

    var curentValue, totalValue;
    $('.plus').click(function(){
        curentValue = $(this).parent().find('.lauren-left-input').val();
        totalValue = +curentValue + 1;
        $(this).parent().find('.lauren-left-input').val(totalValue).change();
    });
    $('.minus').click(function(){
        // val('dec','dateInput-day1') ;
        curentValue = $(this).parent().find('.lauren-left-input').val();
        totalValue = +curentValue - 1;
        if (totalValue  < 1) {
            totalValue  = 1
        }
        $(this).parent().find('.lauren-left-input').val(totalValue).change();
    });

    $('.lauren-third-tab').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        $('.lauren-drop-item').eq(index).show().siblings().hide();
    });

    $(".lauren-fourth-slider").slick({
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: false,
        arrows: true,
        speed: 1000,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.basket-first-tab').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        $('.basket-first-drop').eq(index).show().siblings().hide();
    });

    $(".basket-sing-show").click(function () {
        $(this).parent().parent().find(".basket-sing-drop").slideToggle(500);
    });

    $(".basket-sing-reset").click(function () {
        $(".basket-second").show();
        $(".basket-first").hide();
    });

    //Store - preloader in heart
    $(".store-hover-heart").click(function () {
        $(this).find(".sk-circle-bounce").addClass('active');

    });

    //Blog - header btn and menu
    $(".blog-btn-menu").click(function () {
        $(this).toggleClass('btn-active');
        $(this).parents().find(".blog-header-container").slideDown(500);

        if (!$(this).hasClass('btn-active')) {
            $(".blog-header-container").slideUp(500);

        }
    });

    //Blog - drop menu
    $(".blog-menu-link").click(function () {
        $(this).parent().find(".blog-drop").slideToggle(500);
        $(this).find("svg").toggleClass('active').parents().siblings().removeClass('active');
    });

    $(".blog-accordion-title").click(function () {
        $(this).parent().find(".accordion-drop").slideToggle(500);
        $(this).find(".blog-accordion-two").toggleClass('active');
    });

    $('.card-tabs-item').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        $('.card-drop-list').eq(index).show().siblings().hide();
    });


    $(".lauren-first-link").fancybox();

    $('.lauren-first-zoom').on('click', function() {
        $.fancybox.open( $('.lauren-first-link'));
    });

    if (window.matchMedia("(min-width: 994px)").matches) {
        var $cache = $('.blog-header-container');
        //store the initial position of the element
        var vTop = $cache.offset().top - parseFloat($cache.css('margin-top').replace(/auto/, 0));
        $(window).scroll(function (event) {
            // what the y position of the scroll is
            var y = $(this).scrollTop();

            // whether that's below the form
            if (y >= vTop) {
                // if so, ad the fixed class
                $cache.addClass('stuck');
            } else {
                // otherwise remove it
                $cache.removeClass('stuck');
            }
        });
    }


});
