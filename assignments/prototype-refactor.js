/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


// Class version of GameObject:
class GameObject {
    constructor(props) {
        this.name = props.name;
        this.dimensions = props.dimensions;
        this.createdAt = props.createdAt;
    }
    destroy() { 
        return `${this.name} was removed from the game.`;
    }   
}

  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */

class CharacterStats extends GameObject {
    constructor(props) {
        super(props);
        this.healthPoints = props.healthPoints;
    }
    takeDamage() {
        return `${this.name} took damage!`;
    }
    checkIfDead() {
    if (this.healthPoints <= 0 ) {
        return true;
    } else {return false;}
    }
}

  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
   
//class Humanoid
class Humanoid extends CharacterStats {
    constructor(props) {
        super(props);
        this.team = props.team;
        this.weapons = props.weapons;
        this.language = props.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}`;
    }
}

//class hero
class Hero extends Humanoid {
    constructor(props) {
        super(props);
        this.specialAbilities = props.specialAbilities;
        this.attackStrength = props.attackStrength; 
    }
    attack(obj) {
        obj.healthPoints -= this.attackStrength;
        if (obj.checkIfDead() === true) {
            console.log(obj.destroy());
        } else {
            console.log(obj.takeDamage());
            console.log(`${obj.name} has ${obj.healthPoints} health points left!`)
        }
    }
}

//class Villain
class Villain extends Humanoid {
    constructor(props) {
        super(props);
        this.demonStrength = props.demonStrength;
    }
    summonDemonAttack(obj) {
        obj.healthPoints -= this.demonStrength;
        if (obj.checkIfDead() === true )  {
            console.log(obj.destroy());
        } else {
            console.log(obj.takeDamage());
            console.log(`${obj.name} has ${obj.healthPoints} health points left!`);
        }
    } 
}

  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
    'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
    'Giant Sword',
    'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
    'Bow',
    'Dagger',
    ],
    language: 'Elvish',
});
// instatiate a hero!
const hero = new Hero({
    name: 'Tristan Muntsinger',
    createdAt: new Date(),
    healthPoints: 20,
    dimensions: {
        length: 1,
        height: 4,
        width: 2
    },
    team: 'Knights of Voldor',
    weapons: ['Greatsword, Smegleborn Axe'],
    language: 'High Arken',
    specialAbilities: ['Great Strike', 'Swing of the Gods'],
    attackStrength: 4
    });

// instantiate a villain! 
const villain = new Villain({
    name: 'Brutal Slinglord',
    createdAt: new Date(),
    healthPoints: 22,
    dimensions: {
        length: 1,
        height: 7,
        width: 5
    },
    team: 'Demons of Vallath',
    weapons: ['Demon Blade, Soul Spear'],
    language: 'Demon',
    demonStrength: 5
});

// Tests and then a game using the objects and their methods.

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  

// Let's play a game! 
while (hero.healthPoints > 0 && villain.healthPoints > 0) {
console.log('The hero attacks first.');
hero.attack(villain);
console.log("Now it is the Villain's turn...");
villain.summonDemonAttack(hero);
}
console.log('The game is over. The battle is won. Play again soon.')


  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
    /*
    function Hero(attrs) {
      Humanoid.call(this, attrs);
      this.specialAbilities = attrs.specialAbilities;
      this.attackStrength = attrs.attackStrength;
    }
    Hero.prototype = Object.create(Humanoid.prototype);
    // takes in an object being attacked, and adjusts its healthpoints by the attack amount. 
    // checks if dead, and returns the appropriate response
    Hero.prototype.attack = function(obj) {
      obj.healthPoints -= this.attackStrength;
      if (obj.checkIfDead() === true) {
        console.log(obj.destroy());
      } else {
        console.log(obj.takeDamage());
        console.log(`${obj.name} has ${obj.healthPoints} health points left!`)
      }
    }
    */


  
