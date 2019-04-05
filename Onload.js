function load(params) {
    var data = JSON.parse(localStorage.getItem("Lista"));
    if (data!=null) {
         document.getElementById("nombre").value=data.Nombre;
         document.getElementById("team").value=data.Equipo;
         document.getElementById("fielgoald").value=data.FGM;
         document.getElementById("fieldgoalda").value=data.FGA;
         document.getElementById("fielporciento").value=data.FG;
        localStorage.clear();
    }
    else
    {
       document.getElementById("nombre").value="";
       document.getElementById("team").value="";
       document.getElementById("fielgoald").value="";
       document.getElementById("fieldgoalda").value="";
       document.getElementById("fielporciento").value="";
    }

    
}