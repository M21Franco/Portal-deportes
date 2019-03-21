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
        var Rank = document.getElementById('rank').value;
        var FieldG= document.getElementById('fielgoald').value;
        var FieldGPor=document.getElementById('fielporciento').value;
        var fieldgoalda = document.getElementById('fieldgoalda').value
        var trespuntos=document.getElementById('trespuntos').value;
        var intentosTres=document.getElementById('trespuntosIntentos').value;
        var TresPorciento =document.getElementById('trespuntosPorciento').value;
        var TirosLibres = document.getElementById('TirosLibres').value;
        var IntentosLibres=document.getElementById('IntentosLibres').value;
        var PorcientoTiro=document.getElementById('PorcientoTiro').value;
    
        db.collection("Jugadores").doc(nombre).set({
          RK:Rank,
          Player:nombre,
          Team:team,
          FGM:FieldG,
          FGA:FieldGPor,
          FG:fieldgoalda,
          PM:trespuntos,
          PA:intentosTres,
          P:TresPorciento,
          FTM:TirosLibres,
          FTA:IntentosLibres,
          FT:PorcientoTiro
      })
          .then(function () {
    
              console.log("Registro Satisfactorio")
              alert("Registro Satisfactorio");
              document.getElementById('nombre').value = "";
              document.getElementById('team').value = "";
              document.getElementById('IntentosLibres').value = "";
              document.getElementById('PorcientoTiro').value = "";
              document.getElementById('TirosLibres').value = "";
              document.getElementById('trespuntosPorciento').value = "";
              document.getElementById('trespuntosIntentos').value = "";
              document.getElementById('trespuntos').value = "";
              document.getElementById('fieldgoalda').value = "";
              document.getElementById('fielgoald').value = "";
              document.getElementById('rank').value = "";
              document.getElementById('fielporciento').value = "";
    
          })
          .catch(function (error) {
              console.log("error al introduccir los Datos", error)
    
          })
    
    }
    function Editar() {
        var washingtonRef = db.collection("Jugadores").doc(document.getElementById('Buscar').value);
        var nombre = document.getElementById('nombre').value;
        var team =document.getElementById('team').value;
        var Rank = document.getElementById('rank').value;
        var FieldG= document.getElementById('fielgoald').value;
        var FieldGPor=document.getElementById('fielporciento').value;
        var fieldgoalda = document.getElementById('fieldgoalda').value
        var trespuntos=document.getElementById('trespuntos').value;
        var intentosTres=document.getElementById('trespuntosIntentos').value;
        var TresPorciento =document.getElementById('trespuntosPorciento').value;
        var TirosLibres = document.getElementById('TirosLibres').value;
        var IntentosLibres=document.getElementById('IntentosLibres').value;
        var PorcientoTiro=document.getElementById('PorcientoTiro').value;
        // Set the "capital" field of the city 'DC'
        return washingtonRef.update({
          RK:Rank,
          Player:nombre,
          Team:team,
          FGM:FieldG,
          FGA:FieldGPor,
          FG:fieldgoalda,
          PM:trespuntos,
          PA:intentosTres,
          P:TresPorciento,
          FTM:TirosLibres,
          FTA:IntentosLibres,
          FT:PorcientoTiro
        })
        .then(function() {
            console.log("Document successfully updated!");
            alert("Document successfully updated!");
            document.getElementById('nombre').value = "";
            document.getElementById('team').value = "";
            document.getElementById('IntentosLibres').value = "";
            document.getElementById('PorcientoTiro').value = "";
            document.getElementById('TirosLibres').value = "";
            document.getElementById('trespuntosPorciento').value = "";
            document.getElementById('trespuntosIntentos').value = "";
            document.getElementById('trespuntos').value = "";
            document.getElementById('fieldgoalda').value = "";
            document.getElementById('fielgoald').value = "";
            document.getElementById('rank').value = "";
            document.getElementById('fielporciento').value = "";
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }
