const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-links");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-links");
  document.getElementById(tabname).classList.add("active-tab");
}

const sideMenu = document.getElementById("sidebar");

function openmenu() {
  sideMenu.style.right = "0px";
}

function closemenu() {
  sideMenu.style.right = "-200px";
}

const scriptURL = "https://script.google.com/macros/s/AKfycbyVD5jqYqKTZmWUrhr8mSs-QEyYt-m84ON7bCbLG2pPAVghOtw15BHa6Fl8iY-iK8gY/exec";
const form = document.forms["submit-to-google-sheet"];

const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
        msg.innerHTML = "Message Sended successfully !";
        form.reset();
    })
    .catch((error) => {
        msg.innerHTML = `Error sending message :( ${error.message}`;
    });
});
