const functionContact =()=>{
    const divmiddle= document.querySelector(".middle");
    const divmiddletitle2= document.querySelector(".middle-title2");

    /* Create home page */
    const contactframe = document.createElement("iframe");
    contactframe.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6647.278975517241!2d-73.6288663382226!3d45.53349386138949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9191ab3fb9e45%3A0x9540af60c05aea27!2sMontr%C3%A9al%2C%20QC%20H2R%202W1%2C%20Canada!5e0!3m2!1sfr!2sfr!4v1667772751087!5m2!1sfr!2sfr"
    contactframe.width="600"
    contactframe.height="450"
    contactframe.style="border:0;"
    contactframe.allowfullscreen=""
    contactframe.loading="lazy"
    contactframe.referrerpolicy="no-referrer-when-downgrade"
    contactframe.className="specific"

    divmiddle.insertBefore(contactframe,divmiddletitle2)
}
export{functionContact};