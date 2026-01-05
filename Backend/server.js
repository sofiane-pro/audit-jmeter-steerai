const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/vehicles', (req, res) => {
  const data = fs.readFileSync('./vehicles.json');
  res.json(JSON.parse(data));
});

app.listen(port, () => {
  console.log(`Serveur backend en cours sur http://localhost:${port}`);
});