/*
if
else if
else


---
switch case default
*/
var x=2
if(x===2){
    console.log("cumple")
}

//if de multiples condiciones
if(x===3){
    console.log("primera salida")
}else if(x==="2"){
    console.log("segunda salida")
}else if(x===4){
    console.log("tercera salida")
}else{
    console.log("No se cumplio ninguna")
}

//OPERADORES LOGICOS
// el uso de && y de ||
if(100>10 && 10==10){
    console.log("doble condicion y se cumple")
}

if(100>10000 || 10==10){
    console.log("condicion o se cumple")
}

//USO DE SWITCH switch case default 
let opcion=2

switch(opcion){
    case 1:
        console.log('Caso 1')
        break
    case 2:
        console.log("Caso 2")
        break
    default:
        console.log("Caso por defecto")
}