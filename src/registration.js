import { validationCheck } from "./helpers/UserValidator.js";
import { registerUser } from "./services/registration.service.js";

const form = document.querySelector('#form');
const inputs = document.querySelectorAll('input');
let state = {};

inputs.forEach(input => {
    input.addEventListener("input", ({ target: { name, value } }) => {
        state[name] = value.trim(); 
    });
});

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    inputs.forEach(input => {
        state[input.name] = input.value.trim();
    });

    const isValid = validationCheck(state);

    if (isValid) {
        const userData = {
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email,
            username: state.username,
            password: state.password
        };
        await registerUser(userData);
    }
});