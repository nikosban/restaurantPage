function loadHomePage() {
    const contentContainer  = document.getElementById("content");

    const heroContainer = document.createElement("div")
    const heroTitle = document.createElement("h1");
    const heroSubtitle = document.createElement("h3");
    const heroText = document.createElement("p");



    heroTitle.textContent = "Welcome to Neró"
    heroSubtitle.textContent = "Experience the Flavors of the Aegean Sea"
    heroText.textContent = "Nestled on the stunning island of Milos, [Restaurant Name] brings you the freshest seafood and authentic Greek flavors right by the water’s edge. Our menu celebrates the rich culinary heritage of Greece with a focus on locally-sourced seafood, vibrant Mediterranean ingredients, and timeless recipes."


    heroContainer.appendChild(heroTitle);
    heroContainer.appendChild(heroSubtitle);
    heroContainer.appendChild(heroText);

    contentContainer.appendChild(heroContainer);
}
 
export {loadHomePage};