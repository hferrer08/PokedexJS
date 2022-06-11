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

  console.log(listaPokedex)

     //AplicarInnerHTML - DOM
    
    //funcion para imprimir la Pokedex completa

    function imprimirPokedex(){
        console.log(document)
        const contenedorCards = document.getElementById('contenedorCards')
        
        
        listaPokedex.forEach((pokemon) => {
            let contenedor = document.createElement("div")
        contenedor.className = "col-md-4 bordesRedondeados m-1 fondoCard"
        contenedor.innerHTML = ` 
        <div class="text-center"><img src="${pokemon.image}" class="img-fluid text-center"></div>
        <h3 class="colorTexto text-center">${pokemon.nombre}</h3>
        <p class="colorTexto">Pokemon tipo ${pokemon.tipo}, de ${pokemon.generacion} generación, su ataque mas poderoso es ${pokemon.ataque}</p>
        </div>
        <button class="pokemonBoton"><span>Yo te elijo para mi team!</button>
        `
        
        
        contenedorCards.append(contenedor);
        })  
    }

    imprimirPokedex()

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
        <button class="pokemonBoton"> <span>Yo te elijo para mi team!</button>
        
        
        `
        
        
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
        <button class="pokemonBoton"><span>Yo te elijo para mi team!</button>
        
        `
        
        
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
        <button class="pokemonBoton"><span>Yo te elijo para mi team!</button>
        
        `
        
        
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
        <button class="pokemonBoton"><span>Yo te elijo para mi team!</button>
        
        `
        
        
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
        <button class="pokemonBoton"><span>Yo te elijo para mi team!</button>
        
        `
        
        
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
        <button class="pokemonBoton"><span>Yo te elijo para mi team!</button>
        
        `
        
        
        contenedorCards.append(contenedor);
        })
    }
        
      }

      //Evento para filtrar los tipos en la lista desplegable

  let seleccionTipo = document.getElementById("pokemons")
  console.log(seleccionTipo)
  seleccionTipo.addEventListener("change", respuestaClick) 

  //Funcion para agregar Pokemon al team

function agregarPokemonATeam(){console.log("Agregaste un pokemon al team")}

 
//Agregar evento a los botones

let botonPokemon = document.querySelectorAll(".pokemonBoton")
botonPokemon.forEach((boton) =>{
    boton.addEventListener("click",agregarPokemonATeam)
})



    
    
    
    
    
    
 