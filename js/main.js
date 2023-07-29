function debounce(callback, delay) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
}

// observes the input's :focus and :focusout event inside the search box and styles its parent element.

$(".searchbox input").focus(function () {
  $(".searchbox .input-group").addClass("focused-border");
});

$(".searchbox input").focusout(function () {
  $(".searchbox .input-group").removeClass("focused-border");
});

// opens and closes the search box.

$(".open-searchbox, .close-searchbox").click(function () {
  $(".searchbox").toggleClass("active");
  $("body").toggleClass("open-menu");
});

// manages the status of the mobile menu.

$(".toggle-mobile-menu").click(function () {
  $(".mobile-menu-div").toggleClass("active");
  $(".toggle-mobile-menu").toggleClass("active");
  $(".header").toggleClass("open-menu");
  $("body").toggleClass("open-menu");
  $("body").toggleClass("trava-scroll");
});

$(".button-mapa-site").click((e) => {
  $(".button-mapa-site").toggleClass("active");
});

// Animação do número

if (window.counterUp) {
  const counterUp = window.counterUp.default;

  const callback = (entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting && !el.classList.contains("is-visible")) {
        counterUp(el, {
          duration: 2000,
          delay: 16,
        });
        el.classList.add("is-visible");
      }
    });
  };

  const IO = new IntersectionObserver(callback, { threshold: 1 });

  const el = document.querySelectorAll(".counter");

  if (el) {
    el.forEach((item) => {
      IO.observe(item);
    });
  }
}

// Animações para aparecer o elemento
AOS.init({
  once: true,
});

window.addEventListener(
  "scroll",
  debounce(() => {
    AOS.refresh();
  }, 200)
);

// Tooltip

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Contraste

function accessApplyTheme(theme) {
  localStorage.setItem("access_theme", theme);

  if (theme == "dark") {
    $("body").attr("data-theme", "dark");
  } else {
    $("body").attr("data-theme", "light");
  }
}

var access_theme = "light";

if (localStorage.getItem("access_theme")) {
  access_theme = localStorage.getItem("access_theme");
  accessApplyTheme(access_theme);
}

$("#contrast-toggle").on("click", function (e) {
  if (access_theme == "light") {
    access_theme = "dark";
  } else {
    access_theme = "light";
  }
  accessApplyTheme(access_theme);
});

$(
  ".header .nav-menu-header .header-navigation-item > .dropdown-toggle"
).removeAttr("data-bs-toggle");

document
  .querySelectorAll(".header .nav-menu-header .header-navigation-item")
  .forEach((i) => {
    const dropdown = i.querySelector(".dropdown-menu");
    const toggle = i.querySelector(".dropdown-toggle");
    document.querySelectorAll(".header .nav-menu-header ").forEach((i) => {
      const dropdown = document.querySelector(".div-submenu");
      const header = document.querySelector(".header");

      i.addEventListener("mouseover", () => {
        toggle.classList.add("active");
        header.classList.add("active");
        dropdown.classList.add("show");
        setTimeout(() => {
          header.classList.add("active");
          dropdown.classList.add("show");
          dropdown.style.opacity = "1";
        }, 10);
      });

      i.addEventListener("mouseleave", () => {
        dropdown.style.opacity = "0";
        toggle.classList.remove("active");
        header.classList.remove("active");
        setTimeout(() => {
          dropdown.classList.remove("show");
          header.classList.remove("active");
        }, 100);
      });
    });
  });

/* Carousels */

// $(document).ready(function () {

//   $('.timeline-content-historia').slick({
//     asNavFor: '.nav-timeline',
//     slidesToShow: 1,
//     slidesToScroll: 1,

//     arrows: true,
//     infinite: false,
//     useTransform: true,
//     adaptiveHeight: true,
//     draggable: true,
//     responsive: [
//       {
//         breakpoint: 767,
//         settings: {
//           arrows: false,
//         }
//       }
//     ]
//   });

//   $('.nav-timeline').slick({
//     asNavFor: '.timeline-content-historia',
//     slidesToShow: 7,
//     slidesToScroll: 1,

//     dots: false,
//     arrows: true,
//     useTransform: true,
//     infinite: false,
//     focusOnSelect: true,

//     responsive: [
//       {
//         breakpoint: 991,
//         settings: {
//           slidesToShow: 5,
//           dots: false
//         }
//       }, {
//         breakpoint: 767,
//         settings: {
//           slidesToShow: 4,
//         }
//       }, {
//         breakpoint: 475,
//         settings: {
//           slidesToShow: 2,
//         }
//       }
//     ]
//   });

//   $('.list-nav-news').slick({
//     slidesToShow: 12,
//     slidesToScroll: 1,
//     asNavFor: '.for-news-conteudo',
//     dots: false,
//     focusOnSelect: true,
//     infinite: false,
//     centerMode: false,
//     arrows: true,
//     waitForAnimate: false,
//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 8,
//         },
//       },
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 6,
//           centerMode: false,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 4,
//           centerMode: false,
//         },
//       },
//       {
//         breakpoint: 475,
//         settings: {
//           slidesToShow: 2,
//           centerMode: false,
//         },
//       },
//     ],
//   });

//   $('.for-news-conteudo').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     adaptiveHeight: true,
//     infinite: false,
//     fade: true,
//     asNavFor: '.list-nav-news',
//     waitForAnimate: false,
//   });

// })

/* Focus no input */

const inputs = document.querySelectorAll(
  ".div-input input, .div-input select, .div-input textarea"
);

