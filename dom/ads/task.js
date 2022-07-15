const rotatorCaseAll = Array.from(document.querySelector(".rotator").children);

setInterval(() => {
    const rotatorCaseActive = document.querySelector(".rotator__case_active");
    const rotatorCaseNext = rotatorCaseActive.nextElementSibling;

    if (rotatorCaseNext === null) {
        rotatorCaseActive.classList.remove("rotator__case_active");
        rotatorCaseAll[0].classList.add("rotator__case_active");
        return;
    };

    rotatorCaseActive.classList.remove("rotator__case_active");
    rotatorCaseNext.classList.add("rotator__case_active");
}, 1000);