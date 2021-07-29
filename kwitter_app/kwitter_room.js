
var firebaseConfig = {
  apiKey: "AIzaSyB1PGSNvtsjz82vRfC1TuO1oujvR9E0zI8",
  authDomain: "kwitter-7e9d8.firebaseapp.com",
  databaseURL: "https://kwitter-7e9d8-default-rtdb.firebaseio.com",
  projectId: "kwitter-7e9d8",
  storageBucket: "kwitter-7e9d8.appspot.com",
  messagingSenderId: "307768251089",
  appId: "1:307768251089:web:00efe530ca38ca7f89ebf0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    //ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML=("Welcome")+user_name;

 function addRoom()
 {
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name",room_name)
  window.location="kwitter_page.html"
}

function getData()
{ firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
  Room_names = childKey;
  console.log("room name-"+Room_names);
  row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML+=row;
  });
  });
}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location="index.html";
}

