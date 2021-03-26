import axios from 'axios';

const url = "http://localhost:4000/dashboard/dropdown";

export const fetchCryptos = () => axios.get(url);
export const addCryptos = (newCrypto) => axios.post(url, newCrypto);

export const fetchDropdown = () => axios.get(url);