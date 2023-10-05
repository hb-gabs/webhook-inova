const knex = require('knex');

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: './src/db/database.db',
  },
  useNullAsDefault: true,
});

module.exports = connection;