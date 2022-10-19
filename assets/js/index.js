/* capturando os inputs do formulario */
const formulario = document.querySelector("form");
const emailField = formulario.querySelector(".email-field");
const emailInput = emailField.querySelector(".email");
const passwordField = formulario.querySelector(".create-password");
const passwordInput = passwordField.querySelector(".pwd-create");
const confPasswordField = formulario.querySelector(".confirm-password");
const confPasswordInput = confPasswordField.querySelector(".pwd-confirm");

/* validação de email */
function validacaoEmail() {
    const emailCaracteresPadrao = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailCaracteresPadrao)) {
        return emailField.classList.add("invalid");
    }
    /* email válido */
    emailField.classList.remove("invalid");
}

/* mostrar ou esconder senha */
const eyesIconPassword = document.querySelectorAll(".show-hide-pwd")

eyesIconPassword.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        const passInput = eyeIcon.parentElement.querySelector("input");
        if (passInput.type === "password") {
            eyeIcon.classList.replace("bx-hide", "bx-show");
            return (passInput.type = "text");
        }
        eyeIcon.classList.replace("bx-show", "bx-hide");
        return (passInput.type = "password");
    })
})

/* validação de senhas */
function criarSenha() {
    const senhaCaracteresPadrao = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordInput.value.match(senhaCaracteresPadrao)) {
        return passwordField.classList.add("invalid");
    }
    passwordField.classList.remove("invalid");
}

/* confirmação de senha */
function confirmarSenha() {
    if (passwordInput.value !== confPasswordInput.value || confPasswordInput.value === "") {
        return confPasswordField.classList.add("invalid");
    }
    confPasswordField.classList.remove("invalid");
}

/* submissão de formulário */
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    validacaoEmail();
    criarSenha();
    confirmarSenha();

    emailInput.addEventListener("keyup", validacaoEmail);
    passwordInput.addEventListener("keyup", criarSenha);
    confPasswordInput.addEventListener("keyup", confirmarSenha);

    if (!emailField.classList.contains("invalid") &&
        !passwordField.classList.contains("invalid") &&
        !confPasswordField.classList.contains("invalid")) {
        location.href = formulario.getAttribute("action");
    }
})