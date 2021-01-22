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

