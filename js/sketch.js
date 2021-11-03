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
    modifyContainer(side,  '', '', '650px', '0', '0px');
    side.style.borderRadius = '4px';

    canvas = addElement('div', 'box canvas', space);
    modifyContainer(canvas, '', '', '650px', '0', '0');

    container.style.cssText += 'padding-top: 5%; padding-bottom: 10%; padding-left: 10%;  padding-right: 10%;';
    side.style.cssText += 'flex: 0 0 120px; border: solid 0px; ';
    canvas.style.cssText += 'flex: 0 0 650px; border: solid 0px; ';
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

/***
 * remove grid from the canvas. Get rid of all the materials.
 */
let removeGridFromCanvas = () => {

    console.log(canvas.querySelectorAll('.material'+'').forEach(e => e.remove()));
}

/***
 * Fill the grid with material elements
 *
 * @param name name of the material
 * @param color color of the material
 * @param css used for passing any css styling.
 */
let fillGridWithMaterialOfType = (name, color, css) => {

    for(let i = 0; i < grid_size.x; i++){
        for(let j = 0; j < grid_size.y; j++){
            let t = createMaterial(name + ' ('+i+','+j+')');
            t.style.backgroundColor = color;
            t.style.cssText += css;
            t.style.borderRadius = '7px';
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
    fillGridWithMaterialOfType('material', 'white', 'border: solid 1px;');
    console.log(material);
};

/***
 * set up the side pane for settings
 */
let initSide = () => {
    side.style.display = 'flex';
    side.style.flexDirection = 'column';

    let size = addElement('div','size',side);
    initSize(size);

    let mode = addElement('div','mode',side);
    initMode(mode);


};


/***
 * Helper method for setting the size
 *
 *
 * @param size grid size
 */
let initSize = (size) => {
    size.style.flex = '1 1 100%';
    size.style.border = 'solid 2px';
    size.style.borderRadius = '10px';
    let slider = addElement('input','grid_size',size);
    size.style.paddingTop = '30px';
    slider.type = 'range';
    slider.style.webkitAppearance = 'slider-vertical';
    slider.style.height = '90%';
    slider.min = '1';
    slider.max = '30';
    slider.value = '20';
    slider.step = '1';


    slider.addEventListener('input',function(e){
        setGridSize(e.target.value, e.target.value);
        removeGridFromCanvas();
        initCanvas();
    });

};


let initMode = (mode) =>  {

    mode.style.flex = '1 1 70%';
    mode.style.border = 'solid 2px';
    mode.style.borderRadius = '10px';
    mode.style.display = 'flex';
    mode.style.flexDirection = 'column';
    mode.style.justifyContent = 'center';
    mode.style.textAlign = 'center';


    let rainbow = addElement('button','rainbow_btn',mode);
    rainbow.textContent = 'RAINBOW';
    rainbow.style.cssText = '-moz-box-shadow: 0px 0px 0px 0px #000000;\n' +
        '\t-webkit-box-shadow: 0px 0px 0px 0px #000000;\n' +
        '\tbox-shadow: 0px 0px 0px 0px #000000;\n' +
        '\tbackground-color:#ff7700;\n' +
        '\t-webkit-border-radius:15px;\n' +
        '\t-moz-border-radius:15px;\n' +
        '\tborder-radius:15px;\n' +
        '\tdisplay:inline-block;\n' +
        '\ttext-align: center;\n' +
        '\tcolor:#ffdd75;\n' +
        '\tmargin-top: 0px;\n' +
        '\tfont-family:Arial;\n' +
        '\tfont-size:11px;\n' +
        '\tfont-weight:700;\n' +
        '\ttext-decoration:none;\n' +
        '\ttext-shadow:0px 0px 0px #663d28;'+
        '\theight: 70px;' +
        '\twidth: 70px;' +
        '\tmargin-left: 25%;' +
        '\tmargin-top: 27%;' +
        '\talign-items: center;';

    let reset = addElement('button','rainbow_btn',mode);
    reset.textContent = 'CLEAR';
    reset.style.cssText = '-moz-box-shadow: 0px 0px 0px 0px #000000;\n' +
        '\t-webkit-box-shadow: 0px 0px 0px 0px #000000;\n' +
        '\tbox-shadow: 0px 0px 0px 0px #000000;\n' +
        '\tbackground-color:#ff7700;\n' +
        '\t-webkit-border-radius:15px;\n' +
        '\t-moz-border-radius:15px;\n' +
        '\tborder-radius:15px;\n' +
        '\tdisplay:inline-block;\n' +
        '\ttext-align: center;\n' +
        '\tcolor:#ffdd75;\n' +
        '\tmargin-top: 0px;\n' +
        '\tfont-family:Arial;\n' +
        '\tfont-weight:700;\n' +
        '\tfont-size:13px;\n' +
        '\ttext-decoration:none;\n' +
        '\ttext-shadow:0px 0px 0px #663d28;'+
        '\theight: 70px;' +
        '\twidth: 70px;' +
        '\tmargin-left: 25%;' +
        '\tmargin-top: 27%;' +
        '\tmargin-bottom: 25%;';
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
 * Change the color of the overlapping material
 * @param e
 */
function changeColor(e){
    e.srcElement.style.backgroundColor= '#ff7700';
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