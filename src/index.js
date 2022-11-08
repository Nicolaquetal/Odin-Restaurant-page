import { functionHome } from "./initial.js";
import { functionBackHome } from "./initial.js";
import { functionMenu } from "./menu.js";
import { functionContact } from "./contact.js";
import './style.css';
/*import './homepage.jpg';
import './menu1.jpg';
import './menu2.jpg';
import './menu3.jpg';
import './menu4.jpg';
import './menu5.jpg';
import './menu6.jpg';*/



functionHome();

const tabHome= document.querySelector(".tabHome")
const tabMenu= document.querySelector(".tabMenu")
const tabContact= document.querySelector(".tabContact")

tabHome.addEventListener("click", ()=>{
    const spec = document.querySelector(".specific");
    spec.remove();
    functionBackHome();
    
    
})
tabContact.addEventListener("click", ()=>{
    const spec = document.querySelector(".specific");
    spec.remove();
    functionContact();
    
})


tabMenu.addEventListener("click", ()=>{
    const spec = document.querySelector(".specific");
    spec.remove();
    functionMenu();
    
    
})


