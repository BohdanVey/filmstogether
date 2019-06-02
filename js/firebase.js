var firebaseConfig = {
  apiKey: "AIzaSyA--7MygQRMVXzUZqQfz9aP7rricXBNQo4",
  authDomain: "newagent-b2972.firebaseapp.com",
  databaseURL: 'https://newagent-b2972.firebaseio.com',
  projectId: 'newagent-b2972',
  storageBucket: 'newagent-b2972.appspot.com',
  messagingSenderId: '206620805973',
  appId: "1:206620805973:web:67a5de03d2be683d"
};
firebase.initializeApp(firebaseConfig);
var auth = firebase.firestore();
var video = $('.img1 img').attr(src);