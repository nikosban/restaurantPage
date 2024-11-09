import { makeElement } from "./functions";

function loadContactPage() {
    const contentContainer  = document.getElementById("content");

    const contactDetails = makeElement("div","","",contentContainer);

    makeElement("h1", "", "Contact us", contactDetails)
    makeElement("h3", "", "Neró Taverna", contactDetails)
    makeElement("p", "", "Akti, Milos Island, Greece", contactDetails)
    makeElement("p", "", "Phone: +30 22870 12345", contactDetails)
    makeElement("p", "", "Phone: +30 22870 12345", contactDetails)
    makeElement("p", "", "Email: reservations@thalassataverna.gr", contactDetails)
    makeElement("p", "", "Opening Hours:", contactDetails)
    makeElement("p", "", "Monday – Sunday: 12:00 PM – 11:00 PM", contactDetails)
    makeElement("p", "", "Directions", contactDetails)
    makeElement("p", "", "We’re located right by the shore in Akti, with stunning views of the Aegean. Look for the white and blue exterior and the glow of lanterns welcoming you in.", contactDetails)

}
 
export {loadContactPage};