var pesertaLomba= [{nama : "Budi", jenisKelamin: "Pria", tinggi: "172cm"}, {nama : "Susi",jenisKelamin: "Wanita", tinggi: "162cm"}, {nama : "Lala", jenisKelamin: "Wanita", tinggi: "155cm"}, {nama: "Agung", jenisKelamin: "Pria",tinggi: "175cm"}]

pesertaLomba.forEach(function (item) {
	console.log(" Nama : " + item.nama)
	console.log(" JenisKelamin : " + item.jenisKelamin)
	console.log(" Tinggi : " + item.tinggi)

})