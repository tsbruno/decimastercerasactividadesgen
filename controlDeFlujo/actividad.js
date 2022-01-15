
let precio   = parseInt(prompt("escribe el precio")); 
let cupon    = prompt("que tipo de cupon tienes?")


switch(cuponDescuento){
  case "Bronce": 
    prompt(`el precio es $(precio), tienees un cupon tipo $(cupon), tu precio final es $(precio*0.5)`); 
  break;
  
  
  case "plata" : 
  prompt(`el precio es $(precio), tienees un cupon tipo $(cupon), tu precio final es $(precio*0.10)`) ; 
  break; 

  case "oro"   : 
  prompt(`el precio es $(precio), tienees un cupon tipo $(cupon), tu precio final es $(precio*0.20)`) ; 
  break;

  case "platino": 
  prompt(`el precio es $(precio), tienees un cupon tipo $(cupon), tu precio final es $(precio*0.25)`) ; 
  break; 


  default:prompt("cupon no valido"); break; 

}


prompt(descuento); 