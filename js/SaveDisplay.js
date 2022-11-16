// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
$(".sampleSurvey input[type='submit']").click(function(e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var surveydata = $('form').serializeArray();
  var sdata = {};

  surveydata.forEach((entry) => {
    console.log(entry);
    sdata[entry.name] = entry.value;
  });

  console.log(sdata);
  firebase.firestore().collection("surveydata").add(sdata);

});

firebase
.firestore()
.collection('surveydata')
.onSnapshot((querySnapshot) => {
  console.log(querySnapshot.size);
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    console.log(doc.data().choice);
    console.log(doc.data().comm);
  });
});

// update the result in table
firebase.firestore().collection('surveydata').onSnapshot(function(querySnapShot){
  
  var n1 = 0;
  var n2 = 0;
  var n3 = 0;
  var n4 = 0;
  var n5 = 0;
  
  querySnapShot.forEach(function(doc){
    console.log("document -- ", doc.data().choice);
    var s = doc.data().choice;

    switch(s){
      case "A":
        n1++;
        $('#ans1').text(n1);
        break;

      case "B":
        n2++;
        $('#ans2').text(n2);
        break;
      
      case "C":
        n3++;
        $('#ans3').text(n3);
        break;

      case "D":
        n4++;
        $('#ans4').text(n4);
        break;

      case "E":
        n5++;
        $('#ans5').text(n5);
        break;
    }

    console.log(s);
  });
});
