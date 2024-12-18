const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

// ------------ type writer --------------------------------


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
const submit = document.getElementById("submit");
submit.innerHTML= "Send"


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
  submit.innerHTML= "Loading.."
    setTimeout(()=>{
    submit.innerHTML= "Send"
    },4000)
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
//   submit.innerHTML= "Loading.."
    .then((response) => {
        msg.innerHTML = "Message Sended successfully !";
        setTimeout(() => {
            msg.innerHTML = "";  // Clear the message after 5 seconds.
        },5000)
        form.reset();
    })
    .catch((error) => {
        msg.innerHTML = `Error sending message :( ${error.message}`;
    });
});
