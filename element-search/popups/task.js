const elementMain = document.getElementById("modal_main");
const elementSucces = document.getElementById("modal_success");
const show = document.querySelector(".show-success");
const allClose = document.querySelectorAll(".modal__close_times");

elementMain.classList.add("modal_active");//добавление класса

show.onclick = () => {
  elementMain.classList.remove("modal_active");
  elementSucces.classList.add("modal_active");
}

allClose.forEach(item => {
  item.onclick = () => {
    item.closest(".modal").classList.remove("modal_active")
  }
})
