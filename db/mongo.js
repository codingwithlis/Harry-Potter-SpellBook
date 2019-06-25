//use spellbook //creates db spellbook

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/spellbook', { useNewUrlParser: true });

const SpellbookSchema = new mongoose.schema({
  name: String,
  description: String
});

const Spellbook = mongoose.model('Spellbook', SpellbookSchema);