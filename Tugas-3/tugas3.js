// soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var res = kataKedua[0].toUpperCase()
var cut = kataKedua.substr(1)
kataKedua = res.concat(cut)
var kataKetiga = "belajar";
var kataKeempat = "javascript";
var besar  = kataKeempat.toUpperCase();

console.log(kataPertama.concat(" ",kataKedua," ",kataKetiga," ",besar))

// soal 2
var kataPertama = parseInt("1");
var kataKedua = parseInt("2");
var kataKetiga = parseInt("4");
var kataKeempat = parseInt("5");
var jumlah = kataPertama + kataKedua + kataKetiga + kataKeempat;

console.log(jumlah)

// soal 3
var kalimat = 'wah javascript itu keren sekali'; 
var kataPertama = kalimat.substring(0, 3); //substring(indeksawal, indeks terakhir(optional))
var kataKedua = kalimat.substr(4, 10); // substr(indeksawal,jumlah karakter yang diambil)
var kataKetiga = kalimat.substr(15, 3); // do your own! 
var kataKeempat = kalimat.substr(19, 5); // do your own! 
var kataKelima = kalimat.substr(25, 6); // do your own! 

console.log('Kata Pertama: ' + kataPertama) 
console.log('Kata Kedua: ' + kataKedua)
console.log('Kata Ketiga: ' + kataKetiga) 
console.log('Kata Keempat: ' + kataKeempat) 
console.log('Kata Kelima: ' + kataKelima)

// soal 4
var indeks;
var nilai = 75;
if (nilai >= 80) {
  indeks = "A";
} else if (nilai >= 70 && nilai < 80) {
  indeks = "B";
} else if (nilai >= 60 && nilai < 70){
  indeks = "C";
} else if (nilai >= 50 && nilai < 60){
  indeks = "D";
}else{
  indeks = "E";
}
console.log(indeks)

// soal 5
var tanggal = 1;
var bulan = 3;
var tahun = 1996;
switch (bulan) {
  case 1:
    bulan = "Januari";
    break;
  case 2:
    bulan = "Februari";
    break;
  case 3:
    bulan = "Maret";
    break;
  case 4:
    bulan = "April";
    break;
  case 5:
    bulan = "Mei";
    break;
  case 6:
    bulan = "Juni";
    break;
  case 7:
    bulan = "Juli";
    break;
  case 8:
    bulan = "Agustus";
    break;
  case 9:
  	bulan = "September";
    break;  
  case 10:
    bulan = "Oktober";
    break;
  case 11:
    bulan = "November";
    break;
  case 12:
  	bulan = "Desember";
    break;
}
console.log(tanggal.toString(),bulan.toString(),tahun.toString()); 