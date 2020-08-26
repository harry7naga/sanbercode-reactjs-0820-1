//program pertama
var sayHello = "Hello World!" 
console.log(sayHello) //memanggil variabel sayHello

//variable
var name = "John" // Tipe
var angka = 12
var todayIsFriday = false 

console.log(name) // "John"
console.log(angka) // 12
console.log(todayIsFriday) // false

//string
var sentences = "Javascript" 
console.log(sentences[0]) // "J"
console.log(sentences[2]) // "v"

//lenght
var word = "Javascript is awesome"
console.log(word.length) // 21 

//charArt
console.log('i am a string'.charAt(3)); // 'm'

//concat[string]
var string1 = 'good';
var string2 = 'luck';
console.log(string1.concat(string2)); // goodluck

//indexOf
var text = 'dung dung ces!';
console.log(text.indexOf('dung'));  // 0
console.log(text.indexOf('u'));     // 1
console.log(text.indexOf('jreng')); // -1

var username    = 'administrator';
var newUsername = username.trim(); 
console.log(newUsername) // 'administrator'

var string1 = 'good';
var string2 = 'luck';
var string3 = 'bye';
var string4 = 'bye';
console.log(string1.concat(" ",string2," ",string3," ",string4)); // goodluck

var int  = '89';
var real = '56.7';
var strInt_1 = parseInt(int);  // strInt_1 = 89
var strInt_2 = parseInt(real); // strInt_2 = 56
var c = strInt_1 + strInt_2;
console.log(c);

var motor1 = 'zelda motor';
var motor2 = motor1.substr(6, 5);
console.log(motor2); // ld