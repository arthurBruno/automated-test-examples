const mongoose = require('mongoose');
const {
  MONGODB_HOST,
  MONGODB_PORT,
  MONGODB_DATABASE,
} = require('../secrets');

const STATUS = {
  0: 'Desconectado',
  1: 'Conectado',
  2: 'Conectando',
  3: 'Desconectando',
};

class MongoDB {
  constructor(connection, schema) {
    this._connection = connection;
    this._collection = schema;
  }

  async isConnected() {
    const state = STATUS[this._connection.readyState];

    if (state === 'Conectado')
      return state;

    if (state !== 'Conectando')
      return state;

    await new Promise(resolve => setTimeout(resolve, 1000));

    return STATUS[this._connection.readyState];
  }

  static connect() {
    mongoose.connect(`mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DATABASE}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, (error) => {
      if (!error) return;
      console.log('Falha na conexão com Banco de Dados!', error);
    });

    const connection = mongoose.connection;
    connection.once('open', () => console.log('Conexão com Banco de Dados estabelecida!'));

    return connection;
  }

  async create(item) {
    const { name, phone } = await this._collection.create(item);
    return { name, phone };
  }

  async read(item = {}) {
    const [{ name, phone }] = await this._collection.find(item, { name: 1, phone: 1 });
    return { name, phone };
  }

  async update(item, dataToUpdate) {
    return this._collection.updateOne(item, { $set: dataToUpdate });
  }

  async delete(item) {
    return this._collection.deleteOne(item);
  }
}

module.exports = MongoDB;
