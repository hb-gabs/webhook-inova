const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');
const path = require('path');

const sqliteConnection = async () => {
  const database = await sqlite.open({
    filename: './src/db/database.db',
    driver: sqlite3.Database,
  });
  return database;
}

module.exports = sqliteConnection;