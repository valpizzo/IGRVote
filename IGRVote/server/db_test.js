const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:3001/igrvote');
}

const membersSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
});

const Member = mongoose.model('Member', membersSchema);

