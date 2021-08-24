const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.toggle(HIDDEN_CLASSNAME);

    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);

    paintGreetings(userName);
}

function paintGreetings(userName){
    const span = document.createElement("span");
    span.innerText = userName;
    greeting.innerText = "Hello ";
    greeting.append(span);
    greeting.classList.toggle(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
    loginForm.classList.toggle(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(savedUserName);
}