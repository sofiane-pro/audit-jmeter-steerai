const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Route Catalogue
app.get('/api/vehicles', (req, res) => {
  try {
    const data = fs.readFileSync('./vehicles.json');
    res.json(JSON.parse(data));
  } catch (err) {
    res.status(500).json({ message: "Erreur lecture fichier" });
  }
});

// ROUTE LOGIN (Celle utilisée par JMeter)
app.post('/api/v1/auth/login', (req, res) => {
  const { email, password } = req.body;

  if (email === "ayoub@steerai.autos" && password === "Test1Test2?") {
    res.status(200).json({
      message: "Connexion réussie",
      token: "fake-jwt-token-for-test"
    });
  } else {
    res.status(401).json({ message: "Identifiants invalides" });
  }
});

app.listen(port, () => {
  console.log(`✅ Serveur prêt sur le port ${port}`);
  console.log(`🚀 Route d'audit : http://localhost:${port}/api/v1/auth/login`);
});