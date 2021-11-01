/***
 * initialize html and body components.
 */
var init = () => {
    document.querySelectorAll('html, body'+'').forEach(node => {
    node.style.cssText =
            '    width: 100%;\n' +
            '    height: 100%;\n' +
            '    margin: 0px;\n' +
            '    padding: 0px;\n' +
            '    font-family: \'Zen Maru Gothic\', sans-serif;\n' +
            '    font-weight: 500;\n' +
            '    font-size: 20px' ;
    });
};

/***
 * Initialize any element that may be used as container, according to the parameters.
 *
 * @param container the container to be initialized
 * @param displayType set container display type to this parameter
 * @param args arg1: width, arg2: height, arg3: margin, arg4: border, arg5: padding
 */
var modifyContainer = (container, displayType, ...args) => {

    container.style.display = displayType;
    container.style.width = args[0];
    container.style.height = args[1];
    container.style.margin = args[2];
    container.style.border = args[3];
    container.style.padding = args[4];

};

/***
 * create element of type 'type', and append it as the child of 'parent'
 *
 * @param type type of element to be created
 * @param parent select the parent of the element
 */
var addElement = (type, class_name, parent) => {
    let element = document.createElement(type)
    if(class_name.length > 0) element.className = class_name;
    parent.appendChild(element);
    return element;
};

export {init, modifyContainer, addElement};

