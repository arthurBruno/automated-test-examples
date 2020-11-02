const axios = require('axios');
const { URL_API_SW } = require('../secrets');

const getPeople = async (search) => {
  const url = `${URL_API_SW}/people/`;
  const params = {
    search,
    format: 'json'
  };

  const { data } = await axios.get(url, { params });

  return data.results.map(mapPeople);
};

const mapPeople = (item) => ({
  name: item.name,
  height: item.height
});

const getShipMovies = async (search) => {
  const url = `${URL_API_SW}/starships/`;
  const params = {
    search,
    format: 'json'
  };

  const { data } = await axios.get(url, { params });

  return data.results.map((item) => item.films);
};

module.exports = { getPeople, getShipMovies };
