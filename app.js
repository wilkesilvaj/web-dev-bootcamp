
//  This is valid syntax
// async function sing()   {

// }

// Asynchronous functions automatically create
// Promises for you. In order to fulfill the Promise:
// • you must return a value
// To 'fail' the Promise, you must:
// • 'throw' something, regardless if its an error, a String, etc

// This is also valid syntax
const sing = async ()   =>  {
    if (Math.random() <= 0.7)   {
        return "Do Re Mi Fa Sol La Si Do";
    }
    throw "You cannot sing!";

}