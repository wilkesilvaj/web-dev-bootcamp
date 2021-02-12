fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(result => {
        console.log("RESPONSE ACQUIRED, WAITING FOR PARSE...");
        // The following method returns another PROMISE, for the actual data within the first FETCH to be parsed into JSON
        return result.json();
    })
    .then(data => {
        console.log("DATA SUCCESSFULLY PARSED!");
        console.log(data.ticker.price);
    })
    .catch(e => {
        console.log('ERROR!');
    })


const fetchBitcoinPrice = async () => {
    try {        
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
        const data = await res.json();
        console.log(data.ticker.price);
    }
    catch (e) {
        console.log("Something went wrong!", e)
    }
}

fetchBitcoinPrice();