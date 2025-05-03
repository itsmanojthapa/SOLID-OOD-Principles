class BBird {
  fly() {
    console.log("Bird can fly");
  }
  makeSound() {
    console.log("Bird makes sound");
  }
}

class BSparrow extends BBird {
  fly() {
    console.log("Sparrow fly");
  }
  makeSound() {
    console.log("Sparrow sound");
  }
}

class BPenguin extends BBird {
  fly() {
    throw new Error("Penguin can't fly");
  }
  makeSound() {
    console.log("Penguin sound");
  }
}

function bmakeBirdFly(bird: BBird) {
  bird.fly();
}

bmakeBirdFly(new BBird());
bmakeBirdFly(new BSparrow());
// It voilates the Liskov Substitution Principle (LSP) because it throws an error when trying to fly a penguin, which is not expected behavior for a bird.
// bmakeBirdFly(new BPenguin());
