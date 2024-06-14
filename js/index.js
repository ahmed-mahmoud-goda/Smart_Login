if (localStorage.getItem("users") == null) {
    localStorage.setItem("users", []);
}
regex = [/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/gm, /[a-z]{5,}/gm];
inputEmail = document.getElementById("email");
inputPassword = document.getElementById("password");
status1 = document.getElementById("status")
loginbtn = document.getElementById("login")
welcomelink = document.getElementById("welcomeLink")
var emailValid = false;
var passwordValid = false;

function checkExistance() {
    var users = JSON.parse(localStorage.getItem("users"));
    for (var i = 0; i < users.length; i++) {
        if (users[i][1] == inputEmail.value) {
            return users[i]
        }
    }
    return false;
}
function checkEmail() {
    if (regex[0].test(inputEmail.value) == true) {
        emailValid = true;
    }
    else if (regex[0].test(inputEmail.value) == false) {
        emailValid = false;
    }
}
function checkPassword() {
    if (regex[1].test(inputPassword.value) == true) {
        passwordValid = true;
    }
    else if (regex[1].test(inputPassword.value) == false) {
        passwordValid = false;
    }
}

loginbtn.addEventListener("click",function(){
    user = checkExistance();
    checkPassword();
    checkEmail();
    if(!emailValid || !passwordValid){
        status1.innerHTML="Please Enter a valid Email/Password";
        status1.classList.remove("d-none");        
    }
    else if(user==false){
        status1.innerHTML="Email Does Not Exist";
        status1.classList.remove("d-none");  
    }
    else{
        if(user[2]!=inputPassword.value){
            status1.innerHTML="Wrong Password";
            status1.classList.remove("d-none");  
        }
        else{
            localStorage.setItem("name",user[0])
            welcomelink.setAttribute("href", "welcome.html");
        }
    }

})
