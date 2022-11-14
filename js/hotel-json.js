/* Change the configuration */

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

// enter data in
$("input[type='button']").click(function (e) {
  //get the value of form
  var inputdata = $('form').serializeArray();
  var data = {};

/*
  for(var item in importdata){
    console.log(inputdata[item]);
    console.log(inputdata[item].name);
    console.log(inputdata[item].value);
  };
*/

  /* save the data to database */
  inputdata.forEach((entry)=>{
    console.log(entry);
    data[entry.name]=entry.value;
  });

  console.log(data);
  firebase.firestore().collection("hotel").add(data);

  /* clear the entry */
  $('form')[0].reset();
});


/* array example
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
*/

/* read the data from the database */


firebase
  .firestore()
  .collection('hotel')
  .onSnapshot((querySnapshot) => {
    console.log(querySnapshot.size);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.data().room);
      console.log(doc.data().name);
      console.log(doc.data().checkin);
      console.log(doc.data().checkout);
      console.log(doc.data().num);
    });
  });

