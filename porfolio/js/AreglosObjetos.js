let producto =[
    {nombre: "manzana", precio: 1.2 , cantidad: 10},
    {nombre: "platano", precio: 0.8 , cantidad: 15},
    {nombre: "cereal", precio:  3.5 , cantidad:  2},
]
console.log(producto)

//funcion agregar producto

function agregarProducto(nombre,precio,cantidad){
    producto.push({nombre,precio,cantidad })
    console.log(producto)

}
agregarProducto("kiwi",5000,4)

//forma mas sencilla para agrregar un producto

const fruta=["manzana","banana","cereza","durazno"]
console.log("frutas: " + fruta)

fruta.push("naranja")
console.log(fruta)

// borrar el ultimo
fruta.pop()
console.log(fruta)

// borra el primero
fruta.shift();
console.log(fruta);

//para buscar por indice
fruta.forEach((fruta,indice)=>{
    console.log(`fruta en el indice ${indice}: ${fruta} ` );
});

//filtrar las frutas 
fruta.filter(fruta => fruta.startsWith("c")).forEach(fruta=> {
    console.log(fruta)
})
//agregar un elemento al inicio
fruta.unshift("freza")
console.log(fruta)

//llama a los elementos de la funcion y los mete en una array para modificarlos
fruta.map((fruta,indice)=>{
    console.log(`fruta en el indice hecho con map ${indice}: ${fruta} ` );
});


//reduce lo usamos para acumular o sumar 
fruta.reduce((acumulador,fruta) =>{
    console.log('acumulador:', acumulador, 'fruta actual:',fruta);
    return acumulador + ', '+ fruta;

}, '');