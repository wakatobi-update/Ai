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
function loadTrending(data){

let container = document.getElementById("trending-news")

if(!container) return

container.innerHTML=""

data.slice(0,3).forEach(news=>{

container.innerHTML+=`

<div class="news-card">

<h3>${news.title}</h3>

<p>${news.content}</p>

</div>

`


})

}

function scrollToTop(){
window.scrollTo({
top:0,
behavior:"smooth"
});
}

function publishAINews(){

let titles=[
"Wakatobi Jadi Destinasi Wisata Favorit",
"Festival Budaya Wakatobi Menarik Turis",
"Keindahan Laut Wakatobi Mendunia",
"Pariwisata Wakatobi Terus Berkembang"
]

let contents=[
"Wakatobi dikenal dengan keindahan laut dan terumbu karangnya yang memukau wisatawan.",
"Banyak wisatawan datang untuk menikmati budaya dan alam Wakatobi.",
"Pemerintah daerah terus mengembangkan sektor pariwisata di Wakatobi.",
"Wakatobi menjadi salah satu tujuan wisata laut terbaik di Indonesia."
]

let title=titles[Math.floor(Math.random()*titles.length)]
let content=contents[Math.floor(Math.random()*contents.length)]

let image="https://source.unsplash.com/600x400/?wakatobi,ocean"

let date=new Date().toLocaleDateString()

let container=document.getElementById("news-container")

container.innerHTML=`

<div class="news-card">

<img src="${image}" class="news-img">

<h3>${title}</h3>

<p>${content}</p>

<small>${date}</small>

</div>

` + container.innerHTML

}

function loadNews(){

fetch("news.json")
.then(res=>res.json())
.then(data=>{

let container=document.getElementById("news-container")

container.innerHTML=""

data.forEach((news,i)=>{

container.innerHTML+=`

<div class="news-card">

<h3>
<a href="article.html?id=${i}">
${news.title}
</a>
</h3>

<p>${news.content.substring(0,100)}...</p>

<small>${news.date}</small>

</div>

`

})

})

}

document.addEventListener("DOMContentLoaded",loadNews)
