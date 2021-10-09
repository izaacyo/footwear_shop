import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjAwMTYzMWExMzc1OTQyZjZkN2RkOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzc4NjA1MiwiZXhwIjoxNjM0MDQ1MjUyfQ.H_JA9aX23YgpF3kNtHhT6e4fg0yJLsLoshx6byFgDHY";


export const publicRequest = axios.create({
    baseURL: BASE_URL
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN} ` }
})