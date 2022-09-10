const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    checkInput();
});

function checkInput() {
    //Get the value from the inputs
    const usernameValue = username.value;
    const passwordValue = password.value;
}

