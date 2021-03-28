import axios from 'axios';

const url = "http://localhost:4000/dashboard";
const dropdownUrl = "http://localhost:4000/dashboard/dropdown";

export const fetchCryptos = () => axios.get(url);
export const addCryptos = (newCrypto) => axios.post(url, newCrypto);
export const updateCryptos = (id, updatedCrypto) => axios.patch(`${url}/${id}`, updatedCrypto);
export const deleteCryptos = (id) => axios.delete(`${url}/${id}`);

export const fetchDropdown = () => axios.get(dropdownUrl);