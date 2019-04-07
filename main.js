firebase.initializeApp({
  apiKey: "AIzaSyAO-7QTnX3DMLiZbQkVj8IJwTpuqLDn0ms",
  authDomain: "portaldeportes-85172.firebaseapp.com",
  projectId: "portaldeportes-85172"
});

var chart;
var chartData;
var mvp = true;
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
          <td scope="col"><button class="btn btn-warning" onclick="editar('${doc.data().Player}','${doc.data().Team}','${doc.data().FGM}','${doc.data().FGA}','${doc.data().FG}','${doc.id}')">Editar</button></td>
          <td scope="col"><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
          
        </tr>
          `
          if (mvp) {
            chartData=[['FGM',doc.data().FGM],['FGA',doc.data().FGA],['FG',doc.data().FG]];
            mvp=false;
          }
  });
  addChart();
});

function editar(nombre,equipo,fgm,fga,fg,doc) {
  //llenamos lista
  var lista ={ Nombre:nombre, Equipo:equipo, FGM:fgm,  FGA:fga, FG:fg, ID:doc};
  //limpiamos el local storage
  localStorage.clear();
  //llenad del local estorage
  localStorage.setItem("Lista", JSON.stringify(lista));
  location.href="AdminForm.html"

}
function eliminar(ID) {
  db.collection("Jugadores").doc(ID).delete().then(function() {
    alert("Document successfully deleted!");
}).catch(function(error) {
    alert("Error removing document: ", error);
});
}
//borra el local storage en caso de volver a cargar la pagina de inicio
function load(params) {
  localStorage.clear();
}

addChart =function()  {
  chart = c3.generate({
    bindto:"#chart",
    data:{
      type:'bar',
      columns:chartData
    },

  })
  
}