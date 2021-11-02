import {init, modifyContainer, addElement, generateGridOfType} from "./tools.js";

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
let fillContainerWithGridOfType = (container, rows, cols, type) =>{
    container.style.cssText += generateGridOfType(rows, cols,[0,0], type);
}

let fillGridWithMaterialOfType = (material) => {

    for(let i = 0; i < size.x; i++){
        for(let j = 0; j < size.y; j++){
            let t = createMaterial('('+i+','+j+')');
            t.style.cssText += 'border: solid;';
            canvas.appendChild(t);
        }
    }
    //material = document.querySelector('.material');
    //material.className = 'material';
};

/***
 * set up the drawing area byt filling it up with a grid, containing materials in each cell.
 */
let setUpCanvas = () => {
    setSize(10, 10);
    fillContainerWithGridOfType(canvas, size.x, size.y, 'material');
    material = createMaterial('material');
    //modifyMaterial(material, 'border: solid;\ngrid-area: material;\nwidth: 100%;\nheight: 100%;');
    material.style.cssText = 'border: solid;\ngrid-area: material;\nwidth: 100%;\nheight: 100%;';
    fillGridWithMaterialOfType(material);
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