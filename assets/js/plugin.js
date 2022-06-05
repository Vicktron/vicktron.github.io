/* ==============
 ========= Js Documentation =========

 Template Name: Edwiin
 Version: 1.0
 Description: Crypto Investment With Edwiin
 Author: Uiaxis
 Author URI: 

    =========================

     01. select investment plan
     ---------------------------
     02. select payment method
     ---------------------------
     03. select language
     ---------------------------
     04. hero section video popup
     ---------------------------
     05. investment plan slider
     ---------------------------
     06. blog layout one items shuffle
     ---------------------------
     06. blog layout two items shuffle
     ---------------------------
     06. blog layout three items shuffle
     ---------------------------
     06. init  js
     ---------------------------
     
    =========================
============== */

(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    // select investment plan
    $("#selectPlan").niceSelect();

    // select payment method
    $("#selectPayment").niceSelect();

    // select language
    $(".language-select").niceSelect();

    // select Country
    $("#selectCountry").niceSelect();

    // select Country
    $("#pLanguage").niceSelect();

    // hero section video popup
    if (document.querySelector(".video-popup") !== null) {
      $(".video-popup").magnificPopup({
        disableOn: 768,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
      });
    }

    // investment plan slider
    $(".investment__plan__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:
          "<button type='button' class='slick-prev pull-left button arrow--button'><img src=\"assets/images/icons/right-arrow.png\" alt=\"Previous Plan\" /></button>",
        nextArrow:
          "<button type='button' class='slick-next pull-right button arrow--button'><img src=\"assets/images/icons/left-arrow.png\" alt=\"Next Plan\" /></button>",
        dots: false,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

    // testimonial slider
    $(".testimonial__item__wrapper").not(".slick-initialized").slick({
      infinite: true,
      autoplay: true,
      focusOnSelect: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow:
        "<button type='button' class='slick-prev pull-left button arrow--button'><img src=\"assets/images/icons/right-arrow.png\" alt=\"Previous Plan\" /></button>",
      nextArrow:
        "<button type='button' class='slick-next pull-right button arrow--button'><img src=\"assets/images/icons/left-arrow.png\" alt=\"Next Plan\" /></button>",
      dots: false,
    });

    // blog layout one items shuffle
    if ($(".shuffle-container")[0]) {
      window.onload = function () {
        var Shuffle = window.Shuffle;
        var element = document.querySelector(".shuffle-container");

        var shuffleInstance = new Shuffle(element, {
          itemSelector: ".picture-item",
        });

        $(".blog__tab__btn").on("click", function (e) {
          e.preventDefault();
          $(".blog__tab__btn").removeClass("blog__tab__btn__active");
          $(this).addClass("blog__tab__btn__active");
          var keyword = $(this).attr("data-target");
          shuffleInstance.filter(keyword);
        });
      };
    }

    // blog layout two items shuffle
    if ($(".shuffle-container-two")[0]) {
      window.onload = function () {
        var Shuffle = window.Shuffle;
        var element = document.querySelector(".shuffle-container-two");

        var shuffleInstance = new Shuffle(element, {
          itemSelector: ".picture-item-two",
        });

        $(".blog__tab__btn").on("click", function (e) {
          e.preventDefault();
          $(".blog__tab__btn").removeClass("blog__tab__btn__active");
          $(this).addClass("blog__tab__btn__active");
          var keyword = $(this).attr("data-target");
          shuffleInstance.filter(keyword);
        });
      };
    }

    // blog layout three items shuffle
    if ($(".shuffle-container-three")[0]) {
      window.onload = function () {
        var Shuffle = window.Shuffle;
        var element = document.querySelector(".shuffle-container-three");

        var shuffleInstance = new Shuffle(element, {
          itemSelector: ".picture-item-three",
        });

        $(".blog__tab__btn").on("click", function (e) {
          e.preventDefault();
          $(".blog__tab__btn").removeClass("blog__tab__btn__active");
          $(this).addClass("blog__tab__btn__active");
          var keyword = $(this).attr("data-target");
          shuffleInstance.filter(keyword);
        });
      };
    }
  });
})(jQuery);
