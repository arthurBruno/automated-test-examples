const axios = require('axios');
const { URL_API_SW } = require('../secrets');

const getPeople = async (nome) => {
  const url = `${URL_API_SW}/people/?search=${nome}&format=json`;
  const { data } = await axios.get(url);

  return data.results.map(mapPeople);
};

const mapPeople = (item) => {
  return {
    name: item.name,
    height: item.height
  };
};

module.exports = { getPeople };
