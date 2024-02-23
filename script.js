const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");


const validateEmail = function (email) {
    // Regular expression pattern for email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};

const valideName = function (name) {
    let namePattern = /^[A-Za-z\s]+$/;
    return namePattern.test(name);
};

const checkFirstLeter = function () {
    if (this.value && this.value[0] === this.value[0].toUpperCase()) {
        this.nextElementSibling.innerText = "";
        this.classList.remove("border-bright-red");
    } else {
        this.nextElementSibling.innerText = "Frist carecter must be uppercase";
        this.classList.add("border-bright-red");

    }
};

if (inputName) {
    inputName.addEventListener("change", function () {
        if (valideName(inputName.value)) {
            this.nextElementSibling.innerText = "";
            this.classList.remove("border-bright-red");
        } else {
            this.nextElementSibling.innerText = "Wrong format";
            this.classList.add("border-bright-red");
        }
    });
}
if (inputEmail) {
    inputEmail.addEventListener("change", function () {
        if (validateEmail(inputEmail.value)) {
            this.nextElementSibling.innerText = "";
            this.classList.remove("border-bright-red");
        } else {
            this.nextElementSibling.innerText = "Wrong format";
            this.classList.add("border-bright-red");
        }
    });
}

if (inputName) inputName.addEventListener("keyup", checkFirstLeter);
