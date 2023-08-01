var formulario = document.querySelector("form");
var emailField = formulario === null || formulario === void 0 ? void 0 : formulario.querySelector(".email-field");
var emailInput = emailField === null || emailField === void 0 ? void 0 : emailField.querySelector(".email");
var passwordField = formulario === null || formulario === void 0 ? void 0 : formulario.querySelector(".create-password");
var passwordInput = passwordField === null || passwordField === void 0 ? void 0 : passwordField.querySelector(".pwd-create");
var confPasswordField = formulario === null || formulario === void 0 ? void 0 : formulario.querySelector(".confirm-password");
var confPasswordInput = confPasswordField === null || confPasswordField === void 0 ? void 0 : confPasswordField.querySelector(".pwd-confirm");
function validacaoEmail() {
    var emailCaracteresPadrao = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!(emailInput === null || emailInput === void 0 ? void 0 : emailInput.value.match(emailCaracteresPadrao))) {
        return emailField === null || emailField === void 0 ? void 0 : emailField.classList.add("invalid");
    }
    emailField === null || emailField === void 0 ? void 0 : emailField.classList.remove("invalid");
}
var eyesIconPassword = document.querySelectorAll(".show-hide-pwd");
eyesIconPassword.forEach(function (eyeIcon) {
    eyeIcon.addEventListener("click", function () {
        var _a;
        var passInput = (_a = eyeIcon.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector("input");
        if (passInput) {
            if ((passInput === null || passInput === void 0 ? void 0 : passInput.type) === "password") {
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return (passInput.type = "text");
            }
            eyeIcon.classList.replace("bx-show", "bx-hide");
            return (passInput.type = "password");
        }
    });
});
function criarSenha() {
    var senhaCaracteresPadrao = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!(passwordInput === null || passwordInput === void 0 ? void 0 : passwordInput.value.match(senhaCaracteresPadrao))) {
        return passwordField === null || passwordField === void 0 ? void 0 : passwordField.classList.add("invalid");
    }
    passwordField === null || passwordField === void 0 ? void 0 : passwordField.classList.remove("invalid");
}
function confirmarSenha() {
    if ((passwordInput === null || passwordInput === void 0 ? void 0 : passwordInput.value) !== (confPasswordInput === null || confPasswordInput === void 0 ? void 0 : confPasswordInput.value) || (confPasswordInput === null || confPasswordInput === void 0 ? void 0 : confPasswordInput.value) === "") {
        return confPasswordField === null || confPasswordField === void 0 ? void 0 : confPasswordField.classList.add("invalid");
    }
    confPasswordField === null || confPasswordField === void 0 ? void 0 : confPasswordField.classList.remove("invalid");
}
formulario === null || formulario === void 0 ? void 0 : formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    validacaoEmail();
    criarSenha();
    confirmarSenha();
    emailInput === null || emailInput === void 0 ? void 0 : emailInput.addEventListener("keyup", validacaoEmail);
    passwordInput === null || passwordInput === void 0 ? void 0 : passwordInput.addEventListener("keyup", criarSenha);
    confPasswordInput === null || confPasswordInput === void 0 ? void 0 : confPasswordInput.addEventListener("keyup", confirmarSenha);
    if (!(emailField === null || emailField === void 0 ? void 0 : emailField.classList.contains("invalid")) &&
        !(passwordField === null || passwordField === void 0 ? void 0 : passwordField.classList.contains("invalid")) &&
        !(confPasswordField === null || confPasswordField === void 0 ? void 0 : confPasswordField.classList.contains("invalid"))) {
        var action = formulario.getAttribute("action");
        typeof action === 'string' ? location.href = action : location.href = '';
    }
});
