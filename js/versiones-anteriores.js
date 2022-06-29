//Version anterior con prompt y alert 

/* let pokemonConocido = prompt("Digita el nombre del pokemon para verificar si ya esta registrado en pokedex: ").toLowerCase()
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
    } */

    //Version anterior TeamPokemon

    /* Version anterior
         variableCreada = localStorage.getItem('teamPokemon')
        console.log(variableCreada) */

        // console.log(document)
        /* if(variableCreada != null){
            teamPokemon= JSON.parse(localStorage.getItem('teamPokemon'))
            const contenedorStripeTeam = document.getElementById
        ('contenedorSpriteTeam')
        contenedorStripeTeam.innerHTML=""
        
        teamPokemon.forEach((pokemon) => {
            //Agregar cards
            let contenedorSprite = document.createElement("div")
        contenedorSprite.className = "col-md-3  m-1 "
        contenedorSprite.innerHTML = ` 
        <div class="text-center"><img src="${pokemon.sprite}" class="img-fluid text-center"></div>
                
        `
        //Agregar Pokemon
    
        
        contenedorStripeTeam.append(contenedorSprite);
   
        })  
        }else{
            const contenedorStripeTeam = document.getElementById
            ('contenedorSpriteTeam')
            contenedorStripeTeam.innerHTML=""
            
            teamPokemon.forEach((pokemon) => {
                //Agregar cards
                let contenedorSprite = document.createElement("div")
            contenedorSprite.className = "col-md-3  m-1 "
            contenedorSprite.innerHTML = ` 
            <div class="text-center"><img src="${pokemon.sprite}" class="img-fluid text-center"></div>
                    
            `
            //Agregar Pokemon
        
            
            contenedorStripeTeam.append(contenedorSprite);
       
            })  
        } 
        
        //Agregar evento a los botones

//BotonAgregar

/* const agregarEventosALosBotones = () => {

let botonPokemon = document.querySelectorAll(".botonPokemon")


botonPokemon.forEach((boton) =>{
    boton.addEventListener("click",agregarPokemonATeam)
   
    
})

//BotonEliminar
let botonEliminarPokemon = document.querySelectorAll(".botonEliminarPokemon")


botonEliminarPokemon.forEach((boton) =>{
    boton.addEventListener("click",eliminarPokemonDelTeam)
   
    
})

}
 

// agregarEventosALosBotones()
        
        
        
        
        
        */

/*    //Creacion de objetos
    
    const pokemon1 = new Pokemon('001',"bulbasaur","planta","hoja afilada",1,'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png','https://www.cpokemon.com/images/pokedex/sprites/dp/001-f.png','#2CC61A')
    const pokemon2 = new Pokemon('002',"ivysaur","planta","hoja afilada",1,'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png','https://www.cpokemon.com/images/pokedex/sprites/dp/002-f.png','#2CC61A')
    const pokemon3 = new Pokemon('003',"venusaur","planta","rayo solar",1,'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png','https://www.cpokemon.com/images/pokedex/sprites/dp/003-f.png','#2CC61A')
    const pokemon4 = new Pokemon('004',"charmander","fuego","ascuas",1,'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png','https://www.cpokemon.com/images/pokedex/sprites/dp/004-f.png','#FFA500')
    const pokemon5 = new Pokemon('005',"charmeleon","fuego","ascuas",1,'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png','https://www.cpokemon.com/images/pokedex/sprites/dp/005-f.png','#FFA500')
    const pokemon6 = new Pokemon('006',"charizard","fuego","lanzallamas",1,'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png','https://www.cpokemon.com/images/pokedex/sprites/dp/006-m.png','#FFA500')
    const pokemon7 = new Pokemon('007',"squirtle","agua","burbujas",1,'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png','https://www.cpokemon.com/images/pokedex/sprites/dp/007-f.png','#1B4F72')
    const pokemon8 = new Pokemon('008',"wartortle","agua","burbujas",1,'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png','https://www.cpokemon.com/images/pokedex/sprites/dp/008-f.png','#1B4F72')
    const pokemon9 = new Pokemon('009',"blastoise","agua","hidrobomba",1,'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png','https://www.cpokemon.com/images/pokedex/sprites/dp/009-f.png','#1B4F72')
    const pokemon10 = new Pokemon('010',"caterpie","bicho","placaje",1,'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png','https://www.cpokemon.com/images/pokedex/sprites/dp/010-f.png','#6BC61A')
    const pokemon11 = new Pokemon('011',"metapod","bicho","fortaleza",1,'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png','https://www.cpokemon.com/images/pokedex/sprites/dp/011-f.png','#6BC61A')
    const pokemon12 = new Pokemon('012',"butterfree","bicho","confusion",1,'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png','https://www.cpokemon.com/images/pokedex/sprites/dp/012-f.png','#6BC61A')
    const pokemon13 = new Pokemon('013',"weedle","bicho","picotazo venenoso",1,'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png','https://www.cpokemon.com/images/pokedex/sprites/dp/013-f.png','#6BC61A') 
   const pokemon14 = new Pokemon('014',"kakuna","bicho","fortaleza",1,'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/014.png','https://www.cpokemon.com/images/pokedex/sprites/dp/014-f.png','#6BC61A')
   const pokemon15 = new Pokemon('015',"beedrill","bicho","placaje",1,'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015.png','https://www.cpokemon.com/images/pokedex/sprites/dp/015-f.png','#6BC61A')
const pokemon16 = new Pokemon('016',"pidgey","volador","placaje",1,'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png','https://www.cpokemon.com/images/pokedex/sprites/dp/016-f.png','#D6D2E7') 
   const pokemon17 = new Pokemon('017',"pidgeotto","volador","placaje",1,'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/017.png','https://www.cpokemon.com/images/pokedex/sprites/dp/017-f.png','#D6D2E7')
   const pokemon18 = new Pokemon('018',"pidgeot","volador","placaje",1,'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/018.png','https://www.cpokemon.com/images/pokedex/sprites/dp/018-f.png','#D6D2E7')
  const pokemon19 = new Pokemon('019',"rattata","normal","placaje",1,'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png','https://www.cpokemon.com/images/pokedex/sprites/dp/019-f.png','#D2B48C')
     */