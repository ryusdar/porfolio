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

// 1 Crea un arreglo con 5 números y muestra el tercero en consola.
let numeros =[1,2,3,4,5];
console.log(numeros[2]);

//2 Agrega un nuevo elemento a un arreglo usando push.
numeros.push(6);
console.log(numeros);

//3 Elimina el último elemento de un arreglo y muéstralo en consola.
numeros.pop();
console.log(numeros);

//4 Usa map para multiplicar por 2 cada número de un arreglo.
let numeros_multiplicar = numeros.map(num => num * 2);
console.log(numeros_multiplicar);

//5 Filtra un arreglo para obtener solo los números mayores a 10.
let filtrar = [5,22,44,6,7];
let mayores= filtrar.filter(num => num > 10);
console.log(mayores);

//6 Declara un objeto con las propiedades nombre, edad, y profesión.
let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador"
};
console.log(persona);       

//7 Accede y muestra el valor de una propiedad de un objeto.
console.log("nombre: "+ persona.nombre);

//8 Agrega un método a un objeto que devuelva un saludo personalizado.
persona.saludar = function() {
    return `Hola, mi nombre es ${this.nombre} y soy ${this.profesion}.`;
}
console.log(persona.saludar());

//9 Usa reduce para sumar todos los números de un arreglo.
let suma = numeros.reduce((acumulador,num )=> acumulador + num, 0);
console.log("suma: "+ suma);

//10 Combina arreglos y objetos: Crea un arreglo de objetos y recórrelo para mostrar el nombre de cada elemento.

let productos=[
    
    {nombre: "camisa", precio: 20},
    {nombre: "pantalon", precio: 30},
    {nombre: "zapatos", precio: 50}
];  
productos.forEach(producto => {
    console.log("Producto: " + producto.nombre);
});