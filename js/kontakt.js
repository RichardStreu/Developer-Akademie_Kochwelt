const messageAfterContact = document.querySelector(".messageAfterContact");
const contactFormContainer = document.querySelector(".contact-form-container");
const countdown = document.querySelector(".countdown");
const nameOfPerson = document.getElementById("name");
const emailOfPerson = document.getElementById("email");
const messageOfPerson = document.getElementById("message");


function sendMail(event) {
  event.preventDefault();
  const data = new FormData(event.target);

  fetch("https://formspree.io/f/xovawgaz", {
    method: "POST",
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(() => {
    showCountdown();
    // window.location.href = "kontakt.html";
    console.log("email gesendet");
  }).catch((error) => {
    console.log("GEHT NIX");
    console.log(error);
  });

}


function showCountdown() {
  contactFormContainer.classList.add("displayNone");
  messageAfterContact.classList.remove("displayNone");
  messageAfterContact.classList.add("displayBlock");
  countdown.classList.remove("opacityZero");
  countdown.classList.add("opacityOne");
  setTimeout(() => {
    countdown.classList.add("opacityZero");
  }, 1200);
  setTimeout(() => {
    countdown.innerText = "2";
    countdown.classList.remove("opacityZero");
  }, 1400);
  setTimeout(() => {
    countdown.classList.add("opacityZero");
  }, 2600);
  setTimeout(() => {
    countdown.innerText = "1";
    countdown.classList.remove("opacityZero");
  }, 2800);
  setTimeout(() => {
    countdown.classList.add("opacityZero");
  }, 4000);
  setTimeout(() => {
    countdown.innerText = "3";
    messageAfterContact.classList.remove("displayBlock")
    messageAfterContact.classList.add("displayNone");
    contactFormContainer.classList.remove("displayNone");
    contactFormContainer.classList.add("displayBlock");
    nameOfPerson.value = "";
    emailOfPerson.value = "";
    messageOfPerson.value = "";
  }, 4200);
}