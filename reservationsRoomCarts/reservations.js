const container = document.getElementById("container")
const template = document.getElementById("templateReservation")

function showRooms(rooms) {

    container.innerHTML = ""   
    rooms.forEach(room => {

        const clone = template.content.cloneNode(true)

     
        clone.querySelector(".roomTitle").textContent = room.room_name

       
        clone.querySelector(".roomdescription").textContent =
            `${room.description} | Ville : ${room.city} | Capacité : ${room.capacity} places`

      
        const photoDiv = clone.querySelector(".photo")

        const img = document.createElement("img")
        img.src = room.photo_path
        img.alt = room.room_name
        img.style.width = "100%"
        img.style.height = "200px"
        img.style.objectFit = "cover"

        photoDiv.appendChild(img)

      
        clone.querySelector(".reserveBtn")
            .addEventListener("click", () => {
                alert(`Réservation pour ${room.room_name} à ${room.city}`)
            })

      
        container.appendChild(clone)
    })
}

window.addEventListener("DOMContentLoaded", () => {

    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            showRooms(data.rooms)
        })
        .catch(error => console.error("Erreur :", error))

})