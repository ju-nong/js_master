const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(e){
    e.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add("hidden");
    console.log(userName);
}

loginForm.addEventListener("submit", onLoginSubmit);