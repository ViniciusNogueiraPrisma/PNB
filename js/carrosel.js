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
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination-carrosel-h",
  },
});

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

var splide = new Splide(".splide", {
  perPage: 1,
  rewind: true,
});

splide.mount();

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

//////////
