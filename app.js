class Pokemon{

constructor(numeroPokedex,nombre, tipo, ataque, generacion){
this.nombre=nombre;
this.tipo=tipo;
this.ataque=ataque;
this.numeroPokedex=numeroPokedex;
this.generacion=generacion;
}

identificar(){alert(this.nombre + ", pokemon tipo "+this.tipo+", su ataque mas poderoso es: "+this.ataque)}


}

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

const listaPokedex = [pokemon1,pokemon2,pokemon3,pokemon4,pokemon5,pokemon6,pokemon7,pokemon8,pokemon9,pokemon10]

console.log(listaPokedex)

let pokemonConocido = prompt("Digita el nombre del pokemon para verificar si ya esta registrado en pokedex: ").toLowerCase()


for(const pokemon of listaPokedex){
    if(pokemonConocido == pokemon.nombre){
        pokemon.identificar()
    }else{
        console.log("no conoces aun a este pokemon");
    }
}





