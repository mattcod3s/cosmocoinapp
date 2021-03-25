import axios from 'axios';

const url = "http://localhost:4000/";


export const fetchCryptos = axios.get(`${url}`).then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });