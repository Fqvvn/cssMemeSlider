const IMAGES = document.querySelector(".images");
const SLIDER = Array.from(document.querySelectorAll(".inputs"));

SLIDER.forEach((switchElem, index) => {
    switchElem.addEventListener('click', function() {
        IMAGES.style.transform = `translateX(-${index * 475}px)`;
      });
});
