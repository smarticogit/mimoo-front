const list = document.querySelector('.list');
const create = document.querySelector('.create');
const iconOpenMenu = document.querySelector('.icon-open-menu');
const openClosed = document.querySelectorAll('.box-icon-closed')
const menuH2 = document.querySelectorAll('h2');

import { serviceList } from '../../service/serviceList.js'
import { serviceCreate } from '../../service/serviceCreate.js';

iconOpenMenu.addEventListener('click', () => {

        menuH2.forEach(elemento => {
            elemento.classList.toggle('hidden');
        });

        openClosed.forEach(elemento => {
            elemento.classList.toggle('box-icon-open');
            elemento.classList.toggle('hidden');
        });
});

list.addEventListener('click', () => {

    serviceList();
});

create.addEventListener('click', () => {

    serviceCreate();
});

window.onload = serviceList()

// document.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
//     showToast('Oppps!', 'error');
// });