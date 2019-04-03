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
          <td scope="col"><button class="btn btn-warning">Editar</button></td>
          <td scope="col"><button class="btn btn-danger">Eliminar</button></td>
          
        </tr>
          `

  });
});


// <td index="0" class="dg-rank">${doc.data().RK}</td>


{/* <td index="8" class="dg-r">${doc.data().PM}</td>
          <td index="9" class="dg-h">${doc.data().PA}</td>
          <td index="10" class="dg-d">${doc.data().P}</td>
          <td index="11" class="dg-t">${doc.data().FTM}</td>
          <td index="12" class="dg-hr active">${doc.data().FTA}</td>
          <td index="13" class="dg-rbi">${doc.data().FT}</td> */}

{/* <td index="14" class="dg-bb">${doc.data().OREB}</td>
          <td index="15" class="dg-so">${doc.data().DREB}</td>
          <td index="16" class="dg-sb">${doc.data().REB}</td>
          <td index="17" class="dg-cs">${doc.data().AST}</td>
          <td index="18" class="dg-avg">${doc.data().STL}</td>
          <td index="19" class="dg-obp">${doc.data().BLK}</td>
          <td index="20" class="dg-slg">${doc.data().TOV}</td>
        <td index="21" class="dg-ops">${doc.data().EFF}</td> */}