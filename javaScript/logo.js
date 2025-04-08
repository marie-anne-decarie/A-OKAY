const mylogo = document.querySelector('#logo');

mylogo.addEventListener('click', goHome);

function goHome() {
    window.location.href = "index.html"; // Redirect to new page
}

