const menu = document.querySelectorAll(".menu__link");

for (let i = 0; i < menu.length; i++) {
    let menuLink = menu[i];
    let menuItem = menuLink.closest(".menu__item");
    const subMenu = menuItem.querySelector(".menu_sub");

    menuLink.onclick = function () {
        if (subMenu) {
            subMenu.classList.toggle("menu_active");
            return false;
        }
    }
}