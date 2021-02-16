class Cat  {
    constructor(name, age)   {
    this.name = name;
    this.age = age;
    }

    eat()   {
        return `${this.name} is eating!`;
    }

    meow()  {
        return 'Meow!';
    }
}

class Dog  {
    constructor(name, age)   {
    this.name = name;
    this.age = age;
    }

    eat()   {
        return `${this.name} is eating!`;
    }
    bark()  {
        return 'Bark!';
    }
}

const pitchula = new Dog('Pitchula', 12);
const gato = new Cat('Gato', 3);