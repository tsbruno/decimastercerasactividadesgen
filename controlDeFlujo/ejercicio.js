let hora = prompt("ingresa tu hora"); 

if (hora >= 6 && hora <= 11) 
{
  alert("Buenos días")
}

if (hora >= 12 && hora <= 18) 
{
    alert("Buenas tardes")
}

if (hora > 18 && hora <= 23) 
{
    alert("Buenas noches")
}

if (hora >= 23 && hora <= 0) 


{
    alert("Sleep time")
}
  

let edad = 17; 

edad >= 18  
  ?console.log("Mayor de edad")
  :console.log("Menor de edad"); 


  let pregunta = (edad >= 18)  
      ?"Mayor de edad"
      :"Menor de edad";


console.log(pregunta); 


let preguntaEdad = `Tengo ${edad} 
años y soy ${ edad >= 18 ? "mayor" : "menor"} de edad`; 

console.log(preguntaEdad); 


let dia = prompt("ingrese el digito")

if(dia === 0){
  prompt("Domingo");
} else if (dia === 1){
  prompt("lunes");
} else if (dia === 2){
  prompt("Martes");
} else if (dia === 3){
  prompt("miercoles");
}else{
  prompt("Fuera de rango");
}



let dia = 5; 

switch(dia){

  case 0:console.log("Domingo"); break;
  case 1:console.log("lunes"); break;
  case 2:console.log("martes"); break;
  case 3:console.log("miercoles"); break;
  case 4:console.log("jueves"); break; 

  default: console.log("error"); break; 
  
}



let cuponDescuento= "oro"; 
let descuento; 

switch(cuponDescuento){
  case "Bronce": descuento = 5; break;
  case "plata" : descuento = 10; break; 
  case "oro"   : descuento = 15; break; 
  default:console.log("cupon no valido"); break; 

}


console.log(descuento); 






const loki_disfraces = {
  'iron': 'magneto', 
   thor: 'odin'
}

const loki_default = 'loki'

const loki = loki_disfraces[adversario]







