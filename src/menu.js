const functionMenu =()=>{
    
    const divmiddle= document.querySelector(".middle");
    const divmiddletitle2= document.querySelector(".middle-title2");
    
    /* Create Menu page */
    const menudiv = document.createElement("div");
    menudiv.classList="menu specific"
    const menuimage1 = document.createElement("img");
    menuimage1.src="./menu1.jpg"
    menuimage1.className="image-menu"
    const menuimage2 = document.createElement("img");
    menuimage2.src="./menu2.jpg"
    menuimage2.className="image-menu"
    const menuimage3 = document.createElement("img");
    menuimage3.src="./menu3.jpg"
    menuimage3.className="image-menu"
    const menuimage4 = document.createElement("img");
    menuimage4.src="./menu4.jpg"
    menuimage4.className="image-menu"
    const menuimage5 = document.createElement("img");
    menuimage5.src="./menu5.jpg"
    menuimage5.className="image-menu"
    const menuimage6 = document.createElement("img");
    menuimage6.src="./menu6.jpg"
    menuimage6.className="image-menu"
    menudiv.appendChild(menuimage1)
    menudiv.appendChild(menuimage2)
    menudiv.appendChild(menuimage3)
    menudiv.appendChild(menuimage4)
    menudiv.appendChild(menuimage5)
    menudiv.appendChild(menuimage6)
    divmiddle.insertBefore(menudiv,divmiddletitle2)
}

export {functionMenu};
