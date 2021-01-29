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




