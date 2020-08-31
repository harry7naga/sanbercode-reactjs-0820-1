// Soal 1
console.log("----- Soal 1 -----")
let fungsiLuasLingkaran = (r) => {
  return 3.14 * r * r
}
console.log("--- Luas lingkaran ---")
console.log(fungsiLuasLingkaran(7))

const fungsiKelilingLingkaran = (r) => {
  return 2 * 3.14 * r
}
console.log("--- Keliling lingkaran ---")
console.log(fungsiLuasLingkaran(14))

// Soal 2
console.log(" ")
console.log("----- Soal 2 -----")
let kalimat =""
const tambahkata = (kata) =>{
	kalimat = `${kalimat} ${kata}`
}

console.log('Saya', 'adalah', 'seorang', 'frontend', 'developer')
// Soal 3
console.log(" ")
console.log("----- Soal 3 -----")
const fullName = (firstName, lastName) => {
      return `${firstName} ${lastName}`
    }
console.log (fullName('William','Innoh'))

// Soal 4
console.log(" ")
console.log("----- Soal 4 -----")
const newObject = {
    firstName: "Harry",
  	lastName: "Potter Holt",
  	destination: "Hogwarts React Conf",
  	occupation: "Deve-wizard Avocado",
  	spell: "Vimulus Renderus!!!"
};
 
const {firstName, lastName,destination,occupation,spell} = newObject

console.log(newObject)

// Soal 5
console.log(" ")
console.log("----- Soal 5 -----")
let west = ["Will", "Chris", "Sam", "Holly"]
let east = ["Gill", "Brian", "Noel", "Maggie"]
let combinedArray = [...west, ...east]
console.log(combinedArray)

