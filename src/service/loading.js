const boxLoading = document.querySelector('.box-loading');
const divloading = document.querySelector('.loading');
const body = document.querySelector('body')

export const loading = (status) => {

    if (status === 'on') {
        boxLoading.style.display = "flex";
        body.classList.add('wait-cursor');
        runLoading();
    } else {
        boxLoading.style.display = "none";
        body.classList.remove('wait-cursor');
    }
}

let dots = "";

function runLoading() {
    divloading.textContent = `Loading${dots}`;
    dots += ".";
    if (dots.length > 5) {
        dots = "";
    }
}

setInterval(runLoading, 400);