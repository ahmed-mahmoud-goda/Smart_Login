user = localStorage.getItem("name");
welcome = document.getElementById("welcome");

welcome.innerHTML = `Welcome ${user}`