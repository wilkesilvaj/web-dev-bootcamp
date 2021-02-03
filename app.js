const btn = document.querySelector('#v2');

btn.onclick = () => {
    console.log('This buttons makes use of external scripts!');
}

function scream() {
    console.log("AAAAAAAAAA! You have hover over the button!");
}

btn.onmouseover =   scream;

const btn3 = document.querySelector('#v3');

btn3.addEventListener('click', () =>    {
    alert("You have clicked on button #3!")
})

// Code to randomize bgcolor
const colorBtn = document.querySelector('#color');

const randomizeColor = () =>    {
    let r = Math.floor(Math.random()*255 + 1);
    let g = Math.floor(Math.random()*255 + 1);
    let b = Math.floor(Math.random()*255 + 1);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}


colorBtn.addEventListener('click', randomizeColor);