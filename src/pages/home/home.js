const list = document.querySelector('.list');
const create = document.querySelector('.create');
import { serviceList } from '../../service/serviceList.js'
import { serviceCreate } from '../../service/serviceCreate.js';

list.addEventListener('click', () => {

    serviceList();
});

create.addEventListener('click', () => {

    serviceCreate();
});




