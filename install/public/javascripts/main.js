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
  //var album = getInputVal();
  var favorite = getInputVal('favorite');

  //save response
  saveResponse(favorite);

}

//function to get form value
function getInputVal(id){
  return document.getElementById(id).value;
}

//save response to responses in firebaseio
function saveResponse(favorite){
  console.log("hi");
  console.log(favorite);
  var newResponseRef = responseRef.push();
  newResponseRef.set({
    favorite: favorite,
  });
}
