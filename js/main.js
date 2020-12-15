$(document).ready(function () {

    /*--- Class Toggle - Primary Navbar ---*/
    $("#nav-primary button.navbar-toggler").click(function () {
        $("#nav-primary .navbar-toggler i.fa").toggleClass("fa-times fa-bars");
    });

    /*--- Sidebar Search ---*/
    $(".sidebar-search .input-group>.form-control").focus(function () {
        $(".sidebar-search button.btn").css("border-color", "#3AAFA9");
    });

    $(".sidebar-search .input-group>.form-control").focusout(function () {
        $(".sidebar-search button.btn").css("border-color", "#DDDDDD");
    });

    /*--- Scroll Up Button ---*/
    $(".scroll-up>button").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "300");
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $(".scroll-up>button").fadeIn();
        } else {
            $(".scroll-up>button").fadeOut();
        }
    });

    /*--- Comment Widget ---*/
    $(".add-comment").click(function () {
        $(".comment-widget>form").css("display", "inline-block");
        $(this).css("display", "none");

    });

    $(".com-cancel").click(function () {
        $(".comment-widget>form").css("display", "none");
        $(".add-comment").css("display", "inline-block");
    });

    $("#comment").on("input", function () {
        this.style.height = "auto";
        this.style.height = (this.scrollHeight) + "px";
    });

    /*--- Login & Sign Up ---*/
    $(".password-visibility-1").click(function () {
        var type = $("#visi-password-1").attr("type");
        if (type == "password") {
            $("#visi-password-1").attr("type", "text");
            $(".password-visibility-1").text("Hide");
        } else {
            $("#visi-password-1").attr("type", "password");
            $(".password-visibility-1").text("Show");
        }
    });

    $(".password-visibility-2").click(function () {
        var type = $("#visi-password-2").attr("type");
        if (type == "password") {
            $("#visi-password-2").attr("type", "text");
            $(".password-visibility-2").text("Hide");
        } else {
            $("#visi-password-2").attr("type", "password");
            $(".password-visibility-2").text("Show");
        }
    });

    /*<--- Sign Up & Log In Pops --->*/
    $(".login>span").click(function () {        
        $(".loader-form").show();
        $("#load-form").load("login.html #login-container", function () {
            $(".loader-form").hide();
            $(".blog-title-login").remove();
            $(".card-dismiss").html("&times;");
            $(".create-account>a").remove();
            $(".create-account").append("<span>Create an account</span>");
            $("script[src='js/main.js']").replaceWith("<script src='js/main.js'></script>");

            $(".card-dismiss").click(function () {
                $("#login-container").remove();
            });
        });
    });

    $(".create-account>span, .post-likes>i").click(function () {        
        $(".loader-form").show();
        $("#load-form").load("signup.html #signup-container", function () {
            $(".loader-form").hide();
            $(".blog-title-signup").remove();
            $(".card-dismiss").html("&times;");
            $(".login>a").remove();
            $(".login").append("<span>Login</span>");
            $("script[src='js/main.js']").replaceWith("<script src='js/main.js'></script>");

            if (!$("script[src='js/signup-form-validation.js']").length) {
                $("body").after("<script src='js/signup-form-validation.js'></script>");
            } else {
                $("script[src='js/signup-form-validation.js']").replaceWith("<script src='js/signup-form-validation.js'></script>");
            }

            $(".card-dismiss").click(function () {
                $("#signup-container").remove();
            });
        });
    });

   






    


});