import { doPost } from "../helpers/request.helper.js";
import {REGISTER_URL} from "../constants/api.js";

export const registerUser = async (userData) => {
    try {
        const response = await doPost(REGISTER_URL, userData);
        
        if (response.success) {
            console.log("Registration successful!", response);
            alert("User registered successfully!");
        } else {
            console.error("Registration failed:", response);
            throw new Error(response.message || "Registration error");
        }
    } catch (error) {
        console.error("Error during registration:", error);
        alert("Failed to register. Please try again.");
    }
};
