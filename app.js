console.log("Sup!");

let random = Math.random();
if (random < 0.5)   {
    console.log("Your number is less than 0.5!");
}
else    {
    console.log("Your number is higher than 1.0")
}


const wowClasses = ['Fairy','Rogue', 'Warrior', 'Demon Hunter', 'Hunter', 'Death Knight'];
console.log(wowClasses);

// Removes the first item from the array, which is 'Fairy' 
wowClasses.shift(); 
console.log(wowClasses);

// Adds 'Druid' at the start of the array
wowClasses.unshift('Druid');
console.log(wowClasses);

// Adds 'Battle Mage' to the end of the array
wowClasses.push('Battle Mage');
console.log(wowClasses);

// Removes the last item from the array, which is 'Battle Mage'
wowClasses.pop();
console.log(wowClasses);

//  Example of a nested array
const gameBoard = [['X','0','X'],['0',null, 'X'], ['0','0','X']];


// Example of an object
const person =  {
    firstName: 'John',
    lastName: 'Wilke Silva',
    age: 27,
    height: 1.80,
    weight: 85
};

// Prints all the information from the object
console.log(person);

// Prints only the person's age
console.log(person.age);


const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206'
}

let fullAddress = restaurant.address + ',' + restaurant.city +',' + restaurant.state + ',' +restaurant.zipcode;

console.log(fullAddress);