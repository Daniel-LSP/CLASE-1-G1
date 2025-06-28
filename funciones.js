/*
1. definir
2. invocar o llamar
*/

function saludar(){
    return "hola"
}

console.log(saludar())

function sumar(a,b){
    return a+b
}
console.log(sumar(8,25))

//opcion 2: guardar una funcion en una variable
const multiplicar = function(c,d){
    return c*d
}
console.log(multiplicar(2,9))

//opcion 3: arrow function
const dividir = (e,f)=>{
    return e/f
}
console.log(dividir(20,5))