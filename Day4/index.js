const root = document.querySelector(':root');
let text = document.querySelector(".textColor");
const hexadecimal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
let color;

function sortColor() {
  color='#';
  for (let i = 0; i < 6; i++) {
    color += hexadecimal[parseInt(Math.random() * hexadecimal.length)]
  }
}

function changeText(){
  text.innerHTML = `Hexadecimal: ${color}`
}

function changeBg() {
  sortColor();
  root.style.setProperty('--background-color', color);
  changeText();
}