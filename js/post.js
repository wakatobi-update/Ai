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

function previewImage(){

let file = document.getElementById("postImage").files[0]
let preview = document.getElementById("previewImg")

if(file){

let url = URL.createObjectURL(file)

preview.src = url
preview.style.display = "block"

}

}

function postingStatus(){
alert("tombol berfungsi")
}

let text = document.getElementById("postText").value

if(text === ""){
alert("Tulis sesuatu dulu")
return
}

alert("Posting berhasil!")

}

document.getElementById("postText").value = ""
document.getElementById("postImage").value = ""
document.getElementById("previewImg").style.display = "none"

if(text === ""){
alert("Tulis sesuatu dulu")
return
}

let feed = document.querySelector(".feed")

let post = document.createElement("div")

post.className = "product-card"

let imgHTML = ""

if(image){
let url = URL.createObjectURL(image)
imgHTML = `<img src="${url}">`
}

post.innerHTML = `

${imgHTML}

<div class="product-info">

<h3>${text}</h3>

<p class="location">📍 Sekitar kamu • ${getTime()}</p>

<div class="product-action">

<button class="chat">💬 Chat</button>
<button class="map">📍 Map</button>
<button class="love">❤</button>

</div>

</div>

`

feed.prepend(post)

savePosts()

document.getElementById("postText").value = ""
document.getElementById("postImage").value = ""

alert("Posting berhasil!")

}
