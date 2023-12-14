// Inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof woof!");
  }
}

class Goat extends Animal {
  bark() {
    console.log("Meee!");
  }
}

const myGoat = new Goat("Goaty");
myGoat.eat();
myGoat.bark();

const myDog = new Dog("Buddy");
myDog.bark();
myDog.eat();