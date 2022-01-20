const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const CLASS_HIDDEN = "hidden";
function onBtnSubmit(event){
    event.preventDefault();
    loginForm.classList.add(CLASS_HIDDEN);
    const userName = loginInput.value;
    localStorage.setItem("userName", userName);
    paintGreetings(userName);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(CLASS_HIDDEN);
}

const savedUserName = localStorage.getItem("userName");

if(savedUserName == null){
    loginForm.classList.remove(CLASS_HIDDEN);
    loginForm.addEventListener("submit", onBtnSubmit);
}
else{
    paintGreetings(savedUserName);
}