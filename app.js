

let moon = document.querySelector(".moon");
let dark_span = document.querySelector(".dark_span");
let sun = document.querySelector(".sun");
let light_span = document.querySelector(".light_span");

let theme_btn = document.querySelector(".theme_btn");
let menu_btn = document.querySelector(".menu_btn");
let sidebar = document.querySelector(".sidebar");
let close_btn = document.querySelector(".close_btn");
let body = document.querySelector("body");
let sidebar_link = document.querySelectorAll(".sidebar_link");
let side_theme = document.querySelector(".theme_btn2");

sidebar_link.forEach(link => {
    link.addEventListener("click", () => {
        animate();
    })
});
function animate() {
    sidebar.classList.toggle("sidebar_active");
}

menu_btn.addEventListener("click", () => {
    animate();
})
close_btn.addEventListener("click", () => {
    animate();
})


function darkmode() {
    body.classList.toggle("dark");
}
side_theme.addEventListener("click",()=>{
    if (dark_span.classList.contains("hide") && moon.classList.contains("hide")) {
        dark_span.classList.remove("hide");
        moon.classList.remove("hide");
        darkmode();

        light_span.classList.add("hide");
        sun.classList.add("hide");

    }
    else {
        light_span.classList.remove("hide");
        sun.classList.remove("hide");
        darkmode();

        dark_span.classList.add("hide");
        moon.classList.add("hide");

    }
})
theme_btn.addEventListener("click", () => {
    if (dark_span.classList.contains("hide") && moon.classList.contains("hide")) {
        dark_span.classList.remove("hide");
        moon.classList.remove("hide");
        darkmode();

        light_span.classList.add("hide");
        sun.classList.add("hide");

    }
    else {
        light_span.classList.remove("hide");
        sun.classList.remove("hide");
        darkmode();

        dark_span.classList.add("hide");
        moon.classList.add("hide");

    }
})




var swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    // grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    speed: 600,
    initialSlide: 1,
    coverflowEffect: {
        rotate: 0,
        stretch: -50,
        depth: 150,
        modifier: 1,
        // slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,  // Make pagination clickable
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});



let faqs = document.querySelectorAll(".faq");
let faq_ans = document.querySelector(".faq_ans");
let icons = document.querySelectorAll(".faq_ques i");
faqs.forEach(faq => {
    faq.addEventListener("click", () => {

        faq.children[0].children[1].classList.toggle("icon_active");

        faqs.forEach(other_faq => {
            let other_faq_child = other_faq.children[1];
            if (other_faq !== faq) {
                other_faq_child.classList.remove("visible");
            }

        })
        let faq_child = faq.children[1];
        faq_child.classList.toggle("visible");

    })
})


// let info_img = document.querySelector("#lil_info img");
// window.addEventListener("scroll", () => {
//     let scrollPos = window.scrollY;
//     info_img.style.transform = `translateY(${scrollPos * -0.3}px)`; // Adjust speed here
// });
const lenis = new Lenis({
    duration: 1.2
});
lenis.on('scroll', (e) => {
    console.log(e);
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

let nav_pcs = document.querySelectorAll(".nav_pc a");
let logo = document.querySelector(".logo");
let sidebar_icon = document.querySelector(".menu_btn");
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('header');


    if (window.scrollY > window.innerHeight) {
        navbar.classList.add('scrolled');
        nav_pcs.forEach(link => {
            if (body.classList.contains("dark")) {
                link.style.color = "white";
                logo.style.color = "white";
                sidebar_icon.style.color = "white";
            }

            else {
                link.style.color = "#132326";
                logo.style.color = "#132326";
                sidebar_icon.style.color = "#132326";
            }
        });

    } 
    else {
        navbar.classList.remove('scrolled');

        nav_pcs.forEach(link => {
            link.style.color = "white";
            logo.style.color = "white";
            sidebar_icon.style.color = "white";
        });

    }
});