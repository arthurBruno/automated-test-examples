const assert = require('assert');
const MongoDB = require('../mongodb/index.js');
const EmployeeSchema = require('../mongodb/schemas/EmployeeSchema');
let mongoDB = {};


describe('Testes da Base de Dados de Funcionários', () => {
  before(async () => {
    const connection = MongoDB.connect();
    mongoDB = new MongoDB(connection, EmployeeSchema);
  })

  it('Verificar conexão', async () => {
    const result = await mongoDB.isConnected();
    const expected = 'Conectado';

    assert.deepStrictEqual(result, expected);
  })

  it('Cadastrar funcionário', async () => {
    const expected = {
      name: 'Waternoose Maracutaia',
      phone: '11983724523'
    };
    const result = await mongoDB.create(expected);

    assert.deepStrictEqual(result, expected);
  })

  it('Listar funcionário', async () => {
    const expected = {
      name: 'Waternoose Maracutaia',
      phone: '11983724523'
    };
    const result = await mongoDB.read({ name: expected.name });

    assert.deepStrictEqual(result, expected);
  })

  it('Atualizar funcionário', async () => {
    const employee = {
      name: 'Waternoose Maracutaia',
      phone: '11983724523'
    };
    const dataToUpdate = { name: 'Waternoose' };

    const { nModified } = await mongoDB.update(employee, dataToUpdate);

    assert.deepStrictEqual(nModified, 1)
  })

  it('Remover funcionário', async () => {
    const employee = {
      name: 'Waternoose Maracutaia',
      phone: '11983724523'
    };
    const { n: deleted } = await mongoDB.delete(employee);

    assert.deepStrictEqual(deleted, 1);
  })
})