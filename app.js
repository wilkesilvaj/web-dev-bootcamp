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
const gameBoard = [
    ['X','0','X'],
    ['0',null, 'X'], 
    ['0','0','X']
];

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

console.log("Loops demo!");

for (let i = 1; i <= 10; i++)   {
    console.log("Example of 'for loops' " + i);
}

let count = 5;
while (count < 10)   {
    console.log("Example of 'while loops' " + count)
    count++;
}

console.log("Looping through an Array / Iterating an Array Demo");
for (let i = 0; i < wowClasses.length; i++) {
    console.log(wowClasses[i]);
}

console.log("Nested Loops Demo");
for (let i = 0; i < 5; i++) {
    console.log("Outer Loop "+ i);
    for (let c = 6; c >0 ; c-=2){
        console.log("Inner Loop: " + c);
    }
}

// Nested Arrays for a seating chart example
const seatingChart = [
    ['John','Alina','Adal'],
    ['Lucas','Queiroz', 'Danillin'], 
    ['Hardil','Deepak','Alexandre']
];

for (let i = 0; i <seatingChart.length; i++)    {
    console.log ("Row #" + i);
    for (let c = 0; c < seatingChart[i].length; c++)    {
        console.log(seatingChart[i][c]);
    }
}

//  Example of a while loop which breaks once the user types 'quit'. The loop verification is intentionally bad just to show the 'break' command
// let input = prompt("Say something!");
// while (true)    {
//     input = prompt(input);
//     if (input === "quit")   {
//         alert("Attaboy / Attagirl!");
//         break;
//     }
// }

console.log("'For Of' / Foreach Demo");
for (let classes of wowClasses) {
    console.log("The current class of WoW is " + classes);
}

const testScores = {
    Kenan: 90,
    Kel: 99,
    Drake: 50,
    Josh: 40,
    Bob: 51,
    Patrick: 46
}


// Loop iterates through an Object
// Remember the 'Object' keyword
// Object.entries returns an array for each property within an object
let totalGrades = 0;
for (let student of Object.entries(testScores)) {
    console.log(`${student[0]} scored ${student[1]}`);
    totalGrades += student[1];
}
console.log(`The sum of grades is ${totalGrades}`);

// Declare a very simple & silly song
function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

// Calls the "singSong" function
singSong();

function greet(name)    {
    console.log(`Greetings,${name}`);
}

greet("Jack");


function returnDay(number)  {
    if (number > 7 || number < 1)   
        return null;
    else    {
        switch (number) {
            case 1:
                return "Monday";
                break;
            case 2:
                return "Tuesday";
                break;
            case 3:
                return "Wednesday";
                break;
            case 4:
                return "Thursday";
                break;
            case 5:
                return "Friday";
                break;
            case 6:
                return "Saturday";
                break;
            case 7:
                return "Sunday";
                break;            
        }
    }  
}  

const add = function (x,y)  {
    return x + y;
}