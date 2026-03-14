function showForm(type){

const box = document.getElementById("postBox")
const text = document.getElementById("postText")

box.style.display = "block"

if(type === "jual"){
text.placeholder = "Tulis barang yang ingin kamu jual..."
}

if(type === "cari"){
text.placeholder = "Tulis barang yang kamu butuhkan atau bantuan..."
}

window.scrollTo({
top: box.offsetTop - 80,
behavior:"smooth"
})

}

function postingStatus(){

let text = document.getElementById("postText").value

if(text === ""){
alert("Tulis sesuatu dulu")
return
}

let feed = document.querySelector(".feed")

let post = document.createElement("div")

post.className = "product-card"

post.innerHTML = `

<div class="product-info">

<h3>${text}</h3>

<p class="location">📍 Sekitar kamu</p>

<div class="product-action">

<button class="chat">💬 Chat</button>

<button class="map">📍 Map</button>

<button class="love">❤</button>

</div>

</div>

`

feed.prepend(post)

document.getElementById("postText").value = ""

alert("Posting berhasil!")

}
