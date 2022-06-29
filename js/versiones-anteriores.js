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