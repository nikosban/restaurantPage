import { cardComponent, makeElement } from "./functions";

function loadMenuPage() {

    const contentContainer = document.getElementById("content")

    const titleContainer = makeElement("div", "", "", contentContainer);
    makeElement("h1","", "Menu", titleContainer);
    makeElement("h3","", "A taste of the Aegean Sea", titleContainer);
    makeElement("p","", "At Thalassa Taverna, our menu is crafted daily to showcase the finest seafood from the waters surrounding Milos. Every dish honors the local ingredients and culinary traditions of Greece, with a focus on freshness, simplicity, and vibrant flavors.", titleContainer);

    const menuContainer = makeElement("div", "", "", contentContainer);
    const menuList = makeElement("ul", "", "", menuContainer);

    makeElement("h5", "", "Appetizers", menuList);
    const menuCard1 = makeElement("div", "menuCard", "", menuList);
    makeElement("h5", "", "Grilled Octopus", menuCard1);
    makeElement("h5", "", "12€", menuCard1);
    makeElement("p", "", "Tender local octopus, marinated in olive oil, lemon, and oregano, then grilled to perfection. Served with a side of fava puree from Santorini.", menuCard1);

    const menuCard2 = makeElement("div", "menuCard", "", menuList);
    makeElement("h5", "", "Shrimp Saganaki", menuCard2);
    makeElement("h5", "", "14€", menuCard2);
    makeElement("p", "", "Fresh shrimp cooked in a rich tomato sauce with feta cheese, garlic, and a hint of ouzo, creating a unique flavor that’s unmistakably Greek.", menuCard2);

    makeElement("h5", "", "Main Courses", menuList);
    const menuCard3 = makeElement("div", "menuCard", "", menuList);
    makeElement("h5", "", "Aegean Sea Bream", menuCard3);
    makeElement("h5", "", "18€", menuCard3);
    makeElement("p", "", "Whole sea bream grilled with local herbs and lemon, drizzled with our house-made olive oil. Served with a side of seasonal greens.", menuCard3);

    const menuCard4 = makeElement("div", "menuCard", "", menuList);
    makeElement("h5", "", "Fisherman’s Seafood Pasta", menuCard4);
    makeElement("h5", "", "20€", menuCard4);
    makeElement("p", "", "A Milos specialty with mussels, calamari, shrimp, and clams tossed in a light garlic, white wine, and tomato sauce over handmade pasta.", menuCard4);


    cardComponent(
        "Patates",
         "3$",
          "This is a test card",
           menuList)

           
    cardComponent("Ntomates", "8$", "This is a test card", menuList)
    cardComponent("Elies", "4$", "This is a test card", menuList)
};

export {loadMenuPage};