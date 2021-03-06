
$(document).ready(function () {
    $('.popular-place_list').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeech: 2000,
        daggable: false,
        prevArrow: `<button type='button' class='slick-prev pull-left'><ion-icon name="caret-back-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next pull-right'><ion-icon name="caret-forward-outline"></ion-icon></button>`,
        responsive: [
          {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                arrows: false,
            }

          },
       
            {
              breakpoint: 575,
              settings: {
                  slidesToShow: 1,
                  arrows: false,
              }
  
            }
        ]

    });
});

$(document).ready(function () {
    $('.suggestion_list').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        /*  autoplay: true,
            autoplaySpeech: 2000, */
        daggable: false,

        prevArrow: `<button type='button' class='slick-prev pull-left'><ion-icon name="caret-back-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next pull-right'><ion-icon name="caret-forward-outline"></ion-icon></button>`,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                  slidesToShow: 3,
                  arrows: false,
              }
  
            },
         
              {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
    
              }
          ]
   
    });
});

$(document).ready(function () {
    $('.discovery_list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeech: 2000,
        daggable: false,
        prevArrow: `<button type='button' class='slick-prev pull-left'><ion-icon name="caret-back-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next pull-right'><ion-icon name="caret-forward-outline"></ion-icon></button>`,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                  slidesToShow: 2,
                  arrows: false,
              }
  
            },
         
              {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
    
              }
          ]
    });
});


/* TAB */

$(document).ready(function () {
    $('.information').show();
    $('.tab_list li:first').addClass('active');

    $(".tab_list li").click(function () {
        $(this).addClass('active').siblings().
            removeClass("active");
        $(".tab_contaier-area > div").hide();
        $($(this).data("value")).fadeIn();
    });
});


/* FORM */
$(document).ready(function () {
    //Khi b??n ph??m ???????c nh???n v?? th??? ra s??? ch???y
    $("#contact-form").validate({
        rules: {

            name: "required",
            phonenumber: {
                required: true,
                minlength: 10,

            },
            email: {
                required: true,
                Email: true,
                remote: "check-email.php"
            },

            comment: {
                required: true,
                minlength: 100
            },
        },

        messages: {
            email: "Nh???p sai , email ph???i bao g???m \"@\" ho???c t??n mail",
            name: "Vui l??ng nh???p t??n h???",
            phonenumber: "Vui l??ng nh???p s??? ??i???n tho???i",
            comment: {
                required: "Vui l??ng nh???p comment",
                minlength: "Comment ph???i ch???a ????? ho???c nhi???u h??n 100 k?? t???."
            },
        }
    });
});


/* Pagination */
$(document).ready(function(){
    $("#tab").pagination({
        items: 2,
        contents: 'contents',
        previous: 'Previous',
        next: 'Next',
        position: 'bottom',
    });
});

/* ROOM */
$(document).ready(function(){
    $('.room-images_slider--js > img').click(function(){
        var $smallImages = $(this).attr('src');
        $('.room-image_big-screen--js > img').attr('src', $smallImages);
    });
});


$(document).ready(function(){
    $('.summary_text-read-more').click(function(){
        $('.text-blur').toggle();
    });

});


/* SERVICE RELATED */
$(document).ready(function () {
    $('#list').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
         autoplay: true,
            autoplaySpeech: 2000,
        daggable: false,

        prevArrow: `<button type='button' class='slick-prev pull-left'><ion-icon name="caret-back-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next pull-right'><ion-icon name="caret-forward-outline"></ion-icon></button>`,
   
    });
});


$(document).ready(function() {
  $(".lgbt_heading").lettering();
});

  $(document).ready(function () {
    $('#table1').DataTable()({
        
    });
   
  });

