var slideIndex_galery = 1;
showSlides_galery(slideIndex_galery);

function currentSlide_galery(n) {
    showSlides_galery(slideIndex_galery = n);
}

function plusSlide_galery() {
    showSlides_galery(slideIndex_galery += 1);
}

function minusSlide_galery() {
    showSlides(slideIndex_galery -= 1);
}

function showSlides_galery(n) {
    var i;
    var slides_galery = document.getElementsByClassName("galery-div-slide");

    var dots_galery = document.getElementsByClassName("slider-img_item");

    if (n > slides_galery.length) {
        slideIndex_galery = 1
    }
    if (n < 1) {
        slideIndex_galery = slides_galery.length
    }

    for (i = 0; i < slides_galery.length; i++) {
        slides_galery[i].style.display = "none";
    }

    for (i = 0; i < dots_galery.length; i++) {
        dots_galery[i].className = dots_galery[i].className.replace(" active", "");
    }
    slides_galery[slideIndex_galery - 1].style.display = "flex";

    dots_galery[slideIndex_galery - 1].className += " active";
}



function open_menu() {
    $('.nav-mobile-div').css({
        "display": "flex"
    })
    $('body').css({
        "overflow": "hidden"
    })
}

function exit_menu() {
    $('.nav-mobile-div').css({
        "display": "none"
    })
    $('body').css({
        "overflow": "auto"
    })
}

function open_register() {
    $('.register-online-container').css({
        "display": "flex"
    })
    $('body').css({
        "overflow": "hidden"
    })
}

function exit_register() {
    $('.register-online-container').css({
        "display": "none"
    })
    $('body').css({
        "overflow": "auto"
    })
}

function open_menu_part() {
    $('.nav-mobile').css({
        "display": "flex"
    })
    $('.nav-mobile-services').css({
        "display": "none"
    })
    $('.menu').css({
        "background-color": "#00D2D2"
    })
    $('.services').css({
        "background-color": "white"
    })

}

function open_services_part() {
    $('.nav-mobile').css({
        "display": "none"
    })
    $('.nav-mobile-services').css({
        "display": "flex"
    })
    $('.menu').css({
        "background-color": "white"
    })
    $('.services').css({
        "background-color": "#00D2D2"
    })
}

function open_answer_one() {
    $('.minus-1').css({
        "display": "flex"
    })
    $('.plus-1').css({
        "display": "none"
    })
    $('.answer-1').css({
        "display": "flex"
    })

}

function exit_answer_one() {
    $('.minus-1').css({
        "display": "none"
    })
    $('.plus-1').css({
        "display": "flex"
    })
    $('.answer-1').css({
        "display": "none"
    })

}

function open_answer_two() {
    $('.minus-2').css({
        "display": "flex"
    })
    $('.plus-2').css({
        "display": "none"
    })
    $('.answer-2').css({
        "display": "flex"
    })

}

function exit_answer_two() {
    $('.minus-2').css({
        "display": "none"
    })
    $('.plus-2').css({
        "display": "flex"
    })
    $('.answer-2').css({
        "display": "none"
    })

}

function open_answer_three() {
    $('.minus-3').css({
        "display": "flex"
    })
    $('.plus-3').css({
        "display": "none"
    })
    $('.answer-3').css({
        "display": "flex"
    })

}

function exit_answer_three() {
    $('.minus-3').css({
        "display": "none"
    })
    $('.plus-3').css({
        "display": "flex"
    })
    $('.answer-3').css({
        "display": "none"
    })

}

function open_answer_four() {
    $('.minus-4').css({
        "display": "flex"
    })
    $('.plus-4').css({
        "display": "none"
    })
    $('.answer-4').css({
        "display": "flex"
    })

}

function exit_answer_four() {
    $('.minus-4').css({
        "display": "none"
    })
    $('.plus-4').css({
        "display": "flex"
    })
    $('.answer-4').css({
        "display": "none"
    })

}

function open_answer_five() {
    $('.minus-5').css({
        "display": "flex"
    })
    $('.plus-5').css({
        "display": "none"
    })
    $('.answer-5').css({
        "display": "flex"
    })

}

function exit_answer_five() {
    $('.minus-5').css({
        "display": "none"
    })
    $('.plus-5').css({
        "display": "flex"
    })
    $('.answer-5').css({
        "display": "none"
    })

}