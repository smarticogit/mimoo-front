import { loading } from "./loading.js";

const box = document.querySelector('.box');

export const serviceList = async () => {
    try {
        box.innerHTML = '';

        loading('on');
        const response = await fetch("https://qfdzv16do0.execute-api.us-east-1.amazonaws.com/tools");
        const data = await response.json();
        loading('off');

        box.classList.add('flex-start-start');
        box.classList.remove('flex-column-center');

        const pageTitle = document.createElement('h2');
        pageTitle.textContent = 'List Tools';

        data.map(tool => {

            const card = document.createElement('div');
            card.classList.add('card');
            card.setAttribute('id', tool.id)

            const cardTitle = document.createElement('p');
            cardTitle.classList.add('card-title');

            const cardDescription = document.createElement('p');
            cardDescription.classList.add('card-description');

            const cardLink = document.createElement('a');
            cardLink.classList.add('card-link');
            cardLink.href = tool.link;
            cardLink.target = "_blank";

            const boxTags = document.createElement('div');
            boxTags.classList.add('box-tags')
            const tags = tool.tags;

            tags.map(item => {
                const tag = document.createElement('p');
                tag.textContent = item;
                tag.classList.add('tag');
                boxTags.append(tag)
            });

            cardLink.textContent = tool.link;
            cardDescription.textContent = tool.description;
            cardTitle.textContent = tool.title;

            card.append(cardTitle, cardDescription, cardLink, boxTags)
            box.append(card);
        })

    } catch (error) {
        console.error(error);
    }
}
