//Arrays in js
console.time("t");
let numeros = [6,2,323,2.42,32.2];
const varios = ["varios", true, numeros]
console.log(numeros)
console.log(varios[0])
console.timeEnd("t");

//añadir elemento
numeros.push("field");
varios.push("Colombia");

//borrar ultimo elemento
numeros.pop();

//Añadir elemento al inicio del array
numeros.unshift("brasil");

//quitar el primer elemento
numeros.shift();

console.log(numeros);

//Metodos para arreglos
//1. reduce() => Coger un arreglo y hacer algo con él.
let reducido = numeros.reduce((acumulador, valorActual)=>{
    return acumulador * valorActual; //
});
console.log(reducido);

//2. Filtrar los valores que cumplan una condicion.
//Es como un for con un if.
console.log(numeros.filter(dato=>{
    return dato>10;
}));

let paises = ["P*t*", "Paco", "Peso", "Pico", "Colombia"];

console.time("paisesfilter");
console.log(paises.filter(dato=>{
    return dato.toLowerCase().startsWith("p");
}));
console.timeEnd("paisesfilter");

//3. Map: coger todos los elementos y hacerles algo.
let mapeo = paises.map(pais=>{
    return pais.concat("😂");
});
console.log(mapeo);

//4. forEach()

numeros.forEach(num=>{
    console.log(num);
});

//Siempre usar metodos para arreglos.

//Crear arreglos usando funciones flecha
//Usar metodos de arreglos y mostrar resultados.
//(para cada arreglo que usted construya mínimo un método distinto).
//Usar callback fn
//La funcion tipo flecha crea el arreglo. Crea el arreglo y se llena con las flechas.