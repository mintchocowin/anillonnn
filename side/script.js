//클릭이벤트
// const asidebutton01 = document.querySelector(".aside-logo-login");
// const asidehidden = document.querySelector(".aside-hidden");
// const asideheaderx = document.querySelector(".aside-header-x");
// const asidelogo = document.querySelector(".aside-logo");

// asidebutton01.addEventListener("click", function () {
//   asidehidden.style.display = "block";
//   asidelogo.style.display = "none";
//   asidepopup.style.display = "none";
// });

// asideheaderx.addEventListener("click", function () {
//   asidehidden.style.display = "none";
//   asidelogo.style.display = "block";
//   asidepopup.style.display = "block";
// });

//스크롤up 사라짐
// const asidechevronup = document.querySelector(".aside-logo-chevron-up");
// const asidechevrondown = document.querySelector(".aside-logo-chevron-down");

// const asidebuttonshow = function () {
//   window.scrollY > window.innerHeight
//     ? asidechevronup.classList.add("show")
//     : asidechevronup.classList.remove("show");
// };
// window.addEventListener("scroll", asidebuttonshow);

스크롤업;
// const scrollWindowup = function () {
//   if (window.scrollY != 0) {
//     setTimeout(function () {
//       window.scrollTo(0, window.scrollY - 50);
//       scrollWindowup();
//     }, 10);
//   }
// };

// asidechevronup.addEventListener("click", scrollWindowup);
const scrollTopButton = document.querySelector(".aside-logo-chevron-upshow");

function scrollToTop() {
  window.scrollTo({
    top: 0,
  });
}

scrollTopButton.addEventListener("click", scrollToTop);

//scroll다운

// const scrollWindowdown = function () {
//   setTimeout(function () {
//     window.scrollTo(0, window.scrollY + 50);
//     scrollWindowdown();
//   }, 10);
// };
//클릭이벤트
// asidechevrondown.addEventListener("click", scrollWindowdown);

// const asidepopup = document.querySelector(".aside-popup");
// const asidepopuptexttodayclose = document.querySelector(
//   ".aside-popup-text-todayclose"
// );
// const asidepopuptextclose = document.querySelector(".aside-popup-text-close");
// console.log(asidepopup);

// asidepopuptextclose.addEventListener("click", function () {
//   asidepopup.style.display = "none";
// });

//팝업슬라이드
const container = document.querySelector(".aside-popup-image");
console.log(container);
const buttons = document.querySelectorAll(".button");
console.log(buttons);

const imgs = [
  "aside-popup-image1.jpg",
  "aside-popup-image2.jpg",
  "aside-popup-image3.jpg",
];

const imgSrc = `./image/${imgs[0]}`;
src.value = imgSrc;
imgWidth.value = "231";
img.setAttributeNode(imgWidth);
img.setAttributeNode(src);
container.appendChild(img);

let i = 0;
const changeImg = (direction) => {
  if (direction === "next") {
    i++;
    if (i >= imgs.length) {
      i = 0;
    }
  } else if (direction === "prev") {
    i--;
    if (i < 0) {
      i = imgs.length - 1;
    }
  }
  src.value = `./image/${imgs[i]}`;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const direction = e.target.id === "left" ? "prev" : "next";
    changeImg(direction);
  });
});

let timer = undefined;
const autoSlide = () => {
  if (timer === undefined) {
    timer = setInterval(() => {
      changeImg("next");
    }, 3000);
  }
};

autoSlide();
