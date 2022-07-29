const signin = document.getElementById("signin");
signin.classList.add("signin_active");
const welcome = document.getElementById(".welcome");// лучше использовать getElementById или же querySelector
const idUser = document.getElementById("user_id");
const form = document.getElementById("signin__form");

form.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            if (response.success === true) {
                signin.classList.remove("signin_active");
                const userId = response["user_id"];
                localStorage.setItem("id", userId);
                welcome.classList.add("welcome_active");
                idUser.textContent = userId;
            } else {
                alert("Неверный логин/пароль");
            }
            form.reset()
        }
    }
    xhr.send(data);
})