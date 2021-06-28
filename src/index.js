// import { productsContent } from './products'
// import vera from './img/vera.jpg'
// git subtree push --prefix dist origin gh-pages
import { ce } from './js/domHelpers'
import "./css/styles.css";
import "@fortawesome/fontawesome-free/js/all.js"
import './js/header'
import { header } from './js/header';
import { project, mainApp } from './js/mainApp';
import { footer } from './js/footer';

console.log("hi")
let content = document.getElementById("content")

content.appendChild(header())
content.appendChild(project())
content.appendChild(mainApp())
content.appendChild(footer())
