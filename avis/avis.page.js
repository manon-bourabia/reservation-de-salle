let allAvis = [];
let filteredAvis = [];
let currentIndex = 0;


const reviewCard = document.getElementById("review-card");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const filterBestBtn = document.getElementById("filter-best");
const showAllBtn = document.getElementById("show-all");



function renderAvis() {
  if (filteredAvis.length === 0) {
    reviewCard.innerHTML = "<p>Aucun avis disponible.</p>";
    return;
  }

  const avis = filteredAvis[currentIndex];

  reviewCard.style.opacity = 0;

  setTimeout(() => {
    reviewCard.innerHTML = `
      <img src="${avis.photo}" alt="${avis.nom}">
      <h2>${avis.nom}</h2>
      <h3>${avis.poste}</h3>
      <div class="stars">${generateStars(avis.note)}</div>
      <p>"${avis.commentaire}"</p>
      <div class="date">${formatDate(avis.date)}</div>
    `;

    reviewCard.style.opacity = 1;
  }, 200);
}




async function loadAvis() {
  try {
    const response = await fetch("avis.json");
    const data = await response.json();

    allAvis = data.avis;
    filteredAvis = [...allAvis];

    renderAvis();
  } catch (error) {
    console.error("Erreur chargement JSON :", error);
  }
}




function generateStars(note) {
  let stars = "";
  for (let i = 0; i < 5; i++) {
    stars += i < note ? "★" : "☆";
  }
  return stars;
}


function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}


function nextSlide() {
  currentIndex++;
  if (currentIndex >= filteredAvis.length) {
    currentIndex = 0;
  }
  renderAvis();
}


function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = filteredAvis.length - 1;
  }
  renderAvis();
}


function filterBest() {
  filteredAvis = allAvis.filter(avis => avis.note >= 4);
  currentIndex = 0;
  renderAvis();
}


function showAll() {
  filteredAvis = [...allAvis];
  currentIndex = 0;
  renderAvis();
}


nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
filterBestBtn.addEventListener("click", filterBest);
showAllBtn.addEventListener("click", showAll);


loadAvis();
