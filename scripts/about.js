import { navbar, openMenu, closeMenu ,checklogin} from "../component/navbar.js"
console.log(navbar);
document.querySelector("header").innerHTML=navbar()
document.getElementById("openmenu").addEventListener("click",openMenu);
document.getElementById("closemenu").addEventListener("click",closeMenu);

import footer from "../component/footer.js";
console.log(footer);
document.querySelector("footer").innerHTML=footer();

document.getElementById('orange').addEventListener('click',()=>{
    window.location.href='index.html';
})

document.getElementById('black').addEventListener('click',()=>{
    window.location.href='index.html';
})

checklogin();
