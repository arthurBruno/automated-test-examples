const assert = require('assert');
const { getPeople } = require('../api/StarWars');
const { getProducts } = require('../api/The4Pets');


describe('Testes Star Wars API', () => {
    it('Deve retornar o R2D2 com o formato correto', async () => {
        const expected = {
            nome: 'R2-D2',
            peso: '96'
        };
        const baseName = 'r2-d2';
        const result = await getPeople(baseName);
        assert.deepStrictEqual(result, expected);
    });
});

describe('Testes The 4 Pets API', () => {
  it('Deve buscar os produtos', async () => {
      const expected = [{
          nome: 'R2-D2',
          peso: '96'
      }];
      const baseName = `r2-d2`;
      const result = await getProducts(baseName);
      assert.deepStrictEqual(result, expected);
  });
});