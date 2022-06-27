const prevArrow = document.querySelector(".slider__arrow_prev");
const nextArrow = document.querySelector(".slider__arrow_next");
const sliders = document.querySelectorAll(".slider__item");
const dots = document.querySelectorAll(".slider__dot");

let numberSlider = 0;

dots[numberSlider].classList.add("slider__dot_active");

prevArrow.onclick = function () {
    if (numberSlider === 0) {
        numberSlider = (sliders.length - 1);
    } else {
        numberSlider--;
    }
    sliderActive(numberSlider);
}

nextArrow.onclick = function () {
    if (numberSlider === (sliders.length - 1)) {
        numberSlider = 0;
    } else {
        numberSlider++;
    }
    sliderActive(numberSlider);
}

for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = function () {
        sliderActive(i);
        numberSlider = i;
    }
}

function sliderActive(number) {
    sliders.forEach(element => element.classList.remove("slider__item_active"));
    sliders[number].classList.add("slider__item_active");

    dots.forEach(element => element.classList.remove("slider__dot_active"));
    dots[number].classList.add("slider__dot_active");

}


