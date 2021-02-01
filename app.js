const allImages = document.getElementsByTagName('img');
// const allImages = document.querySelectorAll('img');


// for (let img of allImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }


const squareImages = document.getElementsByClassName('square');
// const squareImages = document.querySelectorAll('.square');
// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href)
}

// The following code is about manipulating TEXT content in HTML elements

document.querySelector('h1').innerText = "Lol, I am modifying the first H1's content";
document.querySelector('h1').innerHTML += "<sup>With INNER HTML!</sup>";


// The following code is about retrieving and manipulating different attributes from elements

const firstImg = document.querySelector('img');
firstImg.alt = "Modified the 'alt' property of the first image";
firstImg.setAttribute("alt","Modified the 'alt' property Again!");


// The following code modifies the style of all 'a' tags through the '.style', which creates inline styles for the elements
const allLinks = document.querySelectorAll('a');
for (let link of allLinks)  {
    link.style.color = 'rgb(0,108,134)';
    link.style.textDecorationStyle = 'wavy';
    link.style.textDecorationColor = 'magenta';
}

// The following code modifies the style of the 'h2 tags through adding or removing css classes
const h2 = document.querySelector('h2');
h2.classList.add('purple');
h2.classList.add('border');
