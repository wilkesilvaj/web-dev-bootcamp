let option = prompt ("What would you like to do?");
const myList = [];
while(option !== 'quit')    {

    if (option === 'add')   {
        myList.push(prompt("Please enter the activity to be added to your list!"));
    }
    else if (option === 'delete')   {
        
        myList.splice(prompt("What is the index of the item you would like to delete?"),1);

    }
    else if (option === 'list') {
        console.log("************");
        console.log("To-do List");
        for (let i = 0; i < myList.length; i++)  {
            console.log(`Item #${i}: ${myList[i]}`);
        }
        console.log("************");           
    }
    else    {
        alert("Please enter a valid option!");
    }

    option = prompt("What would you like to do next?");
}
alert("Successfully logged off!");