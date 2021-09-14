import axios from 'axios'

const baseUrl = "http://localhost:3002/shoes";

export const getShoes = async () => {
    const response = await axios.get(baseUrl);
    return response.data
}
