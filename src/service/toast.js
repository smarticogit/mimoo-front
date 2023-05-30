const toast = document.querySelector(".toast");
const toastMessage = document.querySelector(".message");

const showToast = (message, type) => {

    toast.style.backgroundColor = type === 'error' ? 'var(--error)' : 'var(--success)';

    toastMessage.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}

export default showToast;