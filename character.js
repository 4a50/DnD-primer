'use strict';

function Character(name, hitPoints = 100) {
  this.name = name;
  this.hitPoints = hitPoints;
  this.race = '';
  this.class = 'warrior';
  this.statArray = [0, 0, 0, 0, 0, 0];
  this.modArray = [0, 0, 0, 0, 0, 0];
  this.proficiencyBonus = 2;
  this.proficiencyArray = [];
  this.armor = 8;
  this.weapon = 5;
  this.useTenSided = false;
  this.equipment = [100]; // GOLD
  this.speed;

}

function rollDice(sides) {
  return Math.floor((Math.random() * sides)) + 1;

}

// TO-DO: USE FOUR DICE AND DROP LOWEST NUMBER
Character.prototype.generateStats = function () {
  for (var i = 0; i < this.statArray.length; i++) {
    var diceValue = [rollDice(6), rollDice(6), rollDice(6)];

    // var diceValue = rollDice();
    console.log(diceValue);


    // Getting sum of numbers
    var sum = diceValue.reduce(function (a, b) {
      return a + b;
    }, 0);

    console.log(sum); // Prints: 15
    this.statArray[i] = sum;
  }
  console.log(this.statArray);
};

Character.prototype.modifierCalc = function () {

  for (var i = 0; i < this.statArray.length; i++) {
    this.modArray[i] = Math.floor((this.statArray[i] - 10) / 2);

  }
  console.log(this.modArray);
};


var player = new Character('bob', 100);
player.generateStats();
player.modifierCalc();