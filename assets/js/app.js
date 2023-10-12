function openNav() {
    document.getElementById("Menu").style.left = "0%";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";

}
function closeNav() {
    document.getElementById("Menu").style.left = "-100%";
    document.getElementsByTagName("body")[0].style.overflow = "scroll";
}

$(".slick-slider2").slick({
    slidesToShow: 1.05,
    infinite: true,
    slidesToScroll: 1,
    centermode: true,
    cssEase: "linear",
    autoplay: false,
    arrows: true,
    prevArrow: $(".prev1"),
    nextArrow: $(".Next1"),
    autoplaySpeed: 0,
    responsive: [

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            }
        },
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            }
        }
    ]

});


$(".slick-slider03").slick({
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: false,
    arrows: true,
    prevArrow: $(".prev2"),
    nextArrow: $(".Next2"),
    autoplaySpeed: 0,
    responsive: [

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            }
        },
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            }
        }
    ]

});





function updateValue(value) {
    document.getElementById('range-value').textContent = value;
}

$('.myslider_1').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 3000,
    centermode: true,
    slidesToShow: 5,
    pauseOnHover: true,
    slidesToScroll: 1,
    responsive: [

        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                centermode: true,
                pauseOnHover: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                centermode: true,
                pauseOnHover: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                pauseOnHover: true,
            }
        },
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                centermode: true,
                pauseOnHover: true,
            }
        }
    ]
});









$('.myslider_2').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [


        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
            }
        },
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            }
        }
    ]
});











// Picture Tabs

function showTab(tabIndex) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));

    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));

    tabContents[tabIndex].classList.add('active');

    tabButtons[tabIndex].classList.add('active');
}




window.addEventListener("scroll", function () {
    var button = document.querySelector(".back-to-top");
    if (window.pageYOffset > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
});

document.querySelector(".back-to-top").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



// ************Preloder*************
setTimeout(() => {
    const box = document.getElementById("box");

    box.style.display = "none";

    document.body.classList.remove("overflow-hidden");
}, 3000);


// ************ AOS Animation ************
AOS.init({
    duration: 1000,
    once: true,
    disable: 'mobile'

});







