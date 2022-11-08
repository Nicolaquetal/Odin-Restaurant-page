const functionHome =()=>{
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    const content = document.querySelector('#content')
    console.log(content)
    const head = document.createElement("head");
    const titleHead = document.createElement("title");
    const titleContent = document.createTextNode("Restaurant Page")
    const linkStyle = document.createElement("link")
    linkStyle.rel="stylesheet";
    linkStyle.href="style.css"
    titleHead.appendChild(titleContent)
    head.appendChild(titleHead)
    head.appendChild(linkStyle)
    html.insertBefore(head,body)

    /* Create <div class="header"> */
    const divheader= document.createElement("div");
    divheader.className="header"
    const divheadertitle= document.createElement("div");
    divheadertitle.className="header-title"
    const headertitleContent = document.createTextNode("RESTAURANT")
    const divtab= document.createElement("div");
    divtab.className="tab";
    const divhome= document.createElement("div");
    divhome.className ="tabHome";
    const divhomecontent = document.createTextNode("Home")
    const divMenu= document.createElement("div");
    divMenu.className="tabMenu";
    const divMenucontent = document.createTextNode("Menu")
    const divContact= document.createElement("div");
    divContact.className="tabContact";
    const divContactcontent = document.createTextNode("Contact")
    divhome.appendChild(divhomecontent)
    divMenu.appendChild(divMenucontent)
    divContact.appendChild(divContactcontent)
    divtab.appendChild(divhome)
    divtab.appendChild(divMenu)
    divtab.appendChild(divContact)
    divheadertitle.appendChild(headertitleContent)
    divheader.appendChild(divtab)
    divheader.appendChild(divheadertitle)
    content.appendChild(divheader)

    /* Create <div class="middle">  */
    const divmiddle= document.createElement("div");
    divmiddle.className="middle"
    const divmiddletitle= document.createElement("div");
    divmiddletitle.className="middle-title"
    const p1 = document.createElement("p");
    p1.textContent="Best Asian Food in your country";
    const p2 = document.createElement("p");
    p2.textContent="Made with passion since 1966";
    const divmiddletitle2= document.createElement("div");
    divmiddletitle2.className="middle-title2";
    const middletitle2Content = document.createTextNode("Order online or visit us!");
    divmiddletitle.appendChild(p1);
    divmiddletitle.appendChild(p2);
    divmiddletitle2.appendChild(middletitle2Content);
    divmiddle.appendChild(divmiddletitle);
    divmiddle.appendChild(divmiddletitle2);
    content.appendChild(divmiddle)

    /* Create <div class="footer">   */
    const divfooter= document.createElement("div");
    divfooter.className="footer"
    const divfooterContent1 = document.createTextNode("Photo by ")
    const divfooterContent2 = document.createElement("a");
    divfooterContent2.href="https://unsplash.com/@shawnanggg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    const divfooterContent21 = document.createTextNode(" shawnanggg ")
    divfooterContent2.appendChild(divfooterContent21)
    const divfooterContent3 = document.createTextNode("on ")
    const divfooterContent4 = document.createElement("a");
    divfooterContent4.href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    const divfooterContent41 = document.createTextNode("Unsplash")
    divfooterContent4.appendChild(divfooterContent41)
    divfooter.appendChild(divfooterContent1);
    divfooter.appendChild(divfooterContent2);
    divfooter.appendChild(divfooterContent3);
    divfooter.appendChild(divfooterContent4);
    content.appendChild(divfooter)

    /* Create home page */
    const homeimage = document.createElement("img");
    homeimage.src="./homepage.jpg";
    homeimage.id="image";
    homeimage.className="specific";
    divmiddle.insertBefore(homeimage,divmiddletitle2);
}
const functionBackHome = () =>{
    const divmiddle= document.querySelector(".middle");
    const divmiddletitle2= document.querySelector(".middle-title2");

    /* Create home page */
    const homeimage = document.createElement("img");
    homeimage.src="./homepage.jpg";
    homeimage.id="image";
    homeimage.className="specific";
    divmiddle.insertBefore(homeimage,divmiddletitle2);

    

}
export {functionHome, functionBackHome};