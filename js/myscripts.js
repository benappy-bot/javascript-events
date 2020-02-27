//image hover swap
const image = document.querySelector('img');

let titi1 = "images/mono-titi-800.jpg";
let titi2 = "images/mono-titi2-800.jpg";

image.onmouseenter = () => {
	// change image
   image.setAttribute('src', titi1);
};

image.onmouseleave = () => {
// change image
   image.setAttribute('src', titi2);
};

//Hide Howler Monkey Paragraph
let howlerclick = document.querySelector('#howlerclick');
let howlerparagraph = document.querySelector('#howlerparagraph')

howlerparagraph.style.display = 'none';
howlerclick.onclick = () => {
   howlerparagraph.style.display = 'block';
};
let whitefaceimage = document.querySelector('#whitefaceimage');
let whiteface1 = "images/white-face-800.jpg";
let whiteface2 = "images/white-face2-800.jpg";

whitefaceimage.style.display = 'block';
whitefaceimage.onclick = () => {
   whitefaceimage.setAttribute('src', whiteface2);
};
