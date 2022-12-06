const slider = document.querySelectorAll(".slide");
const skilTran = document.querySelector(".skil-tran");
const sections = document.querySelector(".asd");
const progressSpan = document.querySelector(".progress-span");
const phoneImg = document.querySelectorAll(".phone-img");
const recomenUser = document.querySelectorAll(".recomen-user");
const rcnBulet = document.querySelectorAll(".rcn-bulet");
const navLi = document.querySelectorAll(".nav-li");
const navA = document.querySelectorAll(".nav-a");
const idWork = document.querySelector("#idWork");
const idMockup = document.querySelector("#idMockup");
const idPsd = document.querySelector("#idPsd");
const idLOgo = document.querySelector("#idLOgo");
const idPresen = document.querySelector("#idPresen");
const idIcon = document.querySelector("#idIcon");
const navbarInfo = document.querySelectorAll(".navbar-info");
const navbarImg = document.querySelectorAll(".navbar-img");
const formulaO = document.querySelector(".f1");
const forImg2 = document.querySelector(".f2");
const idWorkImg = document.querySelector("#idWork-img");

function navbarFun() {
  navLi.forEach((el, index) => {
    console.log(el);
  });
}

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

// let nav = 0;

// function navbarFunActive() {
//   navA.forEach((el,index) =>{
//     if(nav ===index) {
//       el.classList.add("appear")
//     }else{
//       el.classList.remove("appear")
//     }
//   })
// }
let nav = 0;

// function navbarFun() {
//   navbarImg.forEach((el, index) => {
//     if (nav === index) {
//       el.classList.add("opaci");
//     } else {
//       el.classList.remove("opaci");
//     }
//   });
// }

// idWork.addEventListener("click", () => {
//   console.log(111111);
//   idWorkImg.classList.toggle("opaci");
// });

// function navbarFun() {
//   navbarImg.forEach((el, index) => {
//     if (nav === index) {
//       idWork.addEventListener("click", () => {
//         console.log(111111);
//         idWorkImg.classList.toggle("opaci");
//       });
//     } else {
//       el.classList.add("noneimg");
//     }
//   });
// }
// navbarFun();

// idWork.addEventListener("click", function () {
//   //let pressedItem = document.getElementById(idWork);
//   console.log(1234);
//   // navbarInfo.forEach((el, index) => {
//   //   el.classList.add("opaci");
//   // });
//   // idWorkImg.classList.toggle("opaci");
// });

// 6 seqciaaaa xelovnebis nimushi:)

navLi.forEach((el) =>
  el.addEventListener("click", (e) => {
    let pressedItemID = e.target.getAttribute("id");
    if (pressedItemID != "idAll") {
      showReferenceImage(pressedItemID);
    } else {
      showAllImages();
    }
  })
);

function showReferenceImage(itemID) {
  let activeImage = itemID + "-img";
  //console.log(activeImage);

  navbarInfo.forEach((el) => {
    let x = el.getAttribute("id");
    console.log(x);
    if (activeImage != x) {
      el.classList.add("opaci");
    } else {
      el.classList.remove("opaci");
    }
  });
}

function showAllImages() {
  navbarInfo.forEach((el) => {
    el.classList.remove("opaci");
  });
}
