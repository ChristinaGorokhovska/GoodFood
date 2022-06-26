// Examples-food scroll
const examplesSwiper = document.querySelector(".examples-food").offsetTop;
const bulletin = document.querySelector(".swiper-pagination");

bulletin.addEventListener("click", () => {
  window.scrollTo({ top: examplesSwiper, behavior: "smooth" });
});

// Animation by scrolling
const animElements = document.querySelectorAll(".animated");

const itemInView = (el, dividend = 1) => {
  const itemTop = el.getBoundingClientRect().top;
  return itemTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
};

const itemOutOfView = (el) => {
  const itemTop = el.getBoundingClientRect().top;
  return itemTop > (window.innerHeight || document.documentElement.clientHeight);
};

const showAnimatedItem = (el) => {
  el.classList.add("scrolled");
};

const hideAnimatedItem = (el) => {
  el.classList.remove("scrolled");
};

const AnimationOnScroll = () => {
  animElements.forEach((el) => {
    console.log(el);
    if (itemInView(el, 1.3)) {
      showAnimatedItem(el);
    } else if (itemOutOfView(el)) {
      hideAnimatedItem(el);
    }
  });
};

window.addEventListener("scroll", () => {
  AnimationOnScroll();
});

AnimationOnScroll();
