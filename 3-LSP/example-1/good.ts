/**
 * objects of a superclass should be able to be replaced with objects of a subclass without affecting the correctness of the program
 * subclasses should be able to replace their base classes without altering the correctness of the program
 * This means that any code that uses a base class can also use its subclasses without any modifications, and the program's behavior should remain consistent
 */

class GBaseBird {
  makeSound() {}
}

class GBird extends GBaseBird {
  fly() {
    console.log("Bird can fly");
  }
  makeSound() {
    console.log("Bird makes sound");
  }
}

class GSparrow extends GBird {
  fly() {
    console.log("Sparrow fly");
  }
  makeSound() {
    console.log("Sparrow sound");
  }
}

class GPenguin extends GBaseBird {
  // now we dont have to implement fly method
  makeSound() {
    console.log("Penguin sound");
  }
}

function gmakeBirdFly(bird: GBird) {
  bird.fly();
}

gmakeBirdFly(new GBird());
gmakeBirdFly(new GSparrow());
// now it will throw an error with out compiling
// makeBirdFly(new Penguin());
