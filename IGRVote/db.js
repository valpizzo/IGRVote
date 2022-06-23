var firebase = require('firebase/app');
require('firebase/database');

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  authDomain: "igrvote.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://igrvote-default-rtdb.firebaseio.com",
  projectId: "igrvote",
  storageBucket: "igrvote.appspot.com",
};

// Initialize Firebase
//console.log(firebase);
const app = firebase.initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
//console.log(app);
console.log(db);
const db = db.getDatabase(app);
// GET STUFF
const ref = db.ref('openvotes');

// Attach an asynchronous callback to read the data at our posts reference
ref.on(
  'value',
  snapshot => {
    console.log(snapshot.val());
  },
  errorObject => {
    console.log('The read failed: ' + errorObject.name);
  },
);
