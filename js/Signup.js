var firebaseConfig = {
  apiKey: "AIzaSyDnSQ1zX3pbk2rfnlyP8VQO8ijE8IOi4Xg",
  authDomain: "grocerylist-b4c51.firebaseapp.com",
  projectId: "grocerylist-b4c51",
  storageBucket: "grocerylist-b4c51.appspot.com",
  messagingSenderId: "156824942471",
  appId: "1:156824942471:web:457a0159b127928c3dc522",
  measurementId: "G-4E7J13RSL7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$("#signup-form").submit(function(e) {
  e.preventDefault();
  // get the username(email) and password from the form
  // change the following code
  var email =  document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      // Signed in
      // ...

      console.log("You are signed up");
      window.location.href = "Login.html";
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});