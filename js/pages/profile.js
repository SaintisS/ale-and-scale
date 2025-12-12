document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const username = document.getElementById("username");
    const password = document.getElementById("password");

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

    if (password.value.trim().length < 6) {
        showError(password, password.nextElementSibling);
    } else clearError(password);

    if (!isValid) return;

    console.log({
        username: username.value,
        password: password.value
    });

    alert("Форма успішно надіслана!");

    event.target.reset();

    username.classList.remove("success-input", "error-input");
    password.classList.remove("success-input", "error-input");
});