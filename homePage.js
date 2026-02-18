// MENU BURGER
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navLinks");
  const allLinks = document.querySelectorAll(".navLinks li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("navActive");
    allLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });
    burger.classList.toggle("toggle");
  });
};
navSlide();
// CAROUSSEL
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.classList.contains("btnReserv")) return;
      const currentChecked = document.querySelector(
        'input[name="slider"]:checked',
      );
      if (currentChecked) {
        let currentId = parseInt(currentChecked.id.split("-")[1]);
        let nextId = currentId + 1;
        if (nextId > 5) {
          nextId = 1;
        }
        const nextRadio = document.getElementById("item-" + nextId);
        if (nextRadio) {
          nextRadio.checked = true;
        }
      }
    });
  });
});
}
navSlide();
