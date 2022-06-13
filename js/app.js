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
    

  //Crear la array con los pokemon
  const listaPokedex = [pokemon1,pokemon2,pokemon3,pokemon4,pokemon5,pokemon6,pokemon7,pokemon8,pokemon9,pokemon10,pokemon11,pokemon12,pokemon13,pokemon14,pokemon15,pokemon16,pokemon17,pokemon18,pokemon19]

  //Crear array de Team

  let teamPokemon = []

  console.log(listaPokedex)

     //AplicarInnerHTML - DOM
    
    //funcion para imprimir la Pokedex completa

    function imprimirPokedex(){
        console.log(document)
        const contenedorCards = document.getElementById('contenedorCards')
        
        
        listaPokedex.forEach((pokemon) => {
            //Agregar cards
            let contenedor = document.createElement("div")
        contenedor.className = "col-md-4 bordesRedondeados m-1 "
        contenedor.innerHTML = ` 
        <div class="text-center"><img src="${pokemon.image}" class="img-fluid text-center"></div>
        <h3 class="colorTexto text-center">${pokemon.nombre}</h3>
        <p class="colorTexto">Pokemon tipo ${pokemon.tipo}, de ${pokemon.generacion} generación, su ataque mas poderoso es ${pokemon.ataque}</p>
        </div>
        
        `
        //Cambiar color de la card
        contenedor.style.backgroundColor = pokemon.typeColor
        //Agregar boton Pokemon
        let botonPokemon = document.createElement("button")
        botonPokemon.className = "botonPokemon"
        let botonEliminarPokemon = document.createElement("button")
        botonEliminarPokemon.className = "botonEliminarPokemon"
        //Data id para saber que pokemon es
        botonPokemon.setAttribute('data-id', pokemon.numeroPokedex)
        botonPokemon.innerHTML = ` 
        Yo te elijo para mi team!
        
        `
        botonEliminarPokemon.setAttribute('data-id', pokemon.numeroPokedex)
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
        variableCreada = localStorage.getItem('teamPokemon')
        console.log(variableCreada)

        console.log(document)
        if(variableCreada != null){
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
       
        
        
    }


    
    //funcion para la lista dropdown por tipo
    

    function respuestaClick(){
        
        //Leer documento
        console.log(document)
        //Leer contenedor de Cards y dejarlo en blanco
            const contenedorCards = document.getElementById('contenedorCards')
            contenedorCards.innerHTML = ""
        //Si el usuario escoge todos los tipos imprimir toda la pokedex
        if(seleccionTipo.value==='todos'){
            console.log('Toda la pokedex')
            imprimirPokedex()
        }      
        //Si es tipo agua agregar array busquedaPorTipo que filtra los tipo agua
    if(seleccionTipo.value==='agua'){
        console.log('Tipo agua')
    
        const busquedaPorTipo = listaPokedex.filter(pokemon => pokemon.tipo == seleccionTipo.value)
        const contenedorCards = document.getElementById('contenedorCards')
        
        busquedaPorTipo.forEach((pokemon) => {
            let contenedor = document.createElement("div")
            
        contenedor.className = "col-md-4 bordesRedondeados m-1 fondoCard"
        contenedor.innerHTML = ` 
        
        
        <div class="text-center"><img src="${pokemon.image}" class="img-fluid text-center"></div>
        <h3 class="colorTexto text-center">${pokemon.nombre}</h3>
        <p class="colorTexto">Pokemon tipo ${pokemon.tipo}, de ${pokemon.generacion} generación, su ataque mas poderoso es ${pokemon.ataque}</p>
        </div>
        
        
        
        `
         //Cambiar color de la card
         contenedor.style.backgroundColor = pokemon.typeColor
         
        
        contenedorCards.append(contenedor);
        })
        
    
    }
    //Si es tipo fuego agregar array busquedaPorTipo que filtra los tipo fuego
    if(seleccionTipo.value==='fuego'){
        console.log('Tipo fuego')
        const busquedaPorTipo = listaPokedex.filter(pokemon => pokemon.tipo == seleccionTipo.value)
        const contenedorCards = document.getElementById('contenedorCards')
        
        busquedaPorTipo.forEach((pokemon) => {
            let contenedor = document.createElement("div")
        contenedor.className = "col-md-4 bordesRedondeados m-1 fondoCard"
        contenedor.innerHTML = ` 
        
        
        <div class="text-center"><img src="${pokemon.image}" class="img-fluid text-center"></div>
        <h3 class="colorTexto text-center">${pokemon.nombre}</h3>
        <p class="colorTexto">Pokemon tipo ${pokemon.tipo}, de ${pokemon.generacion} generación, su ataque mas poderoso es ${pokemon.ataque}</p>
        </div>
       
        
        `
         //Cambiar color de la card
         contenedor.style.backgroundColor = pokemon.typeColor
         
        
        contenedorCards.append(contenedor);
        })
    }
    //Si es tipo planta agregar array busquedaPorTipo que filtra los tipo planta
    if(seleccionTipo.value==='planta'){
        console.log('Tipo planta')
        const busquedaPorTipo = listaPokedex.filter(pokemon => pokemon.tipo == seleccionTipo.value)
        const contenedorCards = document.getElementById('contenedorCards')
        
        busquedaPorTipo.forEach((pokemon) => {
            let contenedor = document.createElement("div")
        contenedor.className = "col-md-4 bordesRedondeados m-1 fondoCard"
        contenedor.innerHTML = ` 
        
        
        <div class="text-center"><img src="${pokemon.image}" class="img-fluid text-center"></div>
        <h3 class="colorTexto text-center">${pokemon.nombre}</h3>
        <p class="colorTexto">Pokemon tipo ${pokemon.tipo}, de ${pokemon.generacion} generación, su ataque mas poderoso es ${pokemon.ataque}</p>
        </div>
        
        
        `
         //Cambiar color de la card
         contenedor.style.backgroundColor = pokemon.typeColor
         
         
        
        contenedorCards.append(contenedor);
        })
    }
    //Si es tipo bicho agregar array busquedaPorTipo que filtra los tipo bicho
    if(seleccionTipo.value==='bicho'){
        console.log('Tipo bicho')
        const busquedaPorTipo = listaPokedex.filter(pokemon => pokemon.tipo == seleccionTipo.value)
        const contenedorCards = document.getElementById('contenedorCards')
        
        busquedaPorTipo.forEach((pokemon) => {
            let contenedor = document.createElement("div")
        contenedor.className = "col-md-4 bordesRedondeados m-1 fondoCard"
        contenedor.innerHTML = ` 
        
        
        <div class="text-center"><img src="${pokemon.image}" class="img-fluid text-center"></div>
        <h3 class="colorTexto text-center">${pokemon.nombre}</h3>
        <p class="colorTexto">Pokemon tipo ${pokemon.tipo}, de ${pokemon.generacion} generación, su ataque mas poderoso es ${pokemon.ataque}</p>
        </div>
        
        
        `
         //Cambiar color de la card
         contenedor.style.backgroundColor = pokemon.typeColor
        
         
        
        contenedorCards.append(contenedor);
        })
    }
    
     //Si es tipo volador agregar array busquedaPorTipo que filtra los tipo volador
    if(seleccionTipo.value==='volador'){
        console.log('Tipo volador')
        const busquedaPorTipo = listaPokedex.filter(pokemon => pokemon.tipo == seleccionTipo.value)
        const contenedorCards = document.getElementById('contenedorCards')
        
        busquedaPorTipo.forEach((pokemon) => {
            let contenedor = document.createElement("div")
        contenedor.className = "col-md-4 bordesRedondeados m-1 fondoCard"
        contenedor.innerHTML = ` 
        
        
        <div class="text-center"><img src="${pokemon.image}" class="img-fluid text-center"></div>
        <h3 class="colorTexto text-center">${pokemon.nombre}</h3>
        <p class="colorTexto">Pokemon tipo ${pokemon.tipo}, de ${pokemon.generacion} generación, su ataque mas poderoso es ${pokemon.ataque}</p>
        </div>
       /
        
        `
         //Cambiar color de la card
         contenedor.style.backgroundColor = pokemon.typeColor
        
         
        
        contenedorCards.append(contenedor);
        })
    }
 //Si es tipo normal agregar array busquedaPorTipo que filtra los tipo volador
    if(seleccionTipo.value==='normal'){
        console.log('Tipo normal')
        const busquedaPorTipo = listaPokedex.filter(pokemon => pokemon.tipo == seleccionTipo.value)
        const contenedorCards = document.getElementById('contenedorCards')
        
        busquedaPorTipo.forEach((pokemon) => {
            let contenedor = document.createElement("div")
        contenedor.className = "col-md-4 bordesRedondeados m-1 fondoCard"
        contenedor.innerHTML = ` 
        
        
        <div class="text-center"><img src="${pokemon.image}" class="img-fluid text-center"></div>
        <h3 class="colorTexto text-center">${pokemon.nombre}</h3>
        <p class="colorTexto">Pokemon tipo ${pokemon.tipo}, de ${pokemon.generacion} generación, su ataque mas poderoso es ${pokemon.ataque}</p>
        </div>
       
        
        `
        
         //Cambiar color de la card
         contenedor.style.backgroundColor = pokemon.typeColor
        
         
        contenedorCards.append(contenedor);
        })
    }
        
      }

      //Evento para filtrar los tipos en la lista desplegable

  let seleccionTipo = document.getElementById("pokemons")
  console.log(seleccionTipo)
  seleccionTipo.addEventListener("change", respuestaClick) 

  //Funcion para agregar Pokemon al team

const agregarPokemonATeam = (e) => {
    e.preventDefault()
const pokemonNumeroPokedexSeleccionado = e.target.getAttribute('data-id')
console.log(pokemonNumeroPokedexSeleccionado)
const busquedaPorNoPokedex = listaPokedex.find(pokemon => pokemon.numeroPokedex == pokemonNumeroPokedexSeleccionado)
console.log(busquedaPorNoPokedex)
if(teamPokemon.length<6){
teamPokemon.push(busquedaPorNoPokedex)
}else{
    alert("Máximo 6 pokemon por equipo")
}
console.log(teamPokemon)

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