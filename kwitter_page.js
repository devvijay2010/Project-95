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

    username = localStorage.getItem("username");
    roomname = localStorage.getItem("room_name");

function send()
{
      var message2 = document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
            name: username,
            message: message2,
            like: 0
      })
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+ roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
getData();

function logout()
{
      window.location = "index.html";
}
