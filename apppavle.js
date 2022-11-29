const slider = document.querySelectorAll(".slide");
const skilTran = document.querySelector(".skil-tran");
const sections = document.querySelector(".asd");
const progressSpan = document.querySelector(".progress-span");
const phoneImg = document.querySelectorAll(".phone-img");



let activeIndex = 0;

function activeIndecFun() {
    slider.forEach((slide,index)=>{
        if (activeIndex === index) {
            slide.classList.add("active");
        }else{
            slide.classList.remove("active");
        }
    })
    
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
activeIndecFun()

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

phoneImg.classList.add("red");

function mouseOut (e){
    e.target.classList.toggle("red") 
}



phoneImg.addEventListener('click', mouseOut );

