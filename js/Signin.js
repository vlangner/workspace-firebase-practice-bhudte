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
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this.
  var email = $('#login').val();
  var password = $('#pwd').val();

  console.log("email: " + email + " password: " + password);

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in');
      let user = firebase.auth().currentUser;
      window.location.href = "Surveyresult.html";

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name + email + emailVerified);
      }
    })
    .catch((error) => {

      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});

$('#google').click(function (){  
  
  const provider = new firebase.auth.GoogleAuthProvider();
  
  firebase.auth().signInWithPopup(provider).then((result) => {
    const user = result.user;
    console.log("Google user: " + user.email);
    window.location.href = "Surveyresult.html";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Error message: " + errorMessage);
  });
});

