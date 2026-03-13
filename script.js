// MENU
function toggleMenu(){

let menu=document.querySelector(".menu-scroll")

menu.style.display=(menu.style.display==="flex")?"none":"flex"

}

// SEARCH
function toggleSearch(){

let search=document.getElementById("searchBox")

search.style.display=(search.style.display==="block")?"none":"block"

}

// SEARCH BERITA
function searchNews(){

let input=document.getElementById("searchInput").value.toLowerCase()

let cards=document.querySelectorAll(".news-card")

cards.forEach(card=>{

let text=card.innerText.toLowerCase()

card.style.display=text.includes(input)?"block":"none"

})

}

// LOAD NEWS
function loadNews(){

fetch("news.json")
.then(res=>res.json())
.then(data=>{

let container=document.getElementById("news-container")

container.innerHTML=""

data.forEach(news=>{

container.innerHTML+=`

<div class="news-card">

<h3>${news.title}</h3>

<p>${news.content}</p>

<small>${news.date}</small>

</div>

`

})

})

}

document.addEventListener("DOMContentLoaded",loadNews)
