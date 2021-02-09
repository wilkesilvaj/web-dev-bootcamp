
//  This is valid syntax
// async function sing()   {

// }

// Asynchronous functions automatically create
// Promises for you. In order to fulfill the Promise:
// • you must return a value
// To 'fail' the Promise, you must:
// • 'throw' something, regardless if its an error, a String, etc

// This is also valid syntax
const sing = async () => {
    if (Math.random() <= 0.7) {
        return "Do Re Mi Fa Sol La Si Do";
    }
    throw "You cannot sing!";

}

sing()
    .then(data => {
        console.log("Promise resolved with ", data);
    })
    .catch(err => {
        console.log("Promise failed, ", err);
    })


const login = async (username, password) => {
    if (!username || !password) throw 'Missing credentials';
    if (password === '123456') return `Welcome, ${username}`;
    throw 'Password error';

    
    
}

login('Johnny', '987654')
    .then(msg => {
        console.log("LOGIN SUCCESFUL!");
        console.log(msg);
    })
    .catch(err => {
        console.log("LOGIN FAILED!");
        console.log(err)
    })
    
login("Alina",'123456')
    .then(msg => {
        console.log("LOGIN SUCCESFUL!");
        console.log(msg);
    })
    .catch(err => {
        console.log("LOGIN FAILED!");
        console.log(err)
    })
  
    

