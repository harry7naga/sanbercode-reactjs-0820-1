// class Hero {
//     constructor(name, level) {
//         this.name = name;
//         this.level = level;
//     }

//     // Adding a method to the constructor
//     greet() {
//         return `${this.name} says hello.`;
//     }
// }

// const hero1 = new Hero('Varg', 1);
// console.log(hero1)

// // Creating a new class from the parent
// class Mage extends Hero {
//     constructor(name, level, spell) {
//         // Chain constructor with super
//         super(name, level);

//         // Add a new property
//         this.spell = spell;
//     }
// }

// const hero2 = new Mage('Lejon', 2, 'Magic Missile');
// console.log(hero2)

// function Clock({ template }) {
  
//   var timer;

//   function render() {
//     var date = new Date();

//     var hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     var mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     var secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     var output = template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   this.stop = function() {
//     clearInterval(timer);
//   };

//   this.start = function() {
//     render();
//     timer = setInterval(render, 1000);
//   };

// }

// var clock = new Clock({template: 'h:m:s'});
// clock.start();

class Clock {
  
    var timer;

  function render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    var output = template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  this.stop = function() {
    clearInterval(timer);
  };

  this.start = function() {
    render();
    timer = setInterval(render, 1000);
  };
}

var clock = new Clock({template: 'h:m:s'});
clock.start();  