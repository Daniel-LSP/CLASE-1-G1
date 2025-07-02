/*
1. Comprueba si un elemento existe dentro de un array. Devuelve true o false.
2. Suma todos los enteros de un array y devuelve el resultado.
3. Calcula y devuelve el promedio de los valores de un array.
4. Devuelve el numero mas grande de un array de enteros.
*/

//1.
var datos=["b",8,15,"palmira"]

//respuesta
function comprobar(array,elemento){
    for(let i=0;i<array.length;i++){
        if (array[i]===elemento){
            return true
        }
    }
    return false
}
console.log(comprobar(datos,"cali"))

//2.
var lista=[8,9,12,64,7]

const sumar=(array)=>{
    let total=0;
    for(let i=0;i<array.length;i++){
    total=total+array [i]
    }
    return total
}
console.log(sumar(lista))



//version 2
const sumar_2=(array)=>{
    let resultado=array.reduce((acumulado, actual)=>acumulado+actual)
    return resultado

}

console.log(sumar_2(lista))