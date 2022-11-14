class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  const animalFunctionality = {
    walk: () => console.log("Walking!"),
    sleep: () => console.log("Sleeping!")
  };
  
  const dogFunctionality = {
    bark: () => console.log("Woof!"),
    wagTail: () => console.log("Wagging my tail!"),
    play: () => console.log("Playing!"),
  };
  
  Object.assign(dogFunctionality, animalFunctionality)
  Object.assign(Dog.prototype, dogFunctionality);
  
  
  const pet1 = new Dog("Daisy");
  
  console.log(pet1.name);
  pet1.bark();
  pet1.play();
  pet1.walk();
  pet1.sleep();
  