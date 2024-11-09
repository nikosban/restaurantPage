function loadContactPage() {
    const contentContainer  = document.getElementById("content");

    const title = document.createElement("h1");

    title.textContent = "Contact"

    contentContainer.appendChild(title);
}
 
export {loadContactPage};