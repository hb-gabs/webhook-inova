CREATE TABLE IF NOT EXISTS guests(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name varchar(64),
  email varchar(64),
  company varchar(64),
  phone varchar(16)
);