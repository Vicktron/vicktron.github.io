/* ==============
 ========= Js Documentation =========

 Template Name: Edwiin
 Version: 1.0
 Description: Sports Hyip Investment HTML Template
 Author: Uiaxis
 Author URI: https://themeforest.net/user/uiaxis

    =========================

     01. preloader
     ---------------------------
     02. data background
     ---------------------------
     03. active nav link
     ---------------------------
     04. dropdown menu slide effect
     ---------------------------
     05. animated hamburger icon
     ---------------------------
     06. position navbar on scroll
     ---------------------------
     07. investment plan slider
     ---------------------------
     08. transaction table tab
     ---------------------------
     09. step section tab
     ---------------------------
     10. faq tab
     ---------------------------
     11. password show hide
     ---------------------------
     12. scroll to top
     ---------------------------

    =========================
============== */

(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    // preloader
    $("#preloader")
      .delay(300)
      .animate(
        {
          opacity: "0",
        },
        500,
        function () {
          $("#preloader").css("display", "none");
        }
      );

    // data background
    $("[data-background]").each(function () {
      $(this).css(
        "background-image",
        "url(" + $(this).attr("data-background") + ")"
      );
    });

    // animated hamburger icon
    $(".navbar-toggler").on("click", function () {
      $(this).toggleClass("toggle-active");
      $(".header").toggleClass("header-active");
    });

    // position navbar on scroll
    $(window).on("scroll", function (e) {
      var scroll = $(window).scrollTop();
      if ((scroll > 10) | (scroll == 10)) {
        $("header").addClass("navbar__active");
        $(".topbar").addClass("topbar__active");
        $(".header__dashboard").removeClass("header__dashboard");
      } else {
        $("header").removeClass("navbar__active");
        $(".topbar").removeClass("topbar__active");
        $(".header__alt").addClass("header__dashboard");
      }
    });

    $(window).resize(function () {
      if ($(".dropdown-menu").hasClass("show")) {
        $(".dropdown-menu").removeClass("show");
        $(".dropdown-toggle").removeClass("show");
      }
      $(".overlay").removeClass("overlay__active");
      $(".sidebar").removeClass("sidebar__active");
      $(".overlay").removeClass("overlay__active overlay__active__two");
      $(".notification__wrapper").removeClass("notification__wrapper__active");
      $(".profile__info").removeClass("profile__info__active");
    });

    // range slider
    $(".range__slider").on("input", function () {
      $("#investAmount").val($(this).val());
      $(".range__output__value").html($(this).val());
      $("#dailyProfit").html(((($(this).val() * 35) / 100) * 1).toFixed(4));
      $("#totalProfit").html(((($(this).val() * 35) / 100) * 30).toFixed(4));
    });

    $("#investAmount").on("input", function (e) {
      if (this.value > 1000 || this.value < 1) {
        $("#investAmount").val(1000);
        alert("Value should be between 1 - 1000");
        return false;
      }

      $(".range__slider").val($(this).val());
      $(".range__output__value").html($(this).val());
      $("#dailyProfit").html(((($(this).val() * 35) / 100) * 1).toFixed(4));
      $("#totalProfit").html(((($(this).val() * 35) / 100) * 30).toFixed(4));
    });

    $("#dailyProfit").html(function () {
      $("#dailyProfit").html(
        ((($(".range__slider").val() * 35) / 100) * 1).toFixed(4)
      );
    });

    $("#totalProfit").html(function () {
      $("#totalProfit").html(
        ((($(".range__slider").val() * 35) / 100) * 30).toFixed(4)
      );
    });

    $("#investAmount").on("input", function (e) {
      document.querySelectorAll(".range__slider").forEach(function (el) {
        el.oninput = function () {
          var valPercent =
            (el.valueAsNumber - parseInt(el.min)) /
            (parseInt(el.max) - parseInt(el.min));
          var style =
            "background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(" +
            valPercent +
            ", #13d487), color-stop(" +
            valPercent +
            ", #6c4edd));";
          el.style = style;
        };
        el.oninput();
      });
    });

    // range slider fill background
    document.querySelectorAll(".range__slider").forEach(function (el) {
      el.oninput = function () {
        var valPercent =
          (el.valueAsNumber - parseInt(el.min)) /
          (parseInt(el.max) - parseInt(el.min));
        var style =
          "background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(" +
          valPercent +
          ", #13d487), color-stop(" +
          valPercent +
          ", #6c4edd));";
        el.style = style;
      };
      el.oninput();
    });

    // transaction table tab
    $(".transaction__data").hide();
    $(".transaction__data:first").show();
    $(".transaction__tab__btn").on("click", function () {
      $(".transaction__tab__btn").removeClass("transaction__tab__btn__active");
      $(this).addClass("transaction__tab__btn__active");
      $(".transaction__data").hide();

      var activeTransaction = $(this).attr("href");
      $(activeTransaction).fadeIn(100);
      return false;
    });

    // step section tab
    $(".step__tab__wrapper").hide();
    $(".step__tab__wrapper:first").show();
    $(".step__tab__link").on("click", function () {
      $(".step__tab__link").removeClass("step__tab__link__active");
      $(this).addClass("step__tab__link__active");
      $(".step__tab__wrapper").hide();

      var activeStep = $(this).attr("href");
      $(activeStep).fadeIn();
      return false;
    });

    // faq tab
    $(".faq__tab__content").hide();
    $(".faq__tab__content:first").show();
    $(".faq__tab__btn").on("click", function () {
      $(".faq__tab__btn").removeClass("faq__tab__btn__active");
      $(this).addClass("faq__tab__btn__active");
      $(".faq__tab__content").hide();

      var activeFaq = $(this).attr("href");
      $(activeFaq).fadeIn();
      return false;
    });

    // register password toggle
    $(".toggle__password").click(function () {
      var passwordField = $("#regiPass")[0];
      if (passwordField.type === "password") {
        passwordField.type = "text";
        $(this).removeClass("fa-eye-slash").addClass("fa-eye");
      } else {
        passwordField.type = "password";
        $(this).removeClass("fa-eye").addClass("fa-eye-slash");
      }
    });

    // register retype password toggle
    $(".retype__toggle__password").click(function () {
      var retypePasswordField = $("#retypePass")[0];
      if (retypePasswordField.type === "password") {
        retypePasswordField.type = "text";
        $(this).removeClass("fa-eye-slash").addClass("fa-eye");
      } else {
        retypePasswordField.type = "password";
        $(this).removeClass("fa-eye").addClass("fa-eye-slash");
      }
    });

    // register retype password toggle
    $(".login__toggle__password").click(function () {
      var loginPasswordField = $("#loginPass")[0];
      if (loginPasswordField.type === "password") {
        loginPasswordField.type = "text";
        $(this).removeClass("fa-eye-slash").addClass("fa-eye");
      } else {
        loginPasswordField.type = "password";
        $(this).removeClass("fa-eye").addClass("fa-eye-slash");
      }
    });

    // register retype password toggle
    $(".login__toggle__password2").click(function () {
      var loginPasswordField2 = $("#newPass")[0];
      if (loginPasswordField2.type === "password") {
        loginPasswordField2.type = "text";
        $(this).removeClass("fa-eye-slash").addClass("fa-eye");
      } else {
        loginPasswordField2.type = "password";
        $(this).removeClass("fa-eye").addClass("fa-eye-slash");
      }
    });

    // register retype password toggle
    $(".login__toggle__password3").click(function () {
      var loginPasswordField3 = $("#conNewPass")[0];
      if (loginPasswordField3.type === "password") {
        loginPasswordField3.type = "text";
        $(this).removeClass("fa-eye-slash").addClass("fa-eye");
      } else {
        loginPasswordField3.type = "password";
        $(this).removeClass("fa-eye").addClass("fa-eye-slash");
      }
    });

    $(document).on("click", function (e) {
      var cont = $(
        ".icon__wrapper, .notification__wrapper, .overlay, .profile__small, .profile__info, .message__icon__wrapper, .message__wrapper"
      );
      if (!cont.is(e.target) && cont.has(e.target).length === 0) {
        $(".notification__wrapper").removeClass(
          "notification__wrapper__active"
        );
        $(".profile__info").removeClass("profile__info__active");
        $(".message__wrapper").removeClass("message__wrapper__active");
        $(".overlay").removeClass("overlay__active__two");
      }
    });

    $(".profile__small").click(function () {
      if (
        $(".notification__wrapper").hasClass("notification__wrapper__active") ||
        $(".message__wrapper").hasClass("message__wrapper__active")
      ) {
        $(".notification__wrapper").removeClass(
          "notification__wrapper__active"
        );
        $(".message__wrapper").removeClass("message__wrapper__active");
        $(".overlay").removeClass("overlay__active__two");
      }

      $(".profile__info").toggleClass("profile__info__active");
      $(".overlay").toggleClass("overlay__active__two");
    });

    $(".icon__wrapper").click(function () {
      if (
        $(".profile__info").hasClass("profile__info__active") ||
        $(".message__wrapper").hasClass("message__wrapper__active")
      ) {
        $(".profile__info").removeClass("profile__info__active");
        $(".message__wrapper").removeClass("message__wrapper__active");
        $(".overlay").removeClass("overlay__active__two");
      }

      $(".notification__wrapper").toggleClass("notification__wrapper__active");
      $(".overlay").toggleClass("overlay__active__two");
    });

    $(".message__icon__wrapper").click(function () {
      if (
        $(".profile__info").hasClass("profile__info__active") ||
        $(".notification__wrapper").hasClass("notification__wrapper__active")
      ) {
        $(".profile__info").removeClass("profile__info__active");
        $(".notification__wrapper").removeClass(
          "notification__wrapper__active"
        );
        $(".overlay").removeClass("overlay__active__two");
      }

      $(".message__wrapper").toggleClass("message__wrapper__active");
      $(".overlay").toggleClass("overlay__active__two");
    });

    // collapsible sidebar
    $(".collapse__sidebar__btn").click(function () {
      $(".sidebar").toggleClass("sidebar__active");
      $(".overlay").addClass("overlay__active");
    });

    // collapsible sidebar
    $(".close__sidebar").click(function () {
      $(".sidebar").toggleClass("sidebar__active");
      $(".overlay").removeClass("overlay__active");
    });

    $(".overlay").click(function () {
      $(".sidebar").removeClass("sidebar__active");
      $(this).removeClass("overlay__active overlay__active__two");
      $(".notification__wrapper").removeClass("notification__wrapper__active");
      $(".profile__info").removeClass("profile__info__active");
      $(".message__wrapper").removeClass("message__wrapper__active");
    });

    // select lottery
    $(".custom__number").click(function () {
      $(this).toggleClass("custom__number__active");
      var numItems = $(".custom__number__active").length;
      if (numItems === 7) {
        $(".custom__number").addClass("custom__number__deactive");
        $(".custom__number__active").removeClass("custom__number__deactive");
      } else {
        $(".custom__number").removeClass("custom__number__deactive");
        $(".custom__number__active").removeClass("custom__number__deactive");
      }
      var activeTicketNumber = $(".custom__number__active");
      var ticketNumberFix = $(".ticket__numbers");

      // first number
      if (activeTicketNumber.eq(0).not(".custom__number__active")) {
        ticketNumberFix.eq(0).html("00");
      }
      ticketNumberFix.eq(0).html(activeTicketNumber.eq(0).children().html());

      // second number
      if (activeTicketNumber.eq(1).not(".custom__number__active")) {
        ticketNumberFix.eq(1).html("00");
      }
      ticketNumberFix.eq(1).html(activeTicketNumber.eq(1).children().html());

      // third number
      if (activeTicketNumber.eq(2).not(".custom__number__active")) {
        ticketNumberFix.eq(2).html("00");
      }
      ticketNumberFix.eq(2).html(activeTicketNumber.eq(2).children().html());

      // fourth number
      if (activeTicketNumber.eq(3).not(".custom__number__active")) {
        ticketNumberFix.eq(3).html("00");
      }
      ticketNumberFix.eq(3).html(activeTicketNumber.eq(3).children().html());

      // fifth number
      if (activeTicketNumber.eq(4).not(".custom__number__active")) {
        ticketNumberFix.eq(4).html("00");
      }
      ticketNumberFix.eq(4).html(activeTicketNumber.eq(4).children().html());

      // sixth number
      if (activeTicketNumber.eq(5).not(".custom__number__active")) {
        ticketNumberFix.eq(5).html("00");
      }
      ticketNumberFix.eq(5).html(activeTicketNumber.eq(5).children().html());

      // seven number
      if (activeTicketNumber.eq(6).not(".custom__number__active")) {
        ticketNumberFix.eq(6).html("00");
      }
      ticketNumberFix.eq(6).html(activeTicketNumber.eq(6).children().html());
    });

    $(".magic__filter").on("click", function () {
      var itemss = $(".custom__number");
      var random = Math.floor(Math.random() * 10);
      var random2 = Math.floor(Math.random() * (20 - 10) + 10);
      var random3 = Math.floor(Math.random() * (30 - 20) + 20);
      var random4 = Math.floor(Math.random() * (40 - 30) + 30);
      var random5 = Math.floor(Math.random() * (50 - 40) + 40);
      var random6 = Math.floor(Math.random() * (55 - 50) + 50);
      var random7 = Math.floor(Math.random() * (60 - 55) + 55);

      itemss.removeClass("custom__number__active");
      itemss.eq(random).addClass("custom__number__active");
      itemss.eq(random2).addClass("custom__number__active");
      itemss.eq(random3).addClass("custom__number__active");
      itemss.eq(random4).addClass("custom__number__active");
      itemss.eq(random5).addClass("custom__number__active");
      itemss.eq(random6).addClass("custom__number__active");
      itemss.eq(random7).addClass("custom__number__active");

      var activeTicketNumber = $(".custom__number__active");
      var ticketNumberFix = $(".ticket__numbers");

      // first number
      if (activeTicketNumber.eq(0).not(".custom__number__active")) {
        ticketNumberFix.eq(0).html("00");
      }
      ticketNumberFix.eq(0).html(activeTicketNumber.eq(0).children().html());

      // second number
      if (activeTicketNumber.eq(1).not(".custom__number__active")) {
        ticketNumberFix.eq(1).html("00");
      }
      ticketNumberFix.eq(1).html(activeTicketNumber.eq(1).children().html());

      // third number
      if (activeTicketNumber.eq(2).not(".custom__number__active")) {
        ticketNumberFix.eq(2).html("00");
      }
      ticketNumberFix.eq(2).html(activeTicketNumber.eq(2).children().html());

      // fourth number
      if (activeTicketNumber.eq(3).not(".custom__number__active")) {
        ticketNumberFix.eq(3).html("00");
      }
      ticketNumberFix.eq(3).html(activeTicketNumber.eq(3).children().html());

      // fifth number
      if (activeTicketNumber.eq(4).not(".custom__number__active")) {
        ticketNumberFix.eq(4).html("00");
      }
      ticketNumberFix.eq(4).html(activeTicketNumber.eq(4).children().html());

      // sixth number
      if (activeTicketNumber.eq(5).not(".custom__number__active")) {
        ticketNumberFix.eq(5).html("00");
      }
      ticketNumberFix.eq(5).html(activeTicketNumber.eq(5).children().html());

      // seven number
      if (activeTicketNumber.eq(6).not(".custom__number__active")) {
        ticketNumberFix.eq(6).html("00");
      }
      ticketNumberFix.eq(6).html(activeTicketNumber.eq(6).children().html());

      var numItems = $(".custom__number__active").length;

      if (numItems === 7) {
        $(".custom__number").addClass("custom__number__deactive");
        $(".custom__number__active").removeClass("custom__number__deactive");
      } else {
        $(".custom__number").removeClass("custom__number__deactive");
        $(".custom__number__active").removeClass("custom__number__deactive");
      }
    });

    $(".save__ticket").on("click", function () {
      var luckyNumbers = $(".lucky__numbers");
      var ticketNumberFix = $(".ticket__numbers");
      luckyNumbers.eq(0).html(ticketNumberFix.eq(0).html());
      luckyNumbers.eq(1).html(ticketNumberFix.eq(1).html());
      luckyNumbers.eq(2).html(ticketNumberFix.eq(2).html());
      luckyNumbers.eq(3).html(ticketNumberFix.eq(3).html());
      luckyNumbers.eq(4).html(ticketNumberFix.eq(4).html());
      luckyNumbers.eq(5).html(ticketNumberFix.eq(5).html());
      luckyNumbers.eq(6).html(ticketNumberFix.eq(6).html());
    });

    $(".delete, .reset").on("click", function () {
      $(".custom__number").removeClass(
        "custom__number__active custom__number__deactive"
      );
      $(".ticket__numbers").html("00");
      $(".lucky__numbers").html("00");
    });

    // select payment system

    $(".payment__system__checkbox__single").on("click", function (e) {
      $(".payment__system__checkbox__single")
        .not(this)
        .removeClass("payment__system__checkbox__single__active");
      $(this).toggleClass("payment__system__checkbox__single__active");
      if (
        $(".payment__system__checkbox__single").hasClass(
          "payment__system__checkbox__single__active"
        )
      ) {
        var checkbox = $(this).find("input[type=checkbox]");
        checkbox.prop("checked", true);
        $(".payment__system__plan").slideDown(300);
        $(".payment__system__plan").prev().addClass("legen__active");
      } else {
        $(".payment__system__plan").slideUp(300);
        $(".payment__system__plan").prev().removeClass("legen__active");
      }
    });

    $(
      ".pay__system__check, .check_wrap, .payment__system__checkbox__single"
    ).click(function (e) {
      e.stopPropagation();
      return true;
    });

    $(".pay__system__check").on("click", function (e) {
      $(".payment__system__checkbox__single")
        .not(this.closest(".payment__system__checkbox__single"))
        .removeClass("payment__system__checkbox__single__active");
      $(this)
        .closest(".payment__system__checkbox__single")
        .toggleClass("payment__system__checkbox__single__active");
      if (
        $(".payment__system__checkbox__single").hasClass(
          "payment__system__checkbox__single__active"
        )
      ) {
        var checkbox = $(this);
        checkbox.prop("checked", true);
      }
    });

    // select investment plan
    $(".checkbox__investment__plan").on("click", function (e) {
      $(".checkbox__investment__plan")
        .not(this)
        .removeClass("checkbox__investment__plan__active");
      $(this).toggleClass("checkbox__investment__plan__active");
      if (
        $(".checkbox__investment__plan").hasClass(
          "checkbox__investment__plan__active"
        )
      ) {
        var checkboxPlan = $(this).find("input[type=checkbox]");
        checkboxPlan.prop("checked", true);
        $(".payment__system__amount").slideDown(300);
        $(".payment__system__amount").prev().addClass("legen__active");
      } else {
        $(".payment__system__amount").slideUp(300);
        $(".payment__system__amount").prev().removeClass("legen__active");
      }
    });

    $(
      ".pay__system__check__plan, .check_wrap_plan, .checkbox__investment__plan"
    ).click(function (e) {
      e.stopPropagation();
      return true;
    });

    $(".pay__system__check__plan").on("click", function (e) {
      $(".checkbox__investment__plan")
        .not(this.closest(".checkbox__investment__plan"))
        .removeClass("checkbox__investment__plan__active");
      $(this)
        .closest(".checkbox__investment__plan")
        .toggleClass("checkbox__investment__plan__active");
      if (
        $(".checkbox__investment__plan").hasClass(
          "checkbox__investment__plan__active"
        )
      ) {
        var checkboxPlan = $(this);
        checkboxPlan.prop("checked", true);
      }
    });

    $("#withAmount").on("input", function () {
      if ($(this).val().length === 0) {
        $(".wallet__system").slideUp(300);
        $(".wallet__system").prev().removeClass("legen__active");
      } else {
        $(".wallet__system").slideDown(300);
        $(".wallet__system").prev().addClass("legen__active");
      }
    });

    $("#wallAdd").on("input", function () {
      if ($(this).val().length === 0) {
        $(".operation").slideUp(300);
        $(".operation").prev().removeClass("legen__active");
      } else {
        $(".operation").slideDown(300);
        $(".operation").prev().addClass("legen__active");
      }
    });

    $("#wallAddTwo").on("input", function () {
      if ($(this).val().length === 0) {
        $(".payment__system__method").slideUp(300);
        $(".payment__system__method").prev().removeClass("legen__active");
      } else {
        $(".payment__system__method").slideDown(300);
        $(".payment__system__method").prev().addClass("legen__active");
      }
    });

    // history toggle
    $(".depo__history__btn").click(function () {
      $(this).toggleClass("depo__history__btn__active");
      $(this).parent().next(".deposit__history__wrapper").slideToggle(300);
    });

    // dashboard lottery tab
    $(".dashboard__lottery__tab__content").hide();
    $(".dashboard__lottery__tab__content:first").show();
    $(".dashboard__lottery__tab__btn").on("click", function () {
      $(".dashboard__lottery__tab__btn").removeClass(
        "dashboard__lottery__tab__btn__active"
      );
      $(this).addClass("dashboard__lottery__tab__btn__active");
      $(".dashboard__lottery__tab__content").hide();

      var activeLottery = $(this).attr("href");
      $(activeLottery).fadeIn();
      return false;
    });

    // countdown timer
    function countDown() {
      var currDate = new Date();
      var endTime = new Date(
        currDate.getFullYear(),
        currDate.getMonth(),
        currDate.getDate(),
        20,
        0,
        0
      );
      endTime = Date.parse(endTime) / 1000;
      var now = new Date();
      now = Date.parse(now) / 1000;
      var timeLeft = endTime - now;
      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
      );
      if (hours > 8) {
        hours = 0;
        minutes = 0;
        seconds = 0;
      }
      if (hours < "17") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }

      $(".hours").html(hours + ":" + minutes + ":" + seconds);
    }

    setInterval(function () {
      countDown();
    }, 1000);

    (function () {
      var showResults;
      $("#transactionHistoryFilter").keyup(function () {
        var searchText;
        searchText = $("#transactionHistoryFilter").val();
        return showResults(searchText);
      });
      showResults = function (searchText) {
        $("tbody tr").hide();
        return $("tbody tr:Contains(" + searchText + ")").show();
      };
      jQuery.expr[":"].Contains = jQuery.expr.createPseudo(function (arg) {
        return function (elem) {
          return (
            jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0
          );
        };
      });
    }.call(this));

    // settings tab
    $(".settings__tab__content").hide();
    $(".settings__tab__content:first").show();
    $(".settings__tab__btn").on("click", function () {
      $(".settings__tab__btn").removeClass("settings__tab__btn__active");
      $(this).addClass("settings__tab__btn__active");
      $(".settings__tab__content").hide();

      var activeLottery = $(this).attr("href");
      $(activeLottery).fadeIn();
      return false;
    });

    // Scroll Bottom To Top
    var ScrollTop = $(".scrollToTop");
    $(window).on("scroll", function () {
      if ($(this).scrollTop() < 500) {
        ScrollTop.removeClass("active");
      } else {
        ScrollTop.addClass("active");
      }
    });

    $(".scrollToTop").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        500
      );
      return false;
    });
  });
})(jQuery);
