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
    



  

     //AplicarInnerHTML - DOM
    
    //funcion para imprimir la Pokedex completa

    function imprimirPokedex(){
        // console.log(document)
        const contenedorCards = document.getElementById('contenedorCards')
        
        
        listaPokedex.forEach((pokemon) => {
            //Desestructuracion del objeto
            let {image, nombre, tipo, ataque, typeColor, numeroPokedex, generacion} = pokemon
            //Agregar cards
            let contenedor = document.createElement("div")
        contenedor.className = "col-md-4 bordesRedondeados m-1 "
        contenedor.innerHTML = ` 
        <div class="text-center"><img src="${image}" class="img-fluid text-center"></div>
        <h3 class="colorTexto text-center">${nombre}</h3>
        <p class="colorTexto">Pokemon tipo ${tipo}, de ${generacion} generación, su ataque mas poderoso es ${ataque}</p>
        </div>
        
        `
        //Cambiar color de la card
        contenedor.style.backgroundColor = typeColor
        
        //Agregar boton Pokemon
        let botonPokemon = document.createElement("button")
        botonPokemon.className = "botonPokemon btn btn-dark border"
        let botonEliminarPokemon = document.createElement("button")
        botonEliminarPokemon.className = "botonEliminarPokemon btn btn-dark  border mt-1"
        //Data id para saber que pokemon es
        botonPokemon.setAttribute('data-id', numeroPokedex)
        botonPokemon.innerHTML = ` 
        Yo te elijo para mi team!
        
        `
        botonEliminarPokemon.setAttribute('data-id', numeroPokedex)
        botonEliminarPokemon.innerHTML = ` 
        Eliminar pokemon de mi team
        
        `
        
        contenedor.append(botonPokemon)
        contenedor.append(botonEliminarPokemon)
        
        contenedorCards.append(contenedor);
   
        })  
    }

    imprimirPokedex()
    imprimirTeamPokemon()
    
   
    function imprimirTeamPokemon(){
        /* variableCreada = localStorage.getItem('teamPokemon')
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
        } */
        //Operador ternario OR para ver si existe un teamPokemon guardado en localStorage
         let teamPokemon = JSON.parse(localStorage.getItem('teamPokemon'))||[]

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

const filtrarPorTipo = () => {
     
    const busquedaPorTipo = listaPokedex.filter(pokemon => pokemon.tipo == seleccionTipo.value)
    const contenedorCards = document.getElementById('contenedorCards')
    
    busquedaPorTipo.forEach((pokemon) => {
        //Desestructuracion del objeto
     let {image, nombre, tipo, ataque, typeColor, numeroPokedex, generacion} = pokemon
        let contenedor = document.createElement("div")
        
    contenedor.className = "col-md-4 bordesRedondeados m-1 fondoCard"
    contenedor.innerHTML = ` 
    
    
    <div class="text-center"><img src="${image}" class="img-fluid text-center"></div>
    <h3 class="colorTexto text-center">${nombre}</h3>
    <p class="colorTexto">Pokemon tipo ${tipo}, de ${generacion} generación, su ataque mas poderoso es ${ataque}</p>
    </div>
    
    
    
    `
     //Cambiar color de la card
     contenedor.style.backgroundColor = typeColor
     //Agregar boton Pokemon
     let botonPokemon = document.createElement("button")
     botonPokemon.className = "botonPokemon btn btn-dark border"
     let botonEliminarPokemon = document.createElement("button")
     botonEliminarPokemon.className = "botonEliminarPokemon btn btn-dark  border mt-1"
     //Data id para saber que pokemon es
     botonPokemon.setAttribute('data-id', numeroPokedex)
     botonPokemon.setAttribute('onClick', agregarPokemonATeam)
     botonPokemon.innerHTML = ` 
     Yo te elijo para mi team!
     
     `
     botonEliminarPokemon.setAttribute('data-id', numeroPokedex)
     botonEliminarPokemon.setAttribute('onClick', eliminarPokemonDelTeam)
     botonEliminarPokemon.innerHTML = ` 
     Eliminar pokemon de mi team
     
     `
     
     contenedor.append(botonPokemon)
     contenedor.append(botonEliminarPokemon)
     
    
    contenedorCards.append(contenedor);
    })
}



    
    //funcion para la lista dropdown por tipo
    

    function respuestaClick(){
        
        //Leer documento
       // console.log(document)
        //Leer contenedor de Cards y dejarlo en blanco
            const contenedorCards = document.getElementById('contenedorCards')
            contenedorCards.innerHTML = ""
    
        //Operador ternario AND puesto que es un if simple
        //Si el usuario escoge todos los tipos imprimir toda la pokedex
        seleccionTipo.value==='todos' && imprimirPokedex()   
        //Si es tipo agua agregar array busquedaPorTipo que filtra los tipo agua
    if(seleccionTipo.value==='agua'){
        
        filtrarPorTipo()
        
    }
    
    //Si es tipo fuego agregar array busquedaPorTipo que filtra los tipo fuego
    if(seleccionTipo.value==='fuego'){
        filtrarPorTipo()
    }
    //Si es tipo planta agregar array busquedaPorTipo que filtra los tipo planta
    if(seleccionTipo.value==='planta'){
        filtrarPorTipo()
    }
    //Si es tipo bicho agregar array busquedaPorTipo que filtra los tipo bicho
    if(seleccionTipo.value==='bicho'){
        filtrarPorTipo()
    }
    
     //Si es tipo volador agregar array busquedaPorTipo que filtra los tipo volador
    if(seleccionTipo.value==='volador'){
        filtrarPorTipo()
        }
 //Si es tipo normal agregar array busquedaPorTipo que filtra los tipo volador
    if(seleccionTipo.value==='normal'){
        filtrarPorTipo()
    }
        
      }

      //Evento para filtrar los tipos en la lista desplegable

  let seleccionTipo = document.getElementById("pokemons")
  // console.log(seleccionTipo)
  seleccionTipo.addEventListener("change", respuestaClick) 

  //Funcion para agregar Pokemon al team

const agregarPokemonATeam = (e) => {
    e.preventDefault()
const pokemonNumeroPokedexSeleccionado = e.target.getAttribute('data-id')
//console.log(pokemonNumeroPokedexSeleccionado)
const busquedaPorNoPokedex = listaPokedex.find(pokemon => pokemon.numeroPokedex == pokemonNumeroPokedexSeleccionado)
//console.log(busquedaPorNoPokedex)
//Operador ternario
teamPokemon.length<6? teamPokemon.push(busquedaPorNoPokedex):alert("Máximo 6 pokemon por equipo")

//console.log(teamPokemon)

let teamEnJSON = JSON.stringify(teamPokemon)
localStorage.setItem('teamPokemon',teamEnJSON)

imprimirTeamPokemon()



} 


 //Funcion para eliminar Pokemon del team

 const eliminarPokemonDelTeam = (e) => {
    e.preventDefault()
const pokemonAEliminar = e.target.getAttribute('data-id')
console.log(pokemonAEliminar)
teamPokemon = teamPokemon.filter(pokemon => pokemon.numeroPokedex != pokemonAEliminar)


console.log(teamPokemon)

let teamEnJSON = JSON.stringify(teamPokemon)
localStorage.setItem('teamPokemon',teamEnJSON)

imprimirTeamPokemon()



} 

 
//Agregar evento a los botones

//BotonAgregar

const agregarEventosALosBotones = () => {

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


agregarEventosALosBotones()