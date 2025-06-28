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