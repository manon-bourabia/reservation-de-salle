
var images = {
  "1":  "images/rooms/StadeDeFrance.jpg",
  "2":  "images/rooms/Paris La Defense Arena.jpg",
  "3":  "images/rooms/zenitNancy.webp",
  "4":  "images/rooms/stade-pierre-mauroy.jpg",
  "5":  "images/rooms/AccorArena.jpg",
  "6":  "images/rooms/halleTonyGarnier.jpg",
  "7":  "images/rooms/ldlcArena.jpg",
  "8":  "images/rooms/sud-de-france-arena-3.jpg",
  "9":  "images/rooms/arenaStadeCouvertDeLievin.jpg",
  "10": "images/rooms/grand-hall.jpg",
  "11": "images/rooms/Arenes-de-Beziers.jpg",
  "12": "images/rooms/arenes-de-nimes.jpg",
  "13": "images/rooms/ArenesDArles.jpg",
  "14": "images/rooms/galaxie-amneville.jpg",
  "15": "images/rooms/Zenith-Strasbourg.jpg"
};

// Le <select> de choix de salle
var selectSalle = document.getElementById("salle");

// L'image d'aperçu 
var apercu = document.getElementById("apercu-salle");


selectSalle.addEventListener("change", function() {

  // "this.value" = la valeur de l'option choisie (ex: "1", "2"...)
  var valeurChoisie = this.value;

  // Si l'utilisateur a choisi une vraie salle (pas le "--Choisissez--")
  if (valeurChoisie !== "") {

    // On change la source de l'image
    apercu.src = images[valeurChoisie];

    // On ajoute la classe "visible" → le CSS affiche l'image
    apercu.classList.add("visible");

  } else {
    // Si l'utilisateur revient sur "--Choisissez--"
    // on retire la classe "visible" → l'image disparaît
    apercu.classList.remove("visible");
  }

});