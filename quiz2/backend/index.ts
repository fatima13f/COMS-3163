const express = require('express');
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');

dotenv.config();

const app = express();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NANME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Star Wars Trivia');
});

// app.get('/', (req, res) => {
//   res.redirect('/quiz');
// });

app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query('INSERT INTO users (username, email, password) VALUES (? ? ?)', [username, email, hashedPassword]);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user', error);
    res.status(500).json({ error: 'Internal server' });
  }
});

app.post('/questions', async (req, res) => {
  try {
    const { question, type, options, answer } = req.body;

    await pool.query('INSERT INTO (question, type, options, answer) VALUEs (?, ?, ?, ?)', [
      question,
      type,
      options,
      answer,
    ]);
    res.status(201).json({ message: 'Question added successfully' });
  } catch (error) {
    console.error('Error adding question', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server is running on port ${port}');
});
