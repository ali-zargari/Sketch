import {init, modifyContainer, addElement} from "./tools.js";


init();
let container = document.querySelector('.container'+'');
modifyContainer(container,'flex', '100%', '100%', '0', 'solid');
addElement('div', '', container);

