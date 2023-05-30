const box = document.querySelector('.box');
import showToast from '../service/toast.js';

export const serviceCreate = async () => {

    box.innerHTML = '';

    box.classList.add('flex-column-center');
    box.classList.remove('flex-start-start');

    const form = document.createElement('form');
    form.classList.add('form', 'flex-column-center');

    const formTitle = document.createElement('h2');
    formTitle.textContent = 'Create Tools';

    const title = document.createElement('input');
    title.classList.add('title');
    title.type = 'text';
    title.placeholder = 'Tool Title';

    const description = document.createElement('input');
    description.classList.add('description');
    description.type = 'text';
    description.placeholder = 'Tool Description';

    const link = document.createElement('input');
    link.classList.add('link');
    link.type = 'text';
    link.placeholder = 'Tool Link';

    const tags = document.createElement('input');
    tags.classList.add('tags');
    tags.type = 'text';
    tags.placeholder = 'tag, tag, tag, tag';

    const button = document.createElement('button');
    button.textContent = 'Create';

    form.append(formTitle, title, description, link, tags, button);
    box.append(form);

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        try {
            const tagsValue = tags.value;
            const tagsArray = tagsValue.split(',');

            const data = {
                title: title.value,
                description: description.value,
                link: link.value,
                tags: tagsArray
            };

            for (let field in data) {
                if (!data[field]) {
                    return showToast('Empty fields', 'error');
                }
            }

            const response = await fetch('https://qfdzv16do0.execute-api.us-east-1.amazonaws.com/tools', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                return showToast('Error create', 'error');
            }
            const responseData = await response.json();

            title.value = "";
            description.value = "";
            link.value = "";
            tags.value = "";

            return showToast('Create Successfully', 'success');

        } catch (error) {
            console.error(error);
        }
    });
}