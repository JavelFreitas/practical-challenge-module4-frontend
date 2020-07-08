import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: process.env.REACT_APP_baseURL,
  headers: {
    'Content-type': 'application/json',
  },
});
