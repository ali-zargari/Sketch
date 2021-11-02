/***
 *
 * A helper file to help with JS front end development.
 *
 *
 * @author Ali Zargari
 *
 */

/***
 * initialize html and body components.
 */
let init = () => {
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
 * @param args arg0: width, arg1: height, arg2: margin, arg3: border, arg4: padding
 */
let modifyContainer = (container, displayType, ...args) => {

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
 * @param type type of element to be created.
 * @param parent select the parent-element.
 */
let addElement = (type, class_name, parent) => {
    let element = document.createElement(type)
    if(class_name.length > 0) element.className = class_name;
    parent.appendChild(element);
    return element;
};


/***
 *
 * Returns the CSS text for a grid layout using the parameters.
 *
 * @param rows an array representing the rows
 * @param cols an array representing the columns
 * @param gap an array containing V and H gap.
 * @returns {string} returns the CSS code for a grid using the given settings.
 */
let generateGrid = (rows, cols, gap) => {


    let result = 'display: grid;\n';
    result += 'grid-template-rows: repeat('+rows+', 1fr);\n';
    result += 'grid-template-columns:  repeat('+cols+', 1fr);\n';
    result += 'gap: ' + gap[0] + ' ' + gap[1] + ';\n';

    console.log(result);
    return result;
};


export {init, modifyContainer, addElement, generateGrid};

