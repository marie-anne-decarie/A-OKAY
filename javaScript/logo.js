const mylogo = document.querySelector('#logo');
const mylogopassword = document.querySelector('#logoPassword');
const mylogoadmin = document.querySelector('#logoAdmin');

mylogo.addEventListener('click', goHome);
mylogopassword.addEventListener('click', goHomePassword);
mylogoadmin.addEventListener('click', goHomeAdmin);

function goHome() {
    window.location.href = "index.html"; // Redirect to new page
}

function goHomePassword() {
    window.location.href = "password.html";
}

function goHomeAdmin() {
    window.location.href = "admin.html";
}