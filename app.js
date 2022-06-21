let sliders = document.querySelectorAll(".slider");
let dot = document.querySelector(".dot");
let leftBtn = document.querySelector(".left");
let rightBtn = document.querySelector(".right");
let thumbnail = document.querySelectorAll(".thumbnail");
let thumbImg = document.querySelectorAll(".thumbnail-image");

let currentPosition = 0;
let thumbCount = 0;

function setThumbnail() {
  for (let index = 0; index < thumbImg.length; index++) {
    thumbImg[index].style.opacity = "0.4";
  }
  thumbCount++;
  if (thumbCount > thumbImg.length) {
    thumbCount = 1;
  }

  thumbImg[thumbCount - 1].style.opacity = "1";
}
function activateSlider() {
  let point = document.querySelectorAll(".point");
  for (let index = 0; index < sliders.length; index++) {
    sliders[index].style.transform = `translateX(-${currentPosition}00%)`;
    point[index].classList.remove("active");
  }
  point[currentPosition].classList.toggle("active");
  currentPosition += 1;
  if (currentPosition > sliders.length - 1) {
    currentPosition = 0;
  }
  setThumbnail();
}
setInterval(activateSlider, 7000);

// the left button
leftBtn.addEventListener("click", () => {
  currentPosition = currentPosition - 1;
  if (currentPosition < 1) {
    currentPosition = sliders.length;
  }
  for (let index = 0; index < sliders.length; index++) {
    sliders[index].style.transform = `translateX(-${currentPosition - 1}00%)`;
  }
  setThumbnail();
});

// the right button
rightBtn.addEventListener("click", () => {
  currentPosition += 1;
  if (currentPosition > sliders.length - 1) {
    currentPosition = 0;
  }
  for (let index = 0; index < sliders.length; index++) {
    sliders[index].style.transform = `translateX(-${currentPosition}00%)`;
  }
  setThumbnail();
});

// the dots
sliders.forEach((s) => {
  dot.innerHTML += `<i class="fas fa-dot-circle point"></i>`;
});

for (let index = 0; index < thumbnail.length; index++) {
  thumbnail[index].addEventListener("click", () => {
    thumbnail = index;
    activateSlider();
    thumbCount = index;
    setThumbnail();
  });
}
