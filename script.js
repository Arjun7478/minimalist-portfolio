const inputName = document.getElementById("input-name"); j


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
        this.previousElementSibling.querySelector(".err").innerText = "";
        this.classList.add("border-[#CFCFCF]");
    } else {
        this.previousElementSibling.querySelector(".err").innerText =
            "Frist carecter must be uppercase";
        this.classList.remove("border-[#CFCFCF]");
        this.classList.add("border-[#CD2C2C]");
    }
};

if (inputName)
    inputName.addEventListener("change", function () {
        if (valideName(inputName.value)) {
            this.previousElementSibling.querySelector(".err").innerText = "";
        } else {
            this.previousElementSibling.querySelector(".err").innerText =
                "Wrong format";
        }
    });

if (inputEmail)
    inputEmail.addEventListener("change", function () {
        if (validateEmail(inputEmail.value)) {
            this.previousElementSibling.querySelector(".err").innerText = "";
        } else {
            this.previousElementSibling.querySelector(".err").innerText =
                "Wrong format";
        }
    });

if (inputName) inputName.addEventListener("keyup", checkFirstLeter);
if (inputCountry) inputCountry.addEventListener("keyup", checkFirstLeter);