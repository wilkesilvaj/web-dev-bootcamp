// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(result => {
//         console.log("RESPONSE ACQUIRED, WAITING FOR PARSE...");
//         // The following method returns another PROMISE, for the actual data within the first FETCH to be parsed into JSON
//         return result.json();
//     })
//     .then(data => {
//         console.log("DATA SUCCESSFULLY PARSED!");
//         console.log(data.ticker.price);
//     })
//     .catch(e => {
//         console.log('ERROR!');
//     })


// const fetchBitcoinPrice = async () => {
//     try {        
//         const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//         const data = await res.json();
//         console.log(data.ticker.price);
//     }
//     catch (e) {
//         console.log("Something went wrong!", e)
//     }
// }

// fetchBitcoinPrice();

axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
.then(res =>    {
    console.log('Data acquired with AXIOS!',res.data.ticker.price);
})
.catch(err =>   {
    console.log("Error", e);
})



// Recreated the async function to get the data, but now using AXIOS
const fetchBitcoinPriceAxios = async()  =>  {
    try{    
    const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    console.log('Data acquired with AXIOS in an ASYNC function', res.data.ticker.price);
    }
    catch(e)    {
        console.log("ERROR :",e);
    }
}

fetchBitcoinPriceAxios();


// Example of fetching an API which demands a specific header
const getDadJoke = async()  =>  {
    // Creates an object to hold the required configurations
    const config = {headers: {Accept: 'application/json'}   };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    console.log('Have you heard this one yet?', res.data.joke);
}

getDadJoke();