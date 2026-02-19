// ================================================
// CE FICHIER FAIT UNE SEULE CHOSE :
// Quand l'utilisateur choisit une salle,
// on affiche la photo correspondante.
// ================================================


// ── Étape 1 : on associe chaque salle à son image ──
// C'est un objet : à gauche la valeur du <select>,
// à droite le chemin vers l'image dans ton projet.

var images = {
  "1":  "images/rooms/StadeDeFrance.webp",
  "2":  "images/rooms/Paris La Defense Arena.jpg",
  "3":  "images/rooms/zenitNancy.webp",
  "4":  "images/rooms/stade-pierre-mauroy.jpg",
  "5":  "images/rooms/AccorArena.jpg",
  "6":  "images/rooms/halleTonyGarnier.jpg",
  "7":  "images/rooms/ldlcArena.jpg",
  "8":  "images/rooms/sud_de_france_arena-3.jpg",
  "9":  "images/rooms/arenaStadeCouvertDeLievin.jpg",
  "10": "images/rooms/grand_hall_tours.jpg",
  "11": "images/rooms/arenes_beziers.jpg",
  "12": "images/rooms/arenes_nimes.jpg",
  "13": "images/rooms/arenes_arles.jpg",
  "14": "images/rooms/galaxie_amneville.jpg",
  "15": "images/rooms/zenith_strasbourg.jpg"
};


// ── Étape 2 : on récupère les éléments HTML dont on a besoin ──

// Le <select> de choix de salle
var selectSalle = document.getElementById("salle");

// L'image d'aperçu (on va la créer juste en dessous)
var apercu = document.getElementById("apercu-salle");


// ── Étape 3 : on écoute les changements sur le <select> ──
// "change" = quand l'utilisateur choisit une option différente

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