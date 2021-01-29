// Starter basic arrays and objects

const person = {
    name: "John",
    age: 27,
    gender: "male",
    nationality: "brazilian",
    hometown: "BH",
    hobbies: "guitar and games"
}

const person2 = {
    name: "Alina",
    age: 21,
    gender: "female",
    nationality: "kyrgyz"
}

const nums = [1,2,3,4,5,6,7,8,9,10];
const nums2 = [9,8,7,6,5,4,3,2,1];

// The spread operator allows us to MAKE A COPY of an iterable object 
const clonePerson1 = {...person};
const clonePerson2 = {...person2};

// It also allows us to combine multiple iterable objects
const mutant = {...person,...person2};

// Creates a copy of the array 'nums' and creates a combination of both number arrays
const cloneNums = [...nums];
const mutantNums = [...nums, ...nums2];


// The rest operator allows the function to combine all the "extra" or multiple arguments in a function and combine them into an array.


// The following function will ONLY work if the user inputs the data as an array. e.g: [1,2,3,4]
function sumAllNumbers(nums)    {
   return nums.reduce((total, el)=> total + el);
}

// The following function works EVEN IF THE USER JUST INPUTS MANY NUMBERS SEPARATED BY A COMMA
//  It will combine all the numbers provided into 1 array called 'nums'
function sumAllNumbersRest(...nums)    {
    return nums.reduce((total, el)=> total + el);
 }


 function raceResults(gold, silver, ...everyoneElse)    {
     console.log(`THE GOLD MEDAL GOES TO ${gold}`);
     console.log(`THE SILVER MEDAL GOES TO ${silver}`);
     console.log(`AND A SPECIAL THANKS TO  ${everyoneElse}`);
 }
