import axios from 'axios';

const url = "http://localhost:4000/dashboard";

export const fetchCryptos = () => axios.get(url);
export const addCryptos = (newCrypto) => axios.post(url, newCrypto);