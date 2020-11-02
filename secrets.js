
const url = {
  URL_API_PETS: 'https://the4pets.herokuapp.com',
  URL_API_SW: 'https://swapi.dev/api',
  URL_API_JABUTI: 'https://augecorpjabuti.herokuapp.com/'
};

const database = {
  MONGODB_HOST: 'localhost',
  MONGODB_PORT: '27017',
  MONGODB_DATABASE: 'retail-partner',
  MONGODB_USER_NAME: 'retailPartnerSystem',
  MONGODB_USER_PWD: 'retailPartnerSystem123'
};

module.exports = { ...url, ...database };
