 function makeElement (type, className, content, target) {

    const element = document.createElement(type);

    if (className) {
        element.className = className;
    }
    
    if (content) {
        element.textContent = content;
    }

    target.appendChild(element);
    return element;

 }

 function cardComponent (title, price, description, target) {
    const card = makeElement("div", "menuCard", "", target);

    const titleWrap = makeElement("div", "titleWrap", "", card);
    makeElement("h3", "", title, titleWrap);
    makeElement("div", "divider", "", titleWrap);
    makeElement("h3", "", price, titleWrap);

    makeElement("p", "", description, card);

    return card;
 }

 export {makeElement, cardComponent};