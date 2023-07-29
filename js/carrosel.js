var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
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

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

// Adicionar ouvintes de evento para os links
link1.addEventListener("click", (event) => {
  event.preventDefault(); // Impede o comportamento padrão do link
  showDiv(div1);
  hideDiv(div2);
});

link2.addEventListener("click", (event) => {
  event.preventDefault(); // Impede o comportamento padrão do link
  showDiv(div2);
  hideDiv(div1);
});

// Funções para mostrar e esconder as divs
function showDiv(element) {
  element.style.display = "block";
}

function hideDiv(element) {
  element.style.display = "none";
}
