import {init, modifyContainer, addElement, generateGrid} from "./tools.js";

let canvas = '';
let settings = '';
let material = '';

let size = {
    x: 8,
    y: 8
};

/***
 * initialize the header
 */
let initHeader = () => {
    document.querySelector('h1'+'').style.textAlign = 'center';
    document.querySelector('h1'+'').style.paddingTop = '5%';
    document.querySelector('h1'+'').style.cssText += 'margin: 0;' ;
}

/***
 * sets up containers for this app
 */
let initContainers = () => {

    let container = addElement('div','container',document.body);
    modifyContainer(container,'flex', '', '90%', '0', '');

    settings = addElement('div', 'box settings', container);
    modifyContainer(settings, '', '100%', '100%', '0', 'solid');

    canvas = addElement('div', 'box canvas', container);
    modifyContainer(canvas, '', '100%', '100%', '0', 'solid');

    container.style.cssText += 'padding-top: 5%; padding-bottom: 10%; padding-left: 10%;  padding-right: 10%;';
    settings.style.cssText += 'flex: 1 1 15%; border: solid; ';
    canvas.style.cssText += 'flex: 1 1 85%; border: solid; ';

}


/***
 * Fills passed container with a grid.
 *
 * @param container fill the given parameter with a grid.
 */
let fillContainerWithGrid = (container, rows, cols) =>{
    container.style.cssText += generateGrid(rows, cols,[0,0]);
}

let fillGridWithMaterialOfType = (name, color, css) => {

    for(let i = 0; i < size.x; i++){
        for(let j = 0; j < size.y; j++){
            let t = createMaterial(name + ' ('+i+','+j+')');
            t.style.backgroundColor = color;
            t.style.cssText += css;
            canvas.appendChild(t);
        }
    }

};

/***
 * set up the drawing area byt filling it up with a grid of type Material
 */
let setUpCanvas = () => {
    setSize(20, 20);
    fillContainerWithGrid(canvas, size.x, size.y);
    material = createMaterial('material');
    fillGridWithMaterialOfType('material', 'red', 'border: solid;');
    console.log(material);
};

/***
 * Helper method for setting the size
 *
 * @param x width
 * @param y height
 */
let setSize = (x, y) => {
  size.x = x;
  size.y = y;
};

/***
 * create material with the classname m
 * @param m material name
 * @returns {HTMLDivElement} the resulting html fragment/element.
 */
let createMaterial = (m) => {
    let e = document.createElement('div');
    e.className = m;
    return e;
};

/***
 * modify material with a name m, using commands 'cssCommands'
 * @param m material name
 * @param cssCommands CSS text commands
 */
//let modifyMaterial = (m, cssCommands) => {
//    m.style.cssText += cssCommands+'\n';
//};



init();
initContainers();
initHeader();
setUpCanvas();
//setUpSettings();