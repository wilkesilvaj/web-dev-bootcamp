fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(result => {
        console.log("RESPONSE ACQUIRED, WAITING FOR PARSE...");
       
    })
    .catch(e => {
        console.log('ERROR!');
    })

