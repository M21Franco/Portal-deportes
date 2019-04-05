firebase.initializeApp({
    apiKey: "AIzaSyAO-7QTnX3DMLiZbQkVj8IJwTpuqLDn0ms",
    authDomain: "portaldeportes-85172.firebaseapp.com",
    projectId: "portaldeportes-85172"
  });
  
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();
    function guardar() {
        var nombre = document.getElementById('nombre').value;
        var team =document.getElementById('team').value;
        var FieldG= document.getElementById('fielgoald').value;
        var FieldGPor=document.getElementById('fielporciento').value;
        var fieldgoalda = document.getElementById('fieldgoalda').value

    
        db.collection("Jugadores").doc(nombre).set({
         // RK:Rank,
          Player:nombre,
          Team:team,
          FGM:FieldG,
          FGA:FieldGPor,
          FG:fieldgoalda,

      })
          .then(function () {
    
              console.log("Registro Satisfactorio")
              alert("Registro Satisfactorio");
              document.getElementById('nombre').value = "";
              document.getElementById('team').value = "";
              document.getElementById('fieldgoalda').value = "";
              document.getElementById('fielgoald').value = "";
              document.getElementById('fielporciento').value = "";
    
          })
          .catch(function (error) {
              console.log("error al introduccir los Datos", error)
    
          })
    
    }
  
