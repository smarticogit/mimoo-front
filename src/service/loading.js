const loadingElement = document.querySelector(".box-loading");
let dots = "";


module.exports.loading = () => {
    loadingElement.textContent = `Loading${dots}`;
    dots += ".";
    if (dots.length > 5) {
        dots = "";
    }
}

// loadingElement.style.display = "flex";
// loadingElement.style.display = "none";

setInterval(updateLoadingText, 400);