regex = [/[a-zA-Z0-9]{3,}/gm, /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/gm, /[a-z]{5,}/gm];
signupbtn = document.getElementById("signup");
status1 = document.getElementById("status");
var inputName = document.getElementById("name");
var inputEmail = document.getElementById("email");
var inputPassword = document.getElementById("password");
var error1 = document.getElementById("invalid1");
var error2 = document.getElementById("invalid2");
var error3 = document.getElementById("invalid3");
var nameValid = false;
var emailValid = false;
var passwordValid = false;



if (localStorage.getItem("users") == null) {
    localStorage.setItem("users", JSON.stringify([]));
}

function checkExistance() {
    var users = JSON.parse(localStorage.getItem("users"));
    for (var i = 0; i < users.length; i++) {
        if (users[i][1] == inputEmail.value) {
            return false
        }
    }
    return true
}

function checkName() {
    if (regex[0].test(inputName.value) == true) {
        nameValid = true;
    }
    else if (regex[0].test(inputName.value) == false) {
        nameValid = false;
    }
}
function checkEmail() {
    if (regex[1].test(inputEmail.value) == true) {
        emailValid = true;
    }
    else if (regex[1].test(inputEmail.value) == false) {
        emailValid = false;
    }
}
function checkPassword() {
    if (regex[2].test(inputPassword.value) == true) {
        passwordValid = true;
    }
    else if (regex[2].test(inputPassword.value) == false) {
        passwordValid = false;
    }
}




signupbtn.addEventListener("click", function () {
    checkName();
    checkEmail();
    checkPassword();
    if (nameValid == true) {
        error1.classList.add("d-none");
    }
    else {
        error1.classList.remove("d-none");

    }
    if (emailValid == true) {
        error2.classList.add("d-none");
    }
    else {
        error2.classList.remove("d-none");
    }
    if (passwordValid == true) {
        error3.classList.add("d-none");
    }
    else {
        error3.classList.remove("d-none");
    }
    if (nameValid && emailValid && passwordValid) {
        if (checkExistance() == true) {
            status1.classList.remove("d-none");
            status1.classList.remove("text-danger");
            status1.classList.add("text-success");
            status1.innerHTML = "Success";
            users = JSON.parse(localStorage.getItem("users"));
            users.push([inputName.value, inputEmail.value, inputPassword.value]);
            localStorage.setItem("users", JSON.stringify(users));
        }
        else {
            status1.classList.remove("d-none");
            status1.classList.add("text-danger");
            status1.classList.remove("text-success");
            status1.innerHTML = "Email Already Exists";
        }
    }
    else {
        status1.classList.remove("d-none");
        status1.classList.add("text-danger");
        status1.classList.remove("text-success");
        status1.innerHTML = "Check All Inputs";
    }
})