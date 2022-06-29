const teams = [
  {
    name: 'Baltimore Flamingos RFC',
    username: 'bfrfc',
    password: 'igr123',
  },
  {
    name: 'Boston Ironsides',
    username: 'birfc',
    password: 'igr456',
  },
];

const openvotesData = [
  {
    id: 1,
    Applicant: 'New Team1',
    Info: 'We are really cool plz accept',
    Yes: 50,
    No: 5,
    Abstain: 10,
  },
  {
    Applicant: 'Better Team',
    Info: 'We are mean weeeee',
    id: 2,
    Yes: 13,
    No: 1,
    Abstain: 11,
  },
];

module.exports.teams = teams;
module.exports.openvotesData = openvotesData;
