const fakeRequest = (url) =>    {
    return new Promise((resolve, reject)    =>  {
        const rand = Math.random();
        setTimeout(() =>    {
            if (rand < 0.7) {
                resolve('YOUR FAKE DATA HERE')
            }
            reject('Request Error!');
            
        }, 2000)
    })

};

fakeRequest('fakeUrl.com')
    .then((data) => {
        console.log('DONE WITH REQUEST');
        console.log(data);
    })    
    .catch((err) => {
        console.log('Oh no!', err);       
    })
    