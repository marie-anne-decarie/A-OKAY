const logoutbtn = document.querySelector('#logout');
const no = document.querySelector('#closebox');
const yes = document.querySelector('#goback');
const box = document.querySelector('#myBox');


logoutbtn.addEventListener('click', openBox);
no.addEventListener('click', closeBox);
yes.addEventListener('click', goHome);

function openBox() {
  box.style.height = "80vh";
  box.style.border = "1px solid #f2f2f2";
}

function closeBox() {
  box.style.height = "0%";
  box.style.border = "none";
}

function goHome() {
    window.location.href = "index.html"; // Redirect to new page
}