// Soal 1
console.log("----- Soal 1 -----")
function halo() {
  console.log("Halo Sanbers!");
}
 
halo();

// Soal 2
console.log(" ")
console.log("----- Soal 2 -----")
function kalikan(num1, num2) {
  return num1 * num2
}
 
var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48

// Soal 3
console.log(" ")
console.log("----- Soal 3 -----")
function introduce(name,age,address,hobby) {
  return name + age + address + hobby
}
var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming!"

var perkenalan = introduce("'"+"Nama Saya " + name,"," + " Umur saya " + age,"," + " alamat saya di " + address,"," + " dan saya punya hobby yaitu " + hobby +"'")
console.log(perkenalan)

// Soal 4
console.log(" ")
console.log("----- Soal 4 -----")
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
console.log("Nama : "+arrayDaftarPeserta[0])
console.log("Jenis Kelamin : "+arrayDaftarPeserta[1])
console.log("Hobby : "+arrayDaftarPeserta[2])
console.log("Tahun Lahir : "+arrayDaftarPeserta[3])

// Soal 5
console.log(" ")
console.log("----- Soal 5 -----")
var buah = [{nama: "strawberry", warna: "merah", adabijinya: "tidak", harga: "9000"}, {nama: "jeruk", warna: "oranye", adabijinya: "ada", harga: "8000"}, {nama: "Semangka", warna: "Hijau & Merah", adabijinya: "ada", harga: "10000"},{nama: "Pisang", warna: "Kuning", adabijinya: "tidak", harga: "5000"} ]
buah.forEach(function(item,index){
   console.log(1 + index + " nama : " + item.nama )
   console.log("  warna : " + item.warna)
   console.log("  ada bijinya : " + item.adabijinya)
   console.log("  harga : " + item.harga)

})

// Soal 6
console.log(" ")
console.log("----- Soal 6 -----")
var dataFilm = []
dataFilm.nama = "Walking Dead"
dataFilm.durasi = "90 menit"
dataFilm.genre = "horor"
dataFilm.Tahun = "1990"

console.log(dataFilm)
