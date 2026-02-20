
const container = document.getElementById("container");
const template = document.getElementById("templateReservation");

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

function showRooms(rooms) {
  container.innerHTML = "";
  
  rooms.forEach(room => {
    const clone = template.content.cloneNode(true);
    
    clone.querySelector(".roomTitle").textContent = room.room_name;
    clone.querySelector(".roomdescription").textContent =
      `${room.description} | Ville : ${room.city} | Capacité : ${room.capacity} places`;
    
    const photoDiv = clone.querySelector(".photo");
    const img = document.createElement("img");
    img.src = room.photo_path;
    img.alt = room.room_name;
    img.style.width = "100%";
    img.style.height = "200px";
    img.style.objectFit = "cover";
    photoDiv.appendChild(img);
    
    // ajout de l'ID de la salle dans l'URL
    clone.querySelector(".reserveBtn").addEventListener("click", () => {
      window.location.href = "../Form.html?salle=" + room.id;
    });
    
    container.appendChild(clone);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      showRooms(data.rooms);
    })
    .catch(error => console.error("Erreur :", error));
});