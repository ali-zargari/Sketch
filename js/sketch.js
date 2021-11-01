import {init, modifyContainer, addElement, generateGrid} from "./tools.js";



var initHeader = () => {
    document.querySelector('h1'+'').style.textAlign = 'center';
    document.querySelector('h1'+'').style.paddingTop = '5%';
    document.querySelector('h1'+'').style.cssText += 'margin: 0;' ;
}

let box1 = '';
/***
 * sets up containers for this app
 */
var initContainers = () => {

    let container = addElement('div','container',document.body);
    modifyContainer(container,'flex', '', '90%', '0', '');

    box1 = addElement('div', 'box', container);
    modifyContainer(box1, '', '100%', '100%', '0', 'solid')

    let box2 = addElement('div', 'box', container);
    modifyContainer(box2, '', '100%', '100%', '0', 'solid')

    container.style.cssText += 'padding-top: 5%; padding-bottom: 10%; padding-left: 10%;  padding-right: 10%;';
    box1.style.cssText += 'flex: 1 1 15%; border: solid; ';
    box2.style.cssText += 'flex: 1 1 85%; border: solid; ';

}


/***
 * Fills passed container with a grid.
 *
 * @param container fill the given parameter with a grid.
 */
var fillContainerWithGrid = (container, rows, cols) =>{
    container.style.cssText += generateGrid(rows, cols,[0,0]);
}

init();
initContainers();
initHeader();
fillContainerWithGrid(box1, ['1fr', '1fr', '1fr'], ['1fr', '1fr', '1fr']);
