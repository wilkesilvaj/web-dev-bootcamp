class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating!`;
    }
}

class Cat extends Pet { 
    constructor(name, age, livesLeft = 9)   {
        super(name, age);
        this.livesLeft = livesLeft;
    }

    meow() {
        return 'Meow!';
    }
}

class Dog extends Pet {   
    bark() {
        return 'Bark!';
    }
    eat()   {
        return `${this.name} scarfs its food!!`;
    }
}

const pitchula = new Dog('Pitchula', 12);
const gato = new Cat('Gato', 3);