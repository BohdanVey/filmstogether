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
  var auth = firebase.auth();
  var signupForm = document.querySelector("#signup-form");
  var userName = document.querySelector("#username");
  var email = document.querySelector("#email");
  var password = document.querySelector("#password");
  var signupButton = document.querySelector("#signup");
  signupButton.addEventListener("click", clickSignupButton);
  function clickSignupButton(){
  auth.createUserWithEmailAndPassword(email.value, password.value).
  then(function(user){
    console.log(auth.currentUser.email)
  }, function(error) {
    console.log(error.message);
  });
}
