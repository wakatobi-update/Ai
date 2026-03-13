// MENU
function toggleMenu(){

let menu = document.querySelector(".menu-scroll")

menu.style.display = (menu.style.display === "flex") ? "none" : "flex"

}

// SEARCH
function toggleSearch(){

let search = document.getElementById("searchBox")

search.style.display = (search.style.display === "block") ? "none" : "block"

}

// SCROLL KE ATAS
function scrollToTop(){
window.scrollTo({
top:0,
behavior:"smooth"
});
}
