

function cargarPublicidad() {
    if(cpublicidad==1){
     document.getElementById("dulceria").style.backgroundImage  = "url('./publicidad/helados2.png')";
     cpublicidad++;
   }else if(cpublicidad==2){
     document.getElementById("dulceria").style.backgroundImage  = "url('./publicidad/affocato.png')";
     cpublicidad++;
   }else if (cpublicidad==3) {
      document.getElementById("dulceria").style.backgroundImage= "url('./publicidad/pasteles.png')";
     cpublicidad= cpublicidad-2;
   }
   contadorPublicidad++;
 }

 function load_data(){
    document.getElementById("dulceria").style.backgroundImage  = "url('./publicidad/helados2.png')";
 }