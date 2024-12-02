const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const toggle = document.querySelector('.toggle');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    toggle.style.backgroundImage = "url('/ASSETS/crepper.jpg')";
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
    toggle.style.backgroundImage = "url('/ASSETS/enderman.jpg')";
});