export const errorMessageRender = (message) => {
    const errorContainer = document.createElement('div');
    errorContainer.className = 'error-message';
    errorContainer.textContent = message;
    errorContainer.style.color = 'red';
    errorContainer.style.marginTop = '10px';
    const form = document.querySelector('#form');
    form.appendChild(errorContainer);
    setTimeout(() => {
        errorContainer.remove();
    }, 5000);
};