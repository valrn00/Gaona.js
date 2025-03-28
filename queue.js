function proximoEnLaFila(arreglo, elemento) {
    // Agregar el elemento al final del arreglo
    arreglo.push(elemento);
    // Eliminar y retornar el primer elemento del arreglo
    return arreglo.shift();

}

var miArreglo = [1, 2, 3, 4, 5];
console.log (proximoEnLaFila(miArreglo, 6)); // 1
console.log (miArreglo); // [2, 3, 4, 5, 6]
console.log (proximoEnLaFila(miArreglo, 7)); // 2
console.log (miArreglo); // [3, 4, 5, 6, 7]