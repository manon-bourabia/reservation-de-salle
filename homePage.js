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
const searchForm = document.querySelector(".search");
const searchInput = document.querySelector(".searchBar");

function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  let query = normalize(searchInput.value.trim());

  query = query.replace(/s$/, "");

  try {
    const response = await fetch("/data.json");
    const data = await response.json();

    const pageTrouvee = data.find((page) => {
  const titre = normalize(page.titre);
  const description = normalize(page.description);
  const keywords = page.keywords
    ? page.keywords.map(k => normalize(k)).join(" ")
    : "";

  return (
    titre.includes(query) ||
    description.includes(query) ||
    keywords.includes(query)
  );
});

    if (pageTrouvee) {
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
// Animation homePage
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: "-100px 0px -100px 0px",
    },
  );

  elements.forEach((el) => observer.observe(el));
});
