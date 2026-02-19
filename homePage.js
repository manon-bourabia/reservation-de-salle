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
// NavBar
const searchForm = document.querySelector('.search');
const searchInput = document.querySelector('.searchBar');

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = searchInput.value.toLowerCase().trim();

    try {
        const response = await fetch('/data.json');
        const data = await response.json();

        // On cherche si le mot tapé est dans le titre OU la description
        const pageTrouvee = data.find(page => 
            page.titre.toLowerCase().includes(query) || 
            page.description.toLowerCase().includes(query)
        );

        if (pageTrouvee) {
            // Redirection automatique vers l'URL définie dans le JSON
            window.location.href = pageTrouvee.url;
        } else {
            alert("Aucun résultat pour cette recherche.");
        }
    } catch (err) {
        console.error("Erreur : Vérifiez que data.json est à la racine.");
    }
});

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