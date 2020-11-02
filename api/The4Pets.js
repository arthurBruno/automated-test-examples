const axios = require('axios');
const { URL_API_PETS } = require('../secrets');

const getProducts = async () => {
  const url = `${URL_API_PETS}/products`;
  const { data } = await axios.get(url);

  return data;
};

module.exports = { getProducts };