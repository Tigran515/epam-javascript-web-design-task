import { errorMessageRender } from "../render.js";

const validationRules = {
    firstName: { required: true, message: "First Name is empty" },
    lastName: { required: true, message: "Last Name is empty" },
    email: { required: true, regex: /\S+@\S+\.\S+/, message: "Email is not valid" },
    username: { required: true, message: "Username is empty" },
    password: { required: true, message: "Password is empty" },
    passwordConfirmation: { required: true, match: "password", message: "Passwords do not match" }
};

export const validationCheck = (fields) => {
    const errors = [];

    for (const [fieldName, value] of Object.entries(fields)) {
        const rule = validationRules[fieldName];

        if (!rule) continue; 

        if (rule.required && !value) {
            errors.push({ field: fieldName, message: rule.message });
        }

        if (rule.regex && value && !rule.regex.test(value)) {
            errors.push({ field: fieldName, message: rule.message });
        }

        if (rule.match && value !== fields[rule.match]) {
            errors.push({ field: fieldName, message: rule.message });
        }
    }

    if (errors.length > 0) {
        errors.forEach(error => {
            errorMessageRender(error.message);
        });
        return false;
    }
    return true;
};