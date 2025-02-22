import { validationCheck } from "./helpers/UserValidator.js";
import {registerUser} from "./services/registration.service.js";

const firstNameInput = document.querySelector('#firstNameInp');
const lastNameInput = document.querySelector('#lastNameInp');
const emailInput = document.querySelector('#emailInp');
const userNameInp = document.querySelector('#userNameInp');
const passwordInp = document.querySelector('#passwordInp');
const passConfirmInput = document.querySelector('#passwordConfirmInp');
const regBtn = document.getElementById('button');
const form = document.querySelector('#form');

let state = {
    filledInFirstName: '',
    filledInLastName: '',
    filledInEmail: '',
    filledInUserName: '',
    filledInPassword: '',
    filledInPasswordConfirmation: ''
};

firstNameInput.addEventListener("input", ({ target: { value } }) => {
    if (value.trim() !== "") {
        state.filledInFirstName = value;
    }
});

lastNameInput.addEventListener("input", ({ target: { value } }) => {
    if (value.trim() !== "") {
        state.filledInLastName = value;
    }
});

emailInput.addEventListener("input", ({ target: { value } }) => {
    if (value.trim() !== "") {
        state.filledInEmail = value;
    }
});

userNameInp.addEventListener("input", ({ target: { value } }) => {
    if (value.trim() !== "") {
        state.filledInUserName = value;
    }
});
passConfirmInput.addEventListener("input", ({ target: { value } }) => {
    if (value.trim() !== "") {
        state.filledInPasswordConfirmation = value;
    }
});
passwordInp.addEventListener("input", ({ target: { value } }) => {
    if (value.trim() !== "") {
        state.filledInPassword = value;
    }
});

// const INPUTS = document.querySelectorAll("input");  //@TODO: make this work
// INPUTS.forEach(input => {
//     input.addEventListener("input", ({ target }) => {
//         state[`filledIn${target.name}`] = target.value.trim();
//     });
// });

const CheckingValidation = () => {
    validationCheck(state.filledInFirstName,state.filledInLastName,state.filledInEmail,
        state.filledInUserName, state.filledInPassword,state.filledInPasswordConfirmation);
};

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const isValid = validationCheck(state.filledInFirstName, state.filledInLastName, state.filledInEmail,
        state.filledInUserName, state.filledInPassword, state.filledInPasswordConfirmation);

    if (isValid) {
        const userData = {
            firstName: state.filledInFirstName,
            lastName: state.filledInLastName,
            email: state.filledInEmail,
            username: state.filledInUserName,
            password: state.filledInPassword
        };
        console.log(userData);
        await registerUser(userData);
    }

    // if (validationCheck()) {
    //     const userData = {
    //         firstName: state.filledInFirstName,
    //         lastName: state.filledInLastName,
    //         email: state.filledInEmail,
    //         username: state.filledInUserName,
    //         password: state.filledInPassword
    //     };
    //     console.log(userData);
    //     await registerUser(userData);
    // }
});
