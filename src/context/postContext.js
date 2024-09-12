import axios from "axios";

export const APIHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': {
        toString() {
            return `token ${localStorage.getItem('token')}`
        }
    }
};


export const API = axios.create({

    //baseURL: "http://localhost:8001/",
    baseURL: "https://node-basic-wheat.vercel.app/user",
    headers: APIHeaders,
});