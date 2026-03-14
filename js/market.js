function postingJualan(){

let nama = document.getElementById("namaBarang").value
let harga = document.getElementById("hargaBarang").value
let lokasi = document.getElementById("lokasiBarang").value
let wa = document.getElementById("waPenjual").value

if(nama === "" || harga === "" || lokasi === "" || wa === ""){

alert("Isi semua data dulu")

return

}

let container = document.querySelector(".market-list")

let produk = document.createElement("div")

produk.className = "item"

produk.innerHTML = `

<img src="gallery/contoh.jpg">

<h3>${nama}</h3>

<p>Rp ${harga}</p>

<p>📍 ${lokasi}</p>

<a href="https://wa.me/${wa}" target="_blank">Chat Penjual</a>

`

container.prepend(produk)

alert("Jualan berhasil diposting!")

document.getElementById("namaBarang").value = ""
document.getElementById("hargaBarang").value = ""
document.getElementById("lokasiBarang").value = ""
document.getElementById("waPenjual").value = ""

}
