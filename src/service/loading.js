const boxLoading = document.querySelector('.box-loading');
const divloading = document.querySelector('.loading');

export const loading = (status) => {

    if (status === 'on') {
        boxLoading.style.display = "flex";
        runLoading();
    } else {
        boxLoading.style.display = "none";
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