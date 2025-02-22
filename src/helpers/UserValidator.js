import { errorMessageRender } from "../render.js";

// const container = document.querySelector('.registration_container'); ///??

// export const validationCheck = (firstName,lastName,email,user,password,confirmationPassword) => {

//     if(firstName.trim() === ''){
//         let message = 'First Name is empty'
//         errorMessageRender(message);
//     }
//     else if (lastName.trim() === '') {
//         let message = 'Last name is empty';
//         errorMessageRender(message);
//         return;
//     }else if (email.trim() === '') {
//         let message = 'Email is empty';
//         errorMessageRender(message);
//         return;
//     } else if(user.trim()===''){
//         errorMessageRender('User is empty');
//     } else if (password.trim() === '') {
//         let message = 'Password is empty';
//         errorMessageRender(message);
//         return;
//     }
//     // else if (password.length<8){
//     //     errorMessageRender('Password min length 8 characters');

//     // }
//     else if (password.trim() !== confirmationPassword) {
//         let message = 'Passwords do not match';
//         errorMessageRender(message);
//         return;
//     }

// }

export const validationCheck = (firstName, lastName, email, user, password, confirmationPassword) => {
    if (firstName.trim() === '') {
        errorMessageRender("First Name is empty");
        return false;
    }
    if (lastName.trim() === '') {
        errorMessageRender("Last Name is empty");
        return false;
    }
    if (email.trim() === '') {
        errorMessageRender("Email is empty");
        return false;
    }
    if (user.trim() === '') {
        errorMessageRender("Username is empty");
        return false;
    }
    if (password.trim() === '') {
        errorMessageRender("Password is empty");
        return false;
    }
    if (password.trim() !== confirmationPassword.trim()) {
        errorMessageRender("Passwords do not match");
        return false;
    }

    return true; // All validations passed
};
