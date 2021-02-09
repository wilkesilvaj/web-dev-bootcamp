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


    