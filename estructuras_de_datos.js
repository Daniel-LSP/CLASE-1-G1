/*
arrays
objetos
sets
*/

var miArray=[1,28,3,7,12]
console.log(typeof(miArray))//object

//cantidad de elementos
console.log(miArray.length)//propiedad
console.log(miArray.pop())//12
console.log(miArray)
console.log(miArray.reverse())

//push
miArray.push("f")
console.log(miArray)

miArray.shift()//aplicar el metodo
console.log(miArray)//resultado
miArray.unshift("b")
console.log(miArray)
console.log(miArray.shift())//b
//ver que retorna la aplicacion del metodo
console.log(miArray.unshift("e"))//5

//Objeto Javascript
var estudiantes={
    nombre:"andres",
    edad:21
}
console.log(typeof(estudiantes))//object
console.log(estudiantes.edad)

estudiantes.ciudad="palmira"
console.log(estudiantes)

var datos=Array(28,50,60)
console.log(datos)

var conjunto=new Set()//constructor
console.log(conjunto)
conjunto.add(8)
console.log(conjunto)