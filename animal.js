class Animal {
  // class properties
  #hasBackBone = false;
  #isColdBlooded = false;

  constructor(hasBackBone = false, isColdBlooded = false) {
    if (this.constructor === Animal) {
      throw new Error("Animal Class cannot be called or instantiated");
    }
    this.hasBackBone = hasBackBone;
    this.isColdBlooded = isColdBlooded;

    console.log(`**********${this.constructor.name}**********`);
  }

  type() {
    if (this.hasBackBone && this.isColdBlooded) {
      return `${this.constructor.name} has back-bone and is a cold blooded animal`;
    }

    if (this.hasBackBone && !this.isColdBlooded) {
      return `${this.constructor.name} has back-bone and is a warm blooded animal`;
    }

    if (!this.hasBackBone && this.isColdBlooded) {
      return `${this.constructor.name} does not have back-bone and is a cold blooded animal`;
    }

    return `${this.constructor.name} does not have back-bone and is a warm blooded animal`;
  }

  #movement() {}
}

class Arthropoda extends Animal {
  constructor(hasBackBone, isColdBlooded) {
    super(hasBackBone, isColdBlooded);
  }

  movement() {
    console.log("Arthropoda move by walking on their hinged apendages");
  }
}
class Fish extends Animal {
  constructor(hasBackBone, isColdBlooded) {
    super(hasBackBone, isColdBlooded);
  }

  movement() {
    console.log("fishes swim");
  }
}
class Amphibia extends Animal {
  constructor(hasBackBone, isColdBlooded) {
    super(hasBackBone, isColdBlooded);
  }
  movement() {
    console.log(
      "The most common way amphibians move is by crawling hooping and walking on land with their four legs"
    );
  }
}
class Reptiles extends Animal {
  constructor(hasBackBone, isColdBlooded) {
    super(hasBackBone, isColdBlooded);
  }
  movement() {
    console.log(
      "Reptiles are able to run, crawl, climb, jump, glide, or even swim"
    );
  }
}
class Aves extends Animal {
  constructor(hasBackBone, isColdBlooded) {
    super(hasBackBone, isColdBlooded);
  }

  movement() {
    console.log(
      "Aves have wings and feather and have the ability to swim, walk and perch"
    );
  }
}
class Mammals extends Animal {
  constructor(hasBackBone, isColdBlooded) {
    super(hasBackBone, isColdBlooded);
  }
  movement() {
    console.log("Mammals walk");
  }
}

const arthropoda = new Arthropoda(false, true);
console.log(arthropoda.type());
arthropoda.movement();

const fish = new Fish(true, true);
console.log(fish.type());
fish.movement();

const amphibia = new Amphibia(true, true);
console.log(amphibia.type());
amphibia.movement();

const reptiles = new Reptiles(true, true);
console.log(reptiles.type());
reptiles.movement();

const aves = new Aves(true, false);
console.log(aves.type());
aves.movement();

const mammals = new Mammals(true, false);
console.log(mammals.type());
mammals.movement();
