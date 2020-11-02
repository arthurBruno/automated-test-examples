const assert = require('assert');
const { getProducts } = require('../api/The4Pets');
const { getPeople } = require('../api/StarWars');


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
  it('Deve retornar o Luke Skywalker com o formato correto', async () => {
    const expected = {
      name: 'Luke Skywalker',
      height: '172'
    };
    const baseName = 'Luke';

    const result = await getPeople(baseName);

    assert.deepStrictEqual(result, expected);
  });
});
