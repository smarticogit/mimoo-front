const list = document.querySelector('.list');
const create = document.querySelector('.create');
const get = document.querySelector('.get');
const getTag = document.querySelector('.get-tag');
const deleteElement = document.querySelector('.delete');
const update = document.querySelector('.update');
const box = document.querySelector('.box');

list.addEventListener('click', async () => {

    try {
        const response = await fetch("https://qfdzv16do0.execute-api.us-east-1.amazonaws.com/tools");
        const data = await response.json();

        box.innerHTML = '';

        data.map(tool => {

            const card = document.createElement('div');
            card.classList.add('card');

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
});




