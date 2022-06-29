// const { v4: uuidv4 } = require('uuid');
const axios = require('axios');
const express = require('express');
const path = require('path');
var cors = require('cors');
const {
  getOpenVotes,
  getMembers,
  updateVotesCast,
  insertBallot,
} = require('./db');
const app = express();
// Middleware
app.use(express.json());
app.use(cors());
//app.use(express.static(path.join(__dirname, '../client/dist')));

// Request variables
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listeningg on http://localhost:${port}`);
});

// GET Routes/
app.get('/test', (req, res) => {
  console.log('SERVERrRRR');
  res.send('It worked');
});

app.get('/votes', async (req, res) => {
  const votes = await getOpenVotes();
  res.send(votes);
});

app.get('/members/:username', async (req, res) => {
  const members = await getMembers(req.params.username);
  res.send(members.name);
});

// POST Routes

app.post('/castvote', async (req, res) => {
  updateVotesCast(req.body.id, req.body.option, req.body.newCount);
  res.send('Vote has been cast');
});

app.post('/addballot', async (req, res) => {
  insertBallot(req.body.Applicant, req.body.Info);
  res.send('Ballot inserted');
});
