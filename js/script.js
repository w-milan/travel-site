let navbar = document.querySelector('.header .navbar'); 

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = () => {
  navbar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form'); 

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () => {
  searchForm.classList.remove('active');
}

window.onscroll = () => {
  navbar.classList.remove('active');
}

// Swipper JS 
var swiper = new Swiper(".home-slider", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});