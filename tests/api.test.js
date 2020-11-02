const assert = require('assert');
const { getProducts } = require('../api/The4Pets');
const { getPeople, getShipMovies } = require('../api/StarWars');


describe('Testes The 4 Pets API', () => {
  it('Deve buscar os produtos', async () => {
    const expected = {
      _id: 'ABC123',
      name: 'Product Name',
      price: 28.9
    };

    const result = await getProducts();

    assert.deepStrictEqual(result, expected);
  });
});


describe('Testes Star Wars API', () => {
  it('Retornar nome e altura do Luke Skywalker', async () => {
    const expected = {
      name: 'Luke Skywalker',
      height: '172'
    };
    const search = 'Luke';

    const result = await getPeople(search);

    assert.deepStrictEqual(result, expected);
  });

  it('Retornar filmes que a Millennium Falcon apareceu', async () => {
    const expected = [
      "http://swapi.dev/api/films/1/",
      "http://swapi.dev/api/films/2/",
      "http://swapi.dev/api/films/3/"
    ];
    const search = 'falcon';

    const [result] = await getShipMovies(search);

    assert.deepStrictEqual(result, expected);
  });
});
