var contador=4;
    var contadorPublicidad=1;
    var cpublicidad=1;
    var contadorVideo=1;
    var contadorHojaldre=1;



function cargarData(){

if (cpublicidad==1) {
  document.getElementById("panaderia").style.backgroundImage  = "url('./publicidad/PANTALLA DE PANADERIA Y PASTELERIA 3.png')";
  cpublicidad++;
}else if(cpublicidad==2){
  document.getElementById("panaderia").style.backgroundImage  = "url('./publicidad/PANTALLA DE PANADERIA Y PASTELERIA 3.png')";
  cpublicidad++;
}else if(cpublicidad==3){
  document.getElementById("panaderia").style.backgroundImage  = "url('./publicidad/JUGOS NAT TELEVISOR.png')";
  cpublicidad++;
}else if(cpublicidad==4){
  document.getElementById("panaderia").style.backgroundImage  = "url('./publicidad/combo frut cola para TV')";
  cpublicidad++;
}else if(cpublicidad==5){
  document.getElementById("panaderia").style.backgroundImage  = "url('./publicidad/nuevo menu 2_.png')";
  cpublicidad++;
}else if(cpublicidad==6){
  document.getElementById("panaderia").style.backgroundImage  = "url('./publicidad/combo panaderia 1.png')";
  cpublicidad=cpublicidad-5;
}
 
}
setInterval(function(){
  
 cargarData();
 
}
  , 30000);

/*

var contador=4;
function reducirTamano(){
  for (const a of document.querySelectorAll(".linea")) {
    
    var text=a.textContent;
    var length = 18;
    var trimmedString = text.length > length ? 
                    text.substring(0, 21) + "..." : 
                    text;
     a.textContent = trimmedString;

  }
}

function cargarData(){

  fetch('./lib/panaderia.json').then(function(response) {
    let text="";
    if(response.ok) {
      response.json().then(function(response) {
        
        let data=response.data.Panes.slice(0,5);
         
        for (const productos of data) {
          let text2="<div class='producto'><div class='nombreProducto'>"+productos.descripcion+"</div><div class='precioProducto'>"+productos.precio+"</div></div>"
          text+=text2;
        }
        document.querySelector(".listaProductos").innerHTML=text;
        
      });
    } else {
      console.log('Respuesta de red OK pero respuesta HTTP no OK');
    }
  })
  .catch(function(error) {
    console.log('Hubo un problema con la petición Fetch:' + error.message);
  });
}

setInterval(function(){
  let text="";
 
  fetch('./lib/panaderia.json').then(function(response) {
    if(response.ok) {
      response.json().then(function(response) {
        document.querySelector(".listaProductos").innerHTML="";
        let data=response.data.Panes.slice(contador,contador+5);
         
        for (const productos of data) {
          let text2="<div class='producto'><div class='nombreProducto'>"+productos.descripcion+"</div><div class='precioProducto'>"+productos.precio+"</div></div>"
          text+=text2;
        }
        document.querySelector(".listaProductos").innerHTML=text;
        if(contador>=response.data.Panes.length-5){
          contador=0;
          }else{
          contador=contador+4;
          }
      });
    } else {
      console.log('Respuesta de red OK pero respuesta HTTP no OK');
    }
  })
  .catch(function(error) {
    console.log('Hubo un problema con la petición Fetch:' + error.message);
  });
}
  , 60000);

  */