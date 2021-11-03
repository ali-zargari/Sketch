import {init, modifyContainer, addElement, generateGrid} from "./tools.js";

let canvas = '';
let side = '';
let material = '';
let space ='';

let grid_size = {
    x: 8,
    y: 8
};

let canvas_size = {
    width: 8,
    height: 8
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
    container.style.justifyContent = 'center';

    space = addElement('div', 'space', container);
    modifyContainer(space,'flex', screen.width+'px', '100%', '0', '');

    side = addElement('div', 'box settings', space);
    modifyContainer(side,  '', '', '650px', '0', '0');

    canvas = addElement('div', 'box canvas', space);
    modifyContainer(canvas, '', '', '650px', '0', '0');

    container.style.cssText += 'padding-top: 5%; padding-bottom: 10%; padding-left: 10%;  padding-right: 10%;';
    side.style.cssText += 'flex: 0 0 120px; border: solid 2px; ';
    canvas.style.cssText += 'flex: 0 0 650px; border: solid 2px; ';
    space.style.justifyContent = 'center';

}


/***
 * Fills passed container with a grid.
 *
 * @param container fill the given parameter with a grid.
 */
let fillContainerWithGrid = (container, rows, cols) =>{
    container.style.cssText += generateGrid(rows, cols,[0,0]);
}

let removeGridFromCanvas = () => {

    console.log(canvas.querySelectorAll('.material'+'').forEach(e => e.remove()));
}

let fillGridWithMaterialOfType = (name, color, css) => {

    for(let i = 0; i < grid_size.x; i++){
        for(let j = 0; j < grid_size.y; j++){
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
let initCanvas = () => {
    setGridSize(grid_size.x, grid_size.y);
    fillContainerWithGrid(canvas, grid_size.x, grid_size.y);
    material = createMaterial('material');
    fillGridWithMaterialOfType('material', 'red', 'border: solid 1px;');
    console.log(material);
};

/***
 * set up the side pane for settings
 */
let initSide = () => {
    side.style.display = 'flex';
    side.style.flexDirection = 'column';

    let size = addElement('div','size',side);
    size.style.flex = '1 1 100%'
    size.style.border = 'solid';
    initSize(size);

    let mode = addElement('div','mode',side);
    mode.style.flex = '1 1 70%'
    mode.style.border = 'solid';


};


/***
 * Helper method for setting the size
 *
 *
 * @param size grid size
 */
let initSize = (size) => {

    let slider = addElement('input','grid_size',size);
    slider.type = 'range';
    slider.style.webkitAppearance = 'slider-vertical';
    slider.style.height = '100%';
    slider.min = '1';
    slider.max = '30';
    slider.value = '20';
    slider.step = '1';

    //slider.addEventListener('change',function(e){
     //   setGridSize(e.target.value, e.target.value);
     //   removeGridFromCanvas();
     //   initCanvas();
    //});
    slider.addEventListener('input',function(e){
        setGridSize(e.target.value, e.target.value);
        removeGridFromCanvas();
        initCanvas();
    });
    size.style.flex = '1 1 100%';
    size.style.border = '';

};

/***
 * Helper method for setting the size
 *
 * @param x width
 * @param y height
 */
let setGridSize = (x, y) => {
    grid_size.x = x;
    grid_size.y = y;
};

/***
 * create material with the classname m
 * @param m material name
 * @returns {HTMLDivElement} the resulting html fragment/element.
 */
let createMaterial = (m) => {
    let e = document.createElement('div');
    e.className = m;
    e.onmouseenter = function (e){
        changeColor(e);
    };
    return e;
};

/***
 *
 * @param e
 */
function changeColor(e){
    e.srcElement.style.backgroundColor= 'white';
    console.log(e);
}

/***
 * modify material with a name m, using commands 'cssCommands'
 * @param m material name
 * @param cssCommands CSS text commands
 */
//let modifyMaterial = (m, cssCommands) => {
//    m.style.cssText += cssCommands+'\n';
//};

init();
initHeader();

initContainers();
initCanvas();
initSide();
//setUpSettings();