const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const seederSpells = require('./seedData.js');

mongoose.connect("mongodb://localhost:27017/spellbook", {
  useNewUrlParser: true
});

const SpellbookSchema = new Schema({
  name: String,
  description: String
});

exports.Spellbook = mongoose.model('Spellbook', SpellbookSchema);

//this created the db now it's useless 
// Spellbook.create(seederSpells, (err)=>{
//   if (err) {
//     console.log(err);
//   }
//   mongoose.connection.close();
// });

