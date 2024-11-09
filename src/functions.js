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

 export {makeElement};