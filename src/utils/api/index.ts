import axios from "axios";
import {
    APP_PUBLIC_BASE_URL,
    APP_PUBLIC_LOGIN
} from "@env";

console.log("APP_PUBLIC_BASE_URL", APP_PUBLIC_BASE_URL)
console.log("APP_PUBLIC_LOGIN", APP_PUBLIC_LOGIN)

export const ApiLogin = axios.create({
    baseURL: APP_PUBLIC_BASE_URL + APP_PUBLIC_LOGIN,
    headers: {
        'Content-Type': 'application/json',
        "Cache-Control" : "no-store"
    }
})