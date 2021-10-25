var firebaseConfig = {
      apiKey: "AIzaSyARceSErIA_9baR4-JTH6gaqz0eDLibtlA",
      authDomain: "kwitter-project-39e69.firebaseapp.com",
      databaseURL: "https://kwitter-project-39e69-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-39e69",
      storageBucket: "kwitter-project-39e69.appspot.com",
      messagingSenderId: "118507399497",
      appId: "1:118507399497:web:6083f10788f1d4ce061298"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   if (true == "yes")
  {
    username = localStorage.getItem("usernamevar");
    document.getElementById("welcomeuser").innerHTML = "Welcome " + username + "!";
  }
    username = localStorage.getItem("username");
    document.getElementById("welcomeuser").innerHTML = "Welcome " + username + "!";

function addroom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({Purpose: "Adding room"});
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     row = "<div class ='room_name2' id=" + Room_names + "onclick = 'redirecttotheroomname(this.id)'>#" + Room_names + "</div><hr>";
     document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirecttotheroomname(name)
{
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
      console.log(name)
}