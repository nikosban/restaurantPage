import { makeElement } from "./functions";

function loadHomePage() {
    const contentContainer  = document.getElementById("content");

    const heroContainer = makeElement("div", "", "", contentContainer);
    makeElement("h1", "", "Welcome to Neró", heroContainer)
    makeElement("h2", "", "Experience the Flavors of the Aegean Sea", heroContainer)
    makeElement("p", "", "Nestled on the stunning island of Milos, Neró brings you the freshest seafood and authentic Greek flavors right by the water’s edge. Our menu celebrates the rich culinary heritage of Greece with a focus on locally-sourced seafood, vibrant Mediterranean ingredients, and timeless recipes.", heroContainer)

    const featureCardSection = makeElement("div", "featureSection", "", contentContainer);
    const featureCard1 = makeElement("div", "featureCard", "", featureCardSection);
    const featureCard2 = makeElement("div", "featureCard", "", featureCardSection);
    const featureCard3 = makeElement("div", "featureCard", "", featureCardSection);

    makeElement("h3", "", "Savor the Catch of the Day", featureCard1);
    makeElement("p", "", "Each morning, our chefs handpick the best catches from local fishermen, ensuring every dish is as fresh as the sea itself. From tender octopus grilled to perfection, to delicate sea bream baked with local herbs, our plates capture the essence of Milos in every bite.", featureCard1);
    makeElement("h3", "", "A Dining Experience with a View", featureCard2);
    makeElement("p", "", "Enjoy your meal surrounded by the breathtaking beauty of Milos. Relax with the sea breeze and a glass of Greek wine, and let our team take you on a culinary journey through the Aegean.", featureCard2);
    makeElement("h3", "", "Our Commitment to Sustainability", featureCard3);
    makeElement("p", "", "At Neró, we’re dedicated to sustainable practices. By supporting local fishermen and choosing eco-friendly methods, we ensure that each dish is as respectful to the sea as it is delicious.", featureCard3);
}
 
export {loadHomePage};