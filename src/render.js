
// export const errorMessageRender = (message) => {
//     const main = document.querySelector('.registration_Main');
//     const registrationContainer = document.querySelector('.registration_container');

//     const errorBox = document.createElement('div');
//     errorBox.classList.add('err_msg_box');

//     const errorText = document.createElement('p');
//     errorText.classList.add('error_Message_text');
//     errorText.innerText = message;
//     errorBox.appendChild(errorText);

//     const oldError = document.querySelector('.err_msg_box');
//     if (oldError) {
//         oldError.remove();
//     }

//     return main.insertBefore(errorBox, registrationContainer);
// };
export const errorMessageRender = (message) => {
    const main = document.querySelector('.registration_Main');
    const oldError = document.querySelector('.err_msg_box');
    if (oldError) oldError.remove();  // Remove first to avoid duplication

    const errorBox = document.createElement('div');
    errorBox.classList.add('err_msg_box');
    errorBox.innerHTML = `<p class="error_Message_text">${message}</p>`;

    const registrationContainer = document.querySelector('.registration_container');
    main.insertBefore(errorBox, registrationContainer);
};
