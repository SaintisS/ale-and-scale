document.addEventListener("DOMContentLoaded", function() {
    const savedName = localStorage.getItem("saved_username");
    if (savedName) {
        document.getElementById("username").value = savedName;
    }
});

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confPassword = document.getElementById("conf_password");

    const errors = document.querySelectorAll(".error-message");
    errors.forEach(err => err.style.display = "none");

    let isValid = true;

    function showError(input, messageElement) {
        input.classList.add("error-input");
        input.classList.remove("success-input");
        messageElement.style.display = "block";
        isValid = false;
    }

    function clearError(input) {
        input.classList.remove("error-input");
        input.classList.add("success-input");
    }

    if (username.value.trim().length < 3) {
        showError(username, username.nextElementSibling);
    } else clearError(username);

    const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        showError(email, email.nextElementSibling);
    } else clearError(email);

    if (password.value.trim().length < 6) {
        showError(password, password.nextElementSibling);
    } else clearError(password);

    if (confPassword.value !== password.value || confPassword.value.trim() === "") {
        showError(confPassword, confPassword.nextElementSibling);
        confPassword.nextElementSibling.textContent = "Паролі не співпадають";
    } else clearError(confPassword);

    if (!isValid) return;

    localStorage.setItem("saved_username", username.value);

    console.log({
        username: username.value,
        email: email.value,
        password: password.value
    });

    alert("Форма успішно надіслана!");

    event.target.reset();

    username.classList.remove("success-input", "error-input");
    email.classList.remove("success-input", "error-input");
    password.classList.remove("success-input", "error-input");
    confPassword.classList.remove("success-input", "error-input");
});