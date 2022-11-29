const carousel = document.querySelector("#carouselExampleSlidesOnly");

window.addEventListener("scroll", (event) => {
    console.log(event)
  });

$(".progress-bar").animate({
    width: "70%"
}, 2500);

