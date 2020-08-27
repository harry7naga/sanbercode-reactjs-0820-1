// Soal 1
console.log('Lopping Pertama')
var flag = 2;
while(flag <= 20) { // Loop akan terus berjalan selama nilai flag masih dibawah 20
  console.log(flag +' - I love looping'); // Menampilkan nilai flag pada iterasi tertentu
  flag += 2; // Mengubah nilai flag dengan menambahkan 2 
}
console.log(' ')
console.log('Lopping Kedua')
var deret = 20;
while(deret > 2) { // Loop akan terus berjalan selama nilai deret masih di atas sama dengan 2
  console.log(deret + ' - I will become a frontend developer')
  deret -= 2; // Mengubah nilai deret dengan mengurangi 2
}
console.log(' ')

// Soal 2
for(var angka = 1; angka <= 20; angka++){
  if((angka%2)==1 && (angka%3)==0){
    console.log(angka + " I love Coding");
  }else if((angka%2)===0) {
    console.log(angka + " Berkualitas");
  }else if((angka%2)==1 ){
    console.log(angka + " Santai");
  }
}
console.log(' ')

// Soal 3
var s = '';
for(var baris = 0; baris < 7; baris++){
	for(var j = 0; j <= baris; j++){
		s += '#';
	}
	s += '\n'
}
console.log(s)
console.log(' ')

// Soal 4
var kalimat='saya sangat senang belajar javascript';
var ar = kalimat.split(' ');
console.log( ar );
console.log(' ')

// Soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var urut=daftarBuah.sort();
console.log(urut)