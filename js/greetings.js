const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginPrompt = document.querySelector(".login-prompt");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onSubmit(event) {
  event.preventDefault();

  loginForm.classList.add(HIDDEN_CLASS);
  const username = loginInput.value;

  localStorage.setItem(USERNAME_KEY, username);

  console.log(username);

  loginPrompt.classList.add(HIDDEN_CLASS);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASS);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onSubmit);
} else {
  loginPrompt.classList.add(HIDDEN_CLASS);
  paintGreetings(savedUserName);
}
