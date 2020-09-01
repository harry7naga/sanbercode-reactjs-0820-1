// Soal 1
console.log("----- Soal 1 -----")
class Animal {
    constructor(name, legs, cold_blooded) {
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

// Code class Ape dan class Frog di sini
class Ape extends Animal{
	constructor(name, legs, cold_blooded, yell){
		super(name,cold_blooded);
		this.legs = 2;
        this.yell = yell;
	}	
}
 
var sungokong = new Ape("kera sakti")
sungokong.yell = ('Auooo')

console.log(sungokong.name)
console.log(sungokong.legs)
console.log(sungokong.cold_blooded)
console.log(sungokong.yell)


// Code class Ape dan class Frog di sini
class Frog extends Animal{
	constructor(name, legs, cold_blooded, jump){
		super(name);
		this.cold_blooded = true
		this.legs = 4;
        this.jump = jump;
	}	
}

var kodok = new Frog("buduk")
kodok.jump = ('hop hop') // "hop hop"
console.log(kodok.name)
console.log(kodok.legs)
console.log(kodok.cold_blooded)
console.log(kodok.jump)

// Soal 2
console.log(" ")
console.log("----- Soal 2 -----")
class Clock {
  constructor({template}){
      this.template = template
  }
    render = () => {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    var output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

    stop() {
    clearInterval(this.timer);
    };

    start() {
    this.render();
    this.timer = setInterval(this.render, 1000);
    };
}

    var clock = new Clock({template: 'h:m:s'});
      clock.start();