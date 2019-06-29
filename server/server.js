const express = require("express");
const app = express();
const port = 4444;
const path = require('path');
const bp = require('body-parser')
const { Spellbook } = require('../db/mongoSeed')
const cors = require('cors')

app.use('/', express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use(bp.json());
app.use(cors());

app.get('/spells', (req, res) => {
  Spellbook.find({}, (err, spells) => {
      console.log(spells)
    if (err) res.status(500).send(err);
    res.status(200).send(spells);
  })
});

app.post('/spells', (req, res) => {
    const {name, description} = req.body;
    Spellbook.create({name, description}, (err, spells) => {
        if (err) return res.status(500).send(err);
        res.send(spells);
    })
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
