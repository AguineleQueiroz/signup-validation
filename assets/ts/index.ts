type HTMLFormElementOrNull = HTMLFormElement | null;
type HTMLDivElementOrNullOrUndefined =  HTMLDivElement | null | undefined
type HTMLInputElementOrNullOrUndefined =  HTMLInputElement | null | undefined
type HTMLInputElementOrNull =  HTMLInputElement | null

const formulario: HTMLFormElementOrNull = document.querySelector("form");
const emailField: HTMLDivElementOrNullOrUndefined = formulario?.querySelector(".email-field");
const emailInput: HTMLInputElementOrNullOrUndefined = emailField?.querySelector(".email");
const passwordField: HTMLDivElementOrNullOrUndefined = formulario?.querySelector(".create-password");
const passwordInput: HTMLInputElementOrNullOrUndefined = passwordField?.querySelector(".pwd-create");
const confPasswordField: HTMLDivElementOrNullOrUndefined = formulario?.querySelector(".confirm-password");
const confPasswordInput: HTMLInputElementOrNullOrUndefined = confPasswordField?.querySelector(".pwd-confirm");


function validacaoEmail() :void {
    const emailCaracteresPadrao: RegExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput?.value.match(emailCaracteresPadrao)) {
        return emailField?.classList.add("invalid");
    }
    emailField?.classList.remove("invalid");
}

const eyesIconPassword: NodeListOf<Element> = document.querySelectorAll(".show-hide-pwd")

eyesIconPassword.forEach((eyeIcon: Element) => {
    eyeIcon.addEventListener("click", () => {
        const passInput: HTMLInputElementOrNullOrUndefined = eyeIcon.parentElement?.querySelector("input");
        if(passInput){
            if (passInput?.type === "password") {
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return (passInput.type = "text");
            }
            eyeIcon.classList.replace("bx-show", "bx-hide");
            return (passInput.type = "password");
        }        
    })
})

function criarSenha(): void {
    const senhaCaracteresPadrao: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordInput?.value.match(senhaCaracteresPadrao)) {
        return passwordField?.classList.add("invalid");
    }
    passwordField?.classList.remove("invalid");
}

function confirmarSenha(): void {
    if (passwordInput?.value !== confPasswordInput?.value || confPasswordInput?.value === "") {
        return confPasswordField?.classList.add("invalid");
    }
    confPasswordField?.classList.remove("invalid");
}

formulario?.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();

    validacaoEmail();
    criarSenha();
    confirmarSenha();

    emailInput?.addEventListener("keyup", validacaoEmail);
    passwordInput?.addEventListener("keyup", criarSenha);
    confPasswordInput?.addEventListener("keyup", confirmarSenha);

    if (!emailField?.classList.contains("invalid") &&
        !passwordField?.classList.contains("invalid") &&
        !confPasswordField?.classList.contains("invalid")) {
        const action: String | null = formulario.getAttribute("action");
        typeof action === 'string' ? location.href = action : location.href = '';
    }
})