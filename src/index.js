import 'normalize.css'
import "./styles.scss";
console.log("hello world!");

const rr = "template";

const template = `<h1>${rr}</h1>`;

const app = document.querySelector("#app");


const btn = document.querySelector('.favorites__btn')
const sidebar = document.querySelector('.favorites')

btn.addEventListener('click', () => {
  sidebar.classList.toggle('favorites--opened')
})

app.insertAdjacentHTML('beforebegin', template);
