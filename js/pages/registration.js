document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // зупиняємо відправку

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

    // --- Валідація ---
    // 1. Ім'я — мінімум 3 символи
    if (username.value.trim().length < 3) {
        showError(username, username.nextElementSibling);
    } else clearError(username);

    // 2. Email містить @ та домен
    const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        showError(email, email.nextElementSibling);
    } else clearError(email);

    // 3. Пароль — мінімум 6 символів
    if (password.value.trim().length < 6) {
        showError(password, password.nextElementSibling);
    } else clearError(password);

    // 4. Підтвердження пароля
    if (confPassword.value !== password.value || confPassword.value.trim() === "") {
        showError(confPassword, confPassword.nextElementSibling);
        confPassword.nextElementSibling.textContent = "Паролі не співпадають";
    } else clearError(confPassword);

    // --- Якщо помилки є — припиняємо ---
    if (!isValid) return;

    // --- Якщо валідація успішна ---
    console.log({
        username: username.value,
        email: email.value,
        password: password.value
    });

    alert("Форма успішно надіслана!");

    // Очистити форму
    event.target.reset();

    // Після очистки — прибрати success- та error-класи
    username.classList.remove("success-input", "error-input");
    email.classList.remove("success-input", "error-input");
    password.classList.remove("success-input", "error-input");
    confPassword.classList.remove("success-input", "error-input");
});