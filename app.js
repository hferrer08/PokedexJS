// Clase para construir pokemon

class Pokemon{

constructor(numeroPokedex,nombre, tipo, ataque, generacion){
this.nombre=nombre;
this.tipo=tipo;
this.ataque=ataque;
this.numeroPokedex=numeroPokedex;
this.generacion=generacion;
}

//Metodo para que la pokedex de los datos del pokemon encontrado

identificar(){alert(this.nombre + ", pokemon tipo "+this.tipo+", su ataque mas poderoso es: "+this.ataque ) 

}


}

//Creacion de objetos

const pokemon1 = new Pokemon(1,"bulbasaur","planta","hoja afilada",1)
const pokemon2 = new Pokemon(2,"ivysaur","planta","hoja afilada",1)
const pokemon3 = new Pokemon(3,"venusaur","planta","rayo solar",1)
const pokemon4 = new Pokemon(4,"charmander","fuego","ascuas",1)
const pokemon5 = new Pokemon(5,"charmeleon","fuego","ascuas",1)
const pokemon6 = new Pokemon(6,"charizard","fuego","lanzallamas",1)
const pokemon7 = new Pokemon(7,"squirtle","agua","burbujas",1)
const pokemon8 = new Pokemon(8,"wartortle","agua","burbujas",1)
const pokemon9 = new Pokemon(9,"blastoise","agua","hidrobomba",1)
const pokemon10 = new Pokemon(10,"caterpie","bicho","placaje",1)


//Crear la array con los pokemons
const listaPokedex = [pokemon1,pokemon2,pokemon3,pokemon4,pokemon5,pokemon6,pokemon7,pokemon8,pokemon9,pokemon10]


let pokemonConocido = prompt("Digita el nombre del pokemon para verificar si ya esta registrado en pokedex: ").toLowerCase()

//Verificar existencia en pokedex
const existe = listaPokedex.some(pokemon => pokemon.nombre === pokemonConocido)

//Escoger objeto si existe

const verificarPokemon = listaPokedex.find((pokemon) => pokemon.nombre == pokemonConocido
)


if(existe==true){
verificarPokemon.identificar()
}else{
alert("Aun no has encontrado este pokemon")
let Agregarpokemon = prompt("¿Quieres agregar otro pokemon?").toLowerCase()

if(Agregarpokemon === "si"){

let numeroPokedex = prompt("Digite el numero de la pokedex: ")
let nombrePokemon = prompt("Digite el nombre del pokemon: ").toLowerCase()
let tipoPokemon = prompt("Digite el tipo del pokemon: ").toLowerCase()
let ataquePokemon = prompt("Digite el ataque mas poderoso del pokemon: ").toLowerCase()
let generacionPokemon = prompt("Digite la generacion en que aparece el pokemon: ")


const pokemonUsuario = new Pokemon(numeroPokedex,nombrePokemon,tipoPokemon,ataquePokemon,generacionPokemon)

listaPokedex.push(pokemonUsuario)
console.log(listaPokedex)
}else{
    alert("No se agrego ningun nuevo pokemon")
    
}


}

let buscarPorTipo = prompt("Puedes buscar por tipo de pokemon, digita el tipo de pokemon para ver los que tienes registrados: ").toLowerCase()

const busquedaPorTipo = listaPokedex.filter(pokemon => pokemon.tipo == buscarPorTipo)



//Verificar si existe el tipo buscado

const existeTipo = listaPokedex.some(pokemon => pokemon.tipo === buscarPorTipo)

if(existeTipo == true){
    console.log(busquedaPorTipo)
}else{
    alert("Aun no has encontrado un pokemon de este tipo")
}















