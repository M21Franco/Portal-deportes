firebase.initializeApp({
  apiKey: "AIzaSyAO-7QTnX3DMLiZbQkVj8IJwTpuqLDn0ms",
  authDomain: "portaldeportes-85172.firebaseapp.com",
  projectId: "portaldeportes-85172"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
var tabla = document.getElementById('tabla')
db.collection("Jugadores").onSnapshot((querySnapshot) => {
  tabla.innerHTML = '';
  querySnapshot.forEach((doc) => {
    tabla.innerHTML += `
          <tr>
          <td>${doc.data().Player}</td>
          <td scope="col">${doc.data().Team}</td>
          <td scope="col">${doc.data().FGM}</td>
          <td scope="col">${doc.data().FGA}</td>
          <td scope="col">${doc.data().FG}</td>
          <td scope="col"><button class="btn btn-warning" onclick="editar('${doc.data().Player}','${doc.data().Team}','${doc.data().FGM}','${doc.data().FGA}','${doc.data().FG}')">Editar</button></td>
          <td scope="col"><button class="btn btn-danger" onclick="eliminar('${doc.data().Player}')">Eliminar</button></td>
          
        </tr>
          `

  });
});

function editar(nombre,equipo,fgm,fga,fg) {
  //llenamos lista
  var lista ={ Nombre:nombre, Equipo:equipo, FGM:fgm,  FGA:fga, FG:fg};
  //limpiamos el local storage
  localStorage.clear();
  //llenad del local estorage
  localStorage.setItem("Lista", JSON.stringify(lista));
  location.href="AdminForm.html"

}
function eliminar(noombre) {
  db.collection("Jugadores").doc(nombre).delete().then(function() {
    alert("Document successfully deleted!");
}).catch(function(error) {
    alert("Error removing document: ", error);
});
}