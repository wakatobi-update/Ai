/* =========================
IKITA PROFILE SYSTEM
========================= */

let photoInput = document.getElementById("uploadPhoto")
let profilePhoto = document.getElementById("profilePhoto")

let nameInput = document.getElementById("profileName")
let locationInput = document.getElementById("profileLocation")
let bioInput = document.getElementById("profileBio")

let nameDisplay = document.getElementById("profileNameDisplay")
let locationDisplay = document.getElementById("profileLocationDisplay")


/* =========================
UPLOAD FOTO
========================= */

if(photoInput){

photoInput.addEventListener("change", function(){

let file = this.files[0]

if(!file) return

let reader = new FileReader()

reader.onload = function(e){

profilePhoto.src = e.target.result
localStorage.setItem("ikita_photo", e.target.result)

}

reader.readAsDataURL(file)

})

}


/* =========================
SIMPAN PROFIL
========================= */

function saveProfile(){

let name = nameInput.value
let location = locationInput.value
let bio = bioInput.value

localStorage.setItem("ikita_name", name)
localStorage.setItem("ikita_location", location)
localStorage.setItem("ikita_bio", bio)

alert("Profil berhasil disimpan")

loadProfile()

}


/* =========================
LOAD PROFIL
========================= */

function loadProfile(){

let name = localStorage.getItem("ikita_name")
let location = localStorage.getItem("ikita_location")
let bio = localStorage.getItem("ikita_bio")
let photo = localStorage.getItem("ikita_photo")

if(name){

nameInput.value = name

if(nameDisplay){
nameDisplay.innerText = name
}

}

if(location){

locationInput.value = location

if(locationDisplay){
locationDisplay.innerText = location
}

}

if(bio){
bioInput.value = bio
}

if(photo){
profilePhoto.src = photo
}

}


/* =========================
LOAD SAAT HALAMAN DIBUKA
========================= */

document.addEventListener("DOMContentLoaded", loadProfile)

document.querySelector(".save-btn").addEventListener("onclick="saveprofile()"
