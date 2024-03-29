var tabLinks = document.getElementsByClassName("tab-links"),
  tabContents = document.getElementsByClassName("tab-contents");

function opentab(e) {
  for (tabLink of tabLinks) tabLink.classList.remove("active-link");
  for (tabContent of tabContents) tabContent.classList.remove("active-tab");
  event.currentTarget.classList.add("active-link"),
    document.getElementById(e).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu"),
  headerLinks = document.querySelectorAll("#sidemenu li a");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

headerLinks.forEach(function (e) {
  e.addEventListener("click", function () {
    closemenu();
  });
});

const form = document.querySelector("form"),
  msg = document.getElementById("msg");

function unavailable() {
  alert("Not available right now! Try again later.");
}

function nothingElse() {
  alert("There are currently no other projects. Come back later.");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let t = new FormData(form);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(t).toString(),
  })
    .then(() => {
      (msg.innerHTML = "Message sent successfully!"), form.reset();
    })
    .catch((e) => {
      (msg.innerHTML = "An error occurred, please try again later."),
        console.error(e);
    });
});
