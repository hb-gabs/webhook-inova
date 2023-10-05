const express = require('express');
const cors = require('cors');
const connection = require('./db/index');
const database = require('./db/sqlite');

const app = express();
app.use(cors());
app.use(express.json());

database();

app.post('/', async (req, res) => {
  const { name, email, company, phone } = req.body;

  try {
    await connection('guests').insert({
      name,
      email,
      phone,
      company
    });

    res.status(201).json({ messsage: 'Guest created!' });
  } catch (error) {
    console.log({ error });
    res.status(500).json(error);
  }
})

app.listen(3000, () => console.log('Server running or port 3000'));