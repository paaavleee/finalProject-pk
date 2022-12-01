const slider = document.querySelectorAll(".slide");
const skilTran = document.querySelector(".skil-tran");
const sections = document.querySelector(".asd");
const progressSpan = document.querySelector(".progress-span");
const phoneImg = document.querySelectorAll(".phone-img");
const recomenUser = document.querySelectorAll(".recomen-user");
const rcnBulet = document.querySelectorAll(".rcn-bulet");

let activeIndex = 0;

function activeIndecFun() {
  slider.forEach((slide, index) => {
    if (activeIndex === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

function nextSlide() {
  // console.log("next slide");

  if (activeIndex === slider.length - 1) {
    activeIndex = 0;
  } else {
    activeIndex++;
  }

  activeIndecFun();
}
activeIndecFun();

function startAutoSlidingFn() {
  sliderIntervalId = setInterval(nextSlide, 5000);
}

function initSlider() {
  activeIndecFun();
  startAutoSlidingFn();
}
initSlider();

// section 2

// function scrollElement() {
//     progressSpan.forEach((span) => {
//         span.style.width = span.dataset.width;
//     });

// };

// window.addEventListener('scroll',() => {
//     console.log('scolled')
//     scrollElement();
// })
let activeIn = 0;

function activeUser() {
  recomenUser.forEach((elem, index) => {
    if (activeIn === index) {
      elem.classList.add("appear");
    } else {
      elem.classList.remove("appear");
    }
  });
}

function nextBulet() {
  rcnBulet.forEach((el, index) => {
    el.addEventListener("click", () => {
      console.log(11111);
      activeIn = index;

      activeUser(rcnBulet);
    });
  });
}

function recomenNextUser() {
  activeUser();
  nextBulet();
}
recomenNextUser();
