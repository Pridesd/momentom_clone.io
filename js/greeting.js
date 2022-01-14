const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");

const CLASS_HIDDEN = "hidden";
function onBtnSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.toggle(CLASS_HIDDEN);
    greeting.classList.toggle(CLASS_HIDDEN);
    localStorage.setItem("userName", userName);
    greeting.innerText = `Hello ${localStorage.getItem("userName")}`;
}

loginForm.addEventListener("submit", onBtnSubmit);

if(localStorage.getItem("userName") != null){
    loginForm.classList.toggle(CLASS_HIDDEN);
    greeting.classList.toggle(CLASS_HIDDEN);
    greeting.innerText = `Hello ${localStorage.getItem("userName")}`;
}