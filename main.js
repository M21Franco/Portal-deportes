firebase.initializeApp({
    apiKey: "AIzaSyAO-7QTnX3DMLiZbQkVj8IJwTpuqLDn0ms",
    authDomain: "portaldeportes-85172.firebaseapp.com",
    projectId: "portaldeportes-85172"
  });
  
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();
  var tabla= document.getElementById('tabla')
  db.collection("Jugadores").onSnapshot((querySnapshot)=>{
      tabla.innerHTML='';
      querySnapshot.forEach((doc) => {
          tabla.innerHTML+=`
          <tr>
          <td index="0" class="dg-rank">${doc.data().RK}</td>
          <td index="1" class="dg-name_display_last_init">&nbsp;<a href="/team/player.jsp?player_id=501981">
          ${doc.data().Player}</a></td>
          <td index="2" class="dg-team_abbrev">${doc.data().Team}</td>
          <td index="3" class="dg-active_sw" style="display: none;">&nbsp;</td>
          <td index="4" class="dg-player_id" style="display: none;">501981</td>
          <td index="5" class="dg-pos">${doc.data().FGM}</td>
          <td index="6" class="dg-g">${doc.data(). FGA}</td>
          <td index="7" class="dg-ab">${doc.data().FG}</td>
          <td index="8" class="dg-r">${doc.data().PM}</td>
          <td index="9" class="dg-h">${doc.data().PA}</td>
          <td index="10" class="dg-d">${doc.data().P}</td>
          <td index="11" class="dg-t">${doc.data().FTM}</td>
          <td index="12" class="dg-hr active">${doc.data().FTA}</td>
          <td index="13" class="dg-rbi">${doc.data().FT}</td>
          
        </tr>
          `

      });
  });
 
   /* <td index="14" class="dg-bb">${doc.data().OREB}</td>
          <td index="15" class="dg-so">${doc.data().DREB}</td>
          <td index="16" class="dg-sb">${doc.data().REB}</td>
          <td index="17" class="dg-cs">${doc.data().AST}</td>
          <td index="18" class="dg-avg">${doc.data().STL}</td>
          <td index="19" class="dg-obp">${doc.data().BLK}</td>
          <td index="20" class="dg-slg">${doc.data().TOV}</td>
          <td index="21" class="dg-ops">${doc.data().EFF}</td> */