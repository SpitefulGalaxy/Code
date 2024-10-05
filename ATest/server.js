const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dbConfig = {
  host: 'patientdata.cbg8ucgomro2.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'SmartStride!',
  database: 'patient_data'
};

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [results] = await connection.execute('SELECT * FROM patients WHERE username = ? AND password = ?', [username, password]);
    
    if (results.length > 0) {
      res.json({ success: true, data: results });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    
    await connection.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Database error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
