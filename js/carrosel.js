let swiperHome = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function checkWindowSize() {
  if (window.innerWidth <= 1200) {
    swiperHome.params.slidesPerView = 1;
  } else {
    swiperHome.params.slidesPerView = 2;
  }

  swiperHome.update();
}

checkWindowSize();
window.addEventListener("resize", checkWindowSize);

var swiper = new Swiper(".mySwiper-carrosel-h", {
  spaceBetween: 20,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination-carrosel-h",
    clickable: true,
  },
});

var swiperProdutos = new Swiper(".mySwiper-carrosel-produtos", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination-carrosel-produtos",
    clickable: true,
  },
});

var swiperCursos = new Swiper(".mySwiper-carrosel-cursos", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 10,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiperAval = new Swiper(".mySwiper-avaliacao", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 24,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// function checkWindowSizeAval() {
//   if (window.innerWidth <= 1200) {
//     swiperAval.params.slidesPerView = 1;
//   } else {
//     swiperAval.params.slidesPerView = 2;
//   }

//   swiperAval.update();
// }

// checkWindowSizeAval();
// window.addEventListener("resize", checkWindowSizeAval);

var swiperFooter = new Swiper(".mySwiper-footer", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 24,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination-footer",
    clickable: true,
  },
});

function checkWindowSizeFooter() {
  if (window.innerWidth <= 600) {
    swiperFooter.params.slidesPerView = 1;
  } else {
    swiperFooter.params.slidesPerView = 2;
  }

  swiperFooter.update();
}

checkWindowSizeFooter();
window.addEventListener("resize", checkWindowSizeFooter);

// function checkWindowSizeFooter() {
//   if (window.innerWidth <= 1270) {
//     swiperFooter.params.slidesPerView = 1;
//   } else {
//     swiperFooter.params.slidesPerView = 2;
//   }

//   swiperFooter.update();
// }

// checkWindowSizeFooter();
// window.addEventListener("resize", checkWindowSizeFooter);

function checkWindowSizeProdutos() {
  if (window.innerWidth < 993) {
    swiperProdutos.params.slidesPerView = 2;
  } else {
    swiperProdutos.params.slidesPerView = 3;
  }

  if (window.innerWidth < 767) {
    swiperProdutos.params.slidesPerView = 1;
  } else {
    swiperProdutos.params.slidesPerView = 2;
  }

  swiperProdutos.update();
}

checkWindowSizeProdutos();
window.addEventListener("resize", checkWindowSizeProdutos);

var swiper = new Swiper(".mySwiperEquipe", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".myPNB", {
  slidesPerView: 2,
  spaceBetween: 24,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".el-pagination",
    clickable: true,
  },
});

// var splide = new Splide(".splide", {
//   perPage: 1,
//   rewind: true,
// });

// splide.mount();

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

// Adicionar ouvintes de evento para os links
link1.addEventListener("click", (event) => {
  event.preventDefault(); // Impede o comportamento padrão do link
  showDiv(div1, div2, link1, link2);
});

link2.addEventListener("click", (event) => {
  event.preventDefault(); // Impede o comportamento padrão do link
  showDiv(div2, div1, link2, link1);
});

// Função para mostrar a div correta e aplicar a classe "active-border"
function showDiv(showElement, hideElement, showLink, hideLink) {
  showElement.style.display = "block";
  hideElement.style.display = "none";

  showLink.classList.add("active-border");
  hideLink.classList.remove("active-border");
}

$(document).ready(function () {
  $("#voltar-ao-topo").click(function (event) {
    event.preventDefault();

    $("html, body").animate({ scrollTop: 0 }, 800);
  });
});

// $(document).ready(function () {
//   function animateImage() {
//     $(".animate-img").animate({ top: "-130px" }, 200, function () {
//       // Após subir, inverte a direção para descer
//       $(".animate-img").animate({ top: "130px" }, 200, animateImage);
//     });
//   }

//   animateImage();
// });

//////////
