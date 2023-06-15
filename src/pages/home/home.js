const list = document.querySelector('.list');
const create = document.querySelector('.create');
const iconMenuLogo = document.querySelector('.icon-menu-logo');
const openClosed = document.querySelectorAll('.box-icon-closed')
const menuH2 = document.querySelectorAll('h2');

import { serviceList } from '../../service/serviceList.js'
import { serviceCreate } from '../../service/serviceCreate.js';

iconMenuLogo.addEventListener('click', () => {

        menuH2.forEach(elemento => {
            elemento.classList.toggle('hidden');
        });

        openClosed.forEach(elemento => {
            elemento.classList.toggle('box-icon-open');
        });
});

list.addEventListener('click', () => {

    serviceList();
});

create.addEventListener('click', () => {

    serviceCreate();
});

window.onload = serviceList()

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    showToast('Oppps!', 'error');
});