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