inputs.forEach((input) => {
  input.addEventListener("focus", (e) => {
    input.parentNode.classList.add("focus");
  });
  input.addEventListener("blur", (e) => {
    if (input.value == "") {
      input.parentNode.classList.remove("focus");
    }
  });
});

// Código responsável por fazer o collapse das tables.

$(".see-more_tableCollapse").parent().next().css("display", "none");

$(".see-more_tableCollapse").on("click", function () {
  $(this).parent().next().fadeToggle();
});

const tableWithScroll = document.querySelector(".table-responsive");

if (tableWithScroll) {
  if (
    tableWithScroll.scrollWidth !=
    tableWithScroll.scrollLeft + tableWithScroll.clientWidth
  ) {
    $(tableWithScroll).addClass("border-right");
    $(tableWithScroll).removeClass("border-left");
  }

  $(tableWithScroll).on("scroll", () => {
    if (
      tableWithScroll.scrollWidth ==
      tableWithScroll.scrollLeft + tableWithScroll.clientWidth
    ) {
      $(tableWithScroll).removeClass("border-right");
      $(tableWithScroll).addClass("border-left");
      $(tableWithScroll).removeClass("border-right-left");
    } else if (tableWithScroll.scrollLeft > 10) {
      $(tableWithScroll).removeClass("border-right");
      $(tableWithScroll).removeClass("border-left");
      $(tableWithScroll).addClass("border-right-left");
    } else {
      $(tableWithScroll).addClass("border-right");
      $(tableWithScroll).removeClass("border-left");
      $(tableWithScroll).removeClass("border-right-left");
    }
  });
}

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

/* Scroll to accordion */
$(document).ready(function () {
  let buttonAccordions = document.querySelectorAll(
    ".accordion:not(#accordionMenuMobile) button.accordion-button"
  );
  buttonAccordions.forEach((i) => {
    i.addEventListener("click", () => {
      if (i.parentElement.parentElement.classList.contains("open")) {
        i.parentElement.parentElement.classList.remove("open");
      } else {
        buttonAccordions.forEach((item) => {
          item.parentElement.parentElement.classList.remove("open");
        });
        i.parentElement.parentElement.classList.add("open");
      }
      setTimeout(() => {
        if (!i.classList.contains("collapsed")) {
          const id = i.getAttribute("data-bs-target");
          const section = $(id);
          const topo = section.offset().top;
          window.scrollTo({
            top: topo - 230,
            behavior: "smooth",
          });
        }
      }, 410);
    });
  });
});

if (window.matchMedia("(min-width: 991px)").matches) {
  document
    .querySelectorAll(".menu-nav .dropdown .dropdown-menu")
    .forEach((i) => {
      i.classList[i.classList.contains("show") ? "remove" : "add"]("show");
    });
}

// function stopVideo() {
//   let leg = $(".modalVideo iframe").attr("src");
//   $(".modalVideo iframe").attr("src", leg);
// }
// if ($(".modalVideo")) {
//   $(".modalVideo").on("click", () => {
//     setTimeout(() => {
//       if (!$(".modalVideo").hasClass("show")) {
//         stopVideo();
//       }
//     }, 200);
//   });
// }

// document.querySelectorAll(".nav-esg .nav-item").forEach((item) => {
//   function verifyTab() {
//     if (item.querySelector(".nav-link.active")) {
//       document
//         .querySelectorAll(".nav-esg .nav-item")
//         .forEach((e) => e.classList.remove("isActive"));
//       item.classList.add("isActive");

//       if (item.querySelector(".nav-link.active").innerText == "Colaboradores") {
//         if (window.matchMedia("(max-width: 991px)").matches) {
//           $(".list-img-bem-estar").slick({
//             slidesToShow: 2,
//             slidesToScroll: 1,
//             infinite: false,
//             arrows: true,
//             dots: true,
//             autoplay: true,
//             waitForAnimate: true,
//             autoplaySpeed: 4000,
//             speed: 700,
//             fade: false,
//             responsive: [
//               {
//                 breakpoint: 575,
//                 settings: {
//                   slidesToShow: 1,
//                 },
//               },
//             ],
//           });
//         }
//       } else if (item.querySelector(".nav-link").innerText == "Sociedade") {
//         if (window.matchMedia("(max-width: 991px)").matches) {
//           $(".list-cartinhas-natal").slick({
//             slidesToShow: 2,
//             slidesToScroll: 1,
//             infinite: false,
//             arrows: true,
//             dots: true,
//             autoplay: true,
//             waitForAnimate: true,
//             autoplaySpeed: 4000,
//             speed: 700,
//             fade: false,
//             responsive: [
//               {
//                 breakpoint: 575,
//                 settings: {
//                   slidesToShow: 1,
//                 },
//               },
//             ],
//           });
//         }
//       }
//     } else {
//       item.classList.remove("isActive");
//     }
//   }

//   item.addEventListener("click", () => {
//     verifyTab();
//   });

//   verifyTab();
// });

// $sync2 = $(".carousel-nav");

// duration = 300;

// $sync2
//   .owlCarousel({
//     //owl carousel init
//     dots: false,
//     nav: true,
//     autoHeight: true,
//     responsive: {
//       0: {
//         items: 2,
//       },
//       600: {
//         items: 4,
//       },
//       991: {
//         items: 6,
//       },
//       1200: {
//         items: 8,
//       },
//       1600: {
//         items: 10,
//       },
//     },
//   })
//   .on("click", ".owl-item", function () {
//     $sync1.trigger("to.owl.carousel", [$(this).index(), duration, true]);
//   });

// $(".owl-carousel .owl-item .nav-item").on("click", function (e) {
//   $(".owl-carousel").trigger("refresh.owl.carousel");
// });
