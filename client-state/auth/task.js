const welcome = document.getElementById("welcome");
const idUser = document.getElementById("user_id");
const form = document.getElementById("signin__form");

function welcomeUser() {
    form.classList.add("welcome");
    welcome.classList.add("welcome_active");
}

form.addEventListener("submit", event => {
    event.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://netology-slow-rest.herokuapp.com/auth.php');

    xhr.responseType = 'json';

    const formData = new FormData(form);
    xhr.send(formData);

    xhr.onload = function () {

        const response = xhr.response;

        if (response.user_id) {
            idUser.textContent = response.user_id;
            welcomeUser();
            localStorage.setItem("id", idUser.textContent);
        } else {
            alert("Неверный логин/пароль");
        }
        form.reset()
    }
})

