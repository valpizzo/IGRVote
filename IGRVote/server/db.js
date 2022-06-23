var firebase = require('firebase/app');
const {getDatabase, ref, child, get} = require('firebase/database');

const firebaseConfig = {
  apiKey: 'AIzaSyDsDj2vcNofYBrcEqdNQJa90fYq_5bGar4',
  authDomain: 'igrvote.firebaseapp.com',
  databaseURL: 'https://igrvote-default-rtdb.firebaseio.com',
  projectId: 'igrvote',
  storageBucket: 'igrvote.appspot.com',
  messagingSenderId: '843618448629',
  appId: '1:843618448629:web:059ebf0da265f0109601bc',
  measurementId: 'G-VYB8YS5DWG',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const getOpenVotes = async () => {
  const dbRef = ref(getDatabase(app));
  return get(child(dbRef, 'openvotes'))
    .then(snapshot => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log('No data available');
      }
    })
    .catch(error => {
      console.error(error);
    });
};

const getMembers = async username => {
  const dbRef = ref(getDatabase(app));
  return get(child(dbRef, 'members'))
    .then(snapshot => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        return snapshot.val();
      } else {
        console.log('No data available');
      }
    })
    .catch(error => {
      console.error(error);
    });
};

// const getMember = async username => {
//   const dbRef = ref(getDatabase(app));
//   return get(child(dbRef, 'members'))
//     .then(())
// };

getMembers();

module.exports = getOpenVotes;
module.exports = getMembers;