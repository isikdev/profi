$('.licenses__img-wrapper').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: true,
    responsive: [
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});

$(document).ready(function () {
    $('#accordeon .acc-body').hide();
    $('#accordeon .acc-head').on('click', f_acc);
});

function f_acc() {
    var accBody = $(this).next();

    if (accBody.hasClass('acc-body--open')) {
        accBody.slideUp(900);
        $(this).removeClass('question__acc-btn-active');
    } else {
        $('#accordeon .acc-body').not(accBody).slideUp(900);
        accBody.slideToggle(500);
        $(this).addClass('question__acc-btn-active');

        var btn = $(this);

        var img = btn.find('img');

        if (accBody.hasClass('acc-body--open')) {
            img.css('transform', 'rotate(180deg)');
        } else {
            img.css('transform', 'rotate(0deg)');
        }
    }
}

$('.js-tab-trigger').click(function () {
    var id = $(this).attr('data-tab'),
        content = $('.js-tab-content[data-tab="' + id + '"]');

    $('.js-tab-trigger.active').removeClass('active'); // 1
    $(this).addClass('active'); // 2

    $('.js-tab-content.active').removeClass('active'); // 3
    content.addClass('active'); // 4
});
$(document).ready(function () {
    $("#telephone").inputmask({ "mask": "+7 (999) 999-99-99" });
});
$(document).ready(function () {
    $("#certificate__telephone").inputmask({ "mask": "+7 (999) 999-99-99" });
});

// modalbox tel
// перезвоните мне 
$(".navbar__telget, .modalboxtel__close").click(function() {
    $(".modalbox__tel").toggleClass("modalbox__tel-active");
})
// успех
$(".modalget__contact").click(function(){
    $(".modalbox__tel").toggleClass("modalbox__tel-active");
    $(".modalbox__success").toggleClass("modalbox__success-active");
})
// закрытие успешно
$(".modal__success-close").click(function(){
    $(".modalbox__success").toggleClass("modalbox__success-active");
})

// modalbox comment
$(".give__comment, .modalbox__close-btn").click(function(){
    $(".modalbox__comment").toggleClass("modalbox__comment-active");
})
// успех
$(".modalget__comment").click(function(){
    $(".modalbox__comment").toggleClass("modalbox__comment-active");
    $(".modalbox__success").toggleClass("modalbox__success-active");
})
// закрытие успешно
$(".modal__success-close").click(function(){
    $(".modalbox__success").removeClass("modalbox__success-active");
})

//успех
$(".getcontact").click(function(){
    $(".modalbox__success").toggleClass("modalbox__success-active");
})