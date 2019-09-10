// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCvLNUXi9ErhI8G8D6mqT6jVSzXnUxy6dM",
    authDomain: "odeszaform.firebaseapp.com",
    databaseURL: "https://odeszaform.firebaseio.com",
    projectId: "odeszaform",
    storageBucket: "",
    messagingSenderId: "972560764380",
    appId: "1:972560764380:web:abd5d769038132ccfdd319"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //reference response collection
  var responseRef = firebase.database().ref('responses');

document.getElementById('odeszaForm').addEventListener('submit', submitForm);

 //submit form
function submitForm(event){
  event.preventDefault();
  //get values
  console.log("top of submit form");
  var radios = document.getElementsByName('website_poll');
  for (var i = 0, length = radios.length; i < length; i++)
{
 if (radios[i].checked)
 {
  // do whatever you want with the checked radio
    var album = radios[i].value;
  // only one radio can be logically checked, don't check the rest
  break;
 }
}
  var favorite = getInputVal('favorite');
  //save response
  console.log("in submit form");
  document.getElementById("myButton").disabled =true;
  saveResponse(album, favorite);

}
/**
$(document).ready(function() {
  $("#yourButton").one("click", function() {
    // Add content...
});
});**/

//function to get form value
function getInputVal(id){
  return document.getElementById(id).value;
}

//save response to responses in firebaseio
function saveResponse(album, favorite){
  console.log("here");
  var newResponseRef = responseRef.push();
  newResponseRef.set({
    "Favorite Album": album,
    favorite: favorite,
  });
}
