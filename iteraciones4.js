/* EJERCICIO 4*/

/* 1.1 Consigue el valor "HULK" del array de cars y muestralo por consola. */
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
let hulk = avengers[0]
console.log(hulk)

/* 1.2 Cambia el primer elemento de avengers a "IRONMAN" */
const avengers2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers2.shift();
avengers2.unshift("IRONMAN");

/* 1.3 Alert numero de elementos en el array usando la propiedad correcta de Array. */
const avengers3 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
alert(avengers3.length);

/* 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
Muestra en consola el último personaje del array */
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty");
rickAndMortyCharacters.push("Summer")
ultimo = rickAndMortyCharacters[rickAndMortyCharacters.length-1]
console.log(ultimo)

/* 1.5 Elimina el último elemento del array y muestra el primero y el último por consola. */
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.pop();

/* 1.6 Elimina el segundo elemento del array y muestra el array por consola. */
const rickAndMortyCharacters3 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters3.pop(rickAndMortyCharacters3[1]);
console.log(rickAndMortyCharacters3);