// Simple background slider
const hero = document.querySelector(".hero");

const images = [
  "assets/images/background/hero1.jpg",
  "assets/images/background/hero2.jpg",
  "assets/images/background/hero3.jpg"
];

let i = 0;

setInterval(() => {
  hero.style.background = `url(${images[i]}) center/cover`;
  i = (i + 1) % images.length;
}, 4000);
