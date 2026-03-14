function saveProfile(){

let name = document.getElementById("profileName").value
let location = document.getElementById("profileLocation").value
let bio = document.getElementById("profileBio").value

localStorage.setItem("ikita_name", name)
localStorage.setItem("ikita_location", location)
localStorage.setItem("ikita_bio", bio)

alert("Profil disimpan")

}

window.onload = function(){

let name = localStorage.getItem("ikita_name")
let location = localStorage.getItem("ikita_location")
let bio = localStorage.getItem("ikita_bio")

if(name){
document.getElementById("profileName").value = name
}

if(location){
document.getElementById("profileLocation").value = location
}

if(bio){
document.getElementById("profileBio").value = bio
}

                        }
