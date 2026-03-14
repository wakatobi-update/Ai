function getTime(){

let now = new Date()

let jam = now.getHours()
let menit = now.getMinutes()

if(menit < 10){
menit = "0" + menit
}

return jam + ":" + menit

}


function searchItem(){

let input = document.querySelector(".search-box input").value.toLowerCase()

let items = document.querySelectorAll(".product-card")

items.forEach(function(item){

let text = item.innerText.toLowerCase()

if(text.includes(input)){
item.style.display = "block"
}else{
item.style.display = "none"
}

})

}

document.addEventListener("click", function(e){

if(e.target.classList.contains("love")){
e.target.classList.toggle("liked")
}

})
