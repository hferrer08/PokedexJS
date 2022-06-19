 
  
 //AplicarInnerHTML - DOM
    
    //funcion para imprimir la Pokedex completa

    function imprimirPokedex(){
        
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
     botonPokemon.innerHTML = ` 
     Yo te elijo para mi team!
     
     `
     botonEliminarPokemon.setAttribute('data-id', numeroPokedex)
     botonEliminarPokemon.innerHTML = ` 
     Eliminar pokemon de mi team
     
     `
     
     contenedor.append(botonPokemon)
     contenedor.append(botonEliminarPokemon)
     
     botonPokemon.addEventListener("click",agregarPokemonATeam)
     botonEliminarPokemon.addEventListener("click",eliminarPokemonDelTeam)
    
    contenedorCards.append(contenedor);
    }
    
    )
    
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
        if(seleccionTipo.value==='todos') {
            imprimirPokedex() 
            agregarEventosALosBotones()  }
        //Si es tipo agua agregar array busquedaPorTipo que filtra los tipo agua
        //Operadores logicos AND &&    
        seleccionTipo.value==='agua' && filtrarPorTipo()
        
    
    
    //Si es tipo fuego agregar array busquedaPorTipo que filtra los tipo fuego
    seleccionTipo.value==='fuego' && filtrarPorTipo()
    
    //Si es tipo planta agregar array busquedaPorTipo que filtra los tipo planta
    seleccionTipo.value==='planta' && filtrarPorTipo()
    //Si es tipo bicho agregar array busquedaPorTipo que filtra los tipo bicho
    seleccionTipo.value==='bicho' && filtrarPorTipo()
    
    
     //Si es tipo volador agregar array busquedaPorTipo que filtra los tipo volador
    seleccionTipo.value==='volador' && filtrarPorTipo()
        
 //Si es tipo normal agregar array busquedaPorTipo que filtra los tipo volador
    seleccionTipo.value==='normal' && filtrarPorTipo()
    
        
      }

      //Evento para filtrar los tipos en la lista desplegable

  let seleccionTipo = document.getElementById("pokemons")
  // console.log(seleccionTipo)
  seleccionTipo.addEventListener("change", respuestaClick) 

  //Funcion para agregar Pokemon al team

const agregarPokemonATeam = (e) => {
    //Tomar informacion del evento 'e'
    e.preventDefault()
    //Tomar el target para que saber que pokemon el usuario le dio click
const pokemonNumeroPokedexSeleccionado = e.target.getAttribute('data-id')

const busquedaPorNoPokedex = listaPokedex.find(pokemon => pokemon.numeroPokedex == pokemonNumeroPokedexSeleccionado)

//Operador ternario
if(teamPokemon.length<6){
    teamPokemon.push(busquedaPorNoPokedex)
    //Si se agrega pokemon aparece un toast con informacion de pokemon agregado 
    Toastify({
        text: "Pokemon agregado al equipo",
        duration: 1500,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",

         

        },
        onClick: function(){} // Callback after click
      }).showToast();
}else{
    //Si son mas de 6 pokemon aparece un mensaje diciendo solo se permiten 6 pokemon por equipo y un pikachu diciendo que no
    Swal.fire({
        
        title: 'Solo se permiten 6 pokemon por equipo',
        width: 500,
        padding: '3em',
        color: '#1B4F72',
        
        background: '#fff ',
        backdrop: `
          rgba(0,0,125,0.4)
          url("https://c.tenor.com/-LgdRnkYRN4AAAAC/no-pokemon.gif")
          right bottom
          no-repeat
        `
      })
}


let teamEnJSON = JSON.stringify(teamPokemon)
localStorage.setItem('teamPokemon',teamEnJSON)

imprimirTeamPokemon()




} 


 //Funcion para eliminar Pokemon del team

 const eliminarPokemonDelTeam = (e) => {
   //Tomar info del evento 'e'
    e.preventDefault()
    //Tomar info del target data id que es el numero de pokedex para posteriormente con ese NoPokedex saber que pokemon clickeo el usuario
const pokemonAEliminar = e.target.getAttribute('data-id')

teamPokemon = teamPokemon.filter(pokemon => pokemon.numeroPokedex != pokemonAEliminar)

Toastify({
    text: "Eliminaste un pokemon del equipo",
    duration: 1500,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)",
      
      
      

    },
    onClick: function(){} // Callback after click
  }).showToast();


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



       