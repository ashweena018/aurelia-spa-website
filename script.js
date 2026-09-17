// =========================
// MOBILE MENU
// =========================

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

if (menu && nav) {
  menu.onclick = () => {
    nav.classList.toggle("active");
  };
}


// =========================
// FORM SUBMISSION
// =========================

document.querySelectorAll("form").forEach((form) => {

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    const message = form.querySelector("#message");

    if (message) {
      message.textContent =
        "Thank you! Your request has been received in this demo.";
    }

    form.reset();

  });

});