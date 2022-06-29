const mongoose = require('mongoose');
const teamInfo = require('../data/teams');
const {openvotesData} = require('../data/test_data');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost/igrvote');
}

const membersSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  name: String,
  username: String,
  password: String,
});

const voteSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  Applicant: String,
  Info: String,
  Yes: Number,
  No: Number,
  Abstain: Number,
});

const Member = mongoose.model('Member', membersSchema);
const OpenVote = mongoose.model('OpenVote', voteSchema);
//Member.insertMany(teamInfo.teamInfo);
//OpenVote.insertMany(openvotesData);

// GET all open votes
const getOpenVotes = async () => {
  return OpenVote.find();
};

// GET one member for login validation
const getMembers = async username => {
  return Member.findOne({username: username});
};

// POST new vote for an open vote
const updateVotesCast = async (id, option, newCount) => {
  if (option === 'Yes') {
    return OpenVote.updateOne({id: id}, {Yes: newCount});
  } else if (option === 'No') {
    return OpenVote.updateOne({id: id}, {No: newCount});
  } else {
    return OpenVote.updateOne({id: id}, {Abstain: newCount});
  }
};

// POST new ballot
const insertBallot = async (applicant, info) => {
  let nextId = await OpenVote.find().sort({id: -1}).limit(1);
  nextId = nextId[0].id + 1;
  console.log(nextId);
  const newOpenVote = new OpenVote({
    id: nextId,
    Applicant: applicant,
    Info: info,
    Yes: 0,
    No: 0,
    Abstain: 0,
  });
  newOpenVote.save();
};

module.exports.getOpenVotes = getOpenVotes;
module.exports.getMembers = getMembers;
module.exports.updateVotesCast = updateVotesCast;
module.exports.insertBallot = insertBallot;
