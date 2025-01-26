// Codigo fetch para traer info de pokemon.json

const traerDatos = () => {
  //fetch('https://hferrer08.github.io/PokedexJS/data/pokemon.json')
  fetch("./data/pokemon.json")
    //Traer la respuesta y volverla JSON
    .then((response) => response.json())
    //JsonResponse.data porque en el archivo .json llamamos el archivo data
    .then((jsonResponse) => {
      listaPokedex = jsonResponse.data;
      imprimirPokedex(listaPokedex);
      generarOpcionesSelect();
    });
};
traerDatos();

const sweetConfirmacionEliminar = async (titulo) => {
    const result = await Swal.fire({
      title: titulo,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sí",
      denyButtonText: "No",
    });
  
    return result.isConfirmed;  // Retorna si el usuario confirmó (hizo clic en "Sí")
  };

function generarOpcionesSelect() {
      
    // Obtener el contenedor del select
    const selectElement = document.getElementById("pokemons");
  
    // Crear un Set para obtener valores únicos de typeColor
    const uniqueTypes = [...new Set(listaPokedex.map((pokemon) => pokemon.tipo))];
  
    // Limpiar el select antes de llenarlo
    selectElement.innerHTML = "";
  
    // Agregar la opción fija "Todos"
    const defaultOption = document.createElement("option");
    defaultOption.value = "todos";
    defaultOption.textContent = "Todos";
    selectElement.appendChild(defaultOption);
  
    // Generar las opciones dinámicamente
    uniqueTypes.forEach((type) => {
      const option = document.createElement("option");
      option.value = type;
      option.textContent = type.charAt(0).toUpperCase() + type.slice(1); // Capitaliza la primera letra
      selectElement.appendChild(option);
    });
  }
  
  
//AplicarInnerHTML - DOM

//funcion para imprimir la Pokedex completa

function imprimirPokedex(listaPokedex) {
  const contenedorCards = document.getElementById("contenedorCards");

  listaPokedex.forEach((pokemon) => {
    //Desestructuracion del objeto
    let { image, nombre, tipo, ataque, typeColor, numeroPokedex, generacion } =
      pokemon;
    //Agregar cards
    let contenedor = document.createElement("div");
    contenedor.className = "col-5 bordesRedondeados m-1 ";
    contenedor.innerHTML = ` 
        <div class="col-12 text-center"><img src="${image}" class="img-fluid text-center img-limited"></div>
        <h3 class="colorTexto text-center">${nombre}</h3>
        <p class="colorTexto">Pokemon tipo ${tipo}, de ${generacion} generación, su ataque mas poderoso es ${ataque}</p>
        </div>
        
        `;
    //Cambiar color de la card
    contenedor.style.backgroundColor = typeColor;

    //Agregar boton Pokemon
    let botonPokemon = document.createElement("button");
    botonPokemon.className = "botonPokemon btn btn-dark border";
    let botonEliminarPokemon = document.createElement("button");
    botonEliminarPokemon.className =
      "botonEliminarPokemon btn btn-dark  border mt-1";
    //Data id para saber que pokemon es
    botonPokemon.setAttribute("data-id", numeroPokedex);
    botonPokemon.innerHTML = ` 
     Yo te elijo para mi team!
     
     `;
    botonEliminarPokemon.setAttribute("data-id", numeroPokedex);
    botonEliminarPokemon.innerHTML = ` 
     Eliminar pokemon de mi team
     
     `;

    contenedor.append(botonPokemon);
    contenedor.append(botonEliminarPokemon);

    botonPokemon.addEventListener("click", agregarPokemonATeam);
    botonEliminarPokemon.addEventListener("click", eliminarPokemonDelTeam);

    contenedorCards.append(contenedor);
  });
}

imprimirPokedex(listaPokedex);

imprimirTeamPokemon();


function imprimirTeamPokemon() {
  //Operador ternario OR para ver si existe un teamPokemon guardado en localStorage
  let teamPokemon = JSON.parse(localStorage.getItem("teamPokemon")) || [];

  const contenedorStripeTeam = document.getElementById("contenedorSpriteTeam");
  contenedorStripeTeam.innerHTML = "";

  teamPokemon.forEach((pokemon) => {
    //Agregar cards
    let contenedorSprite = document.createElement("div");
    contenedorSprite.className = "col-3 m-1";
    contenedorSprite.innerHTML = ` 
       <div class="text-center d-flex align-items-center"><img src="${pokemon.sprite}" class="img-fluid text-center spriteGif"></div>
               
       `;
    //Agregar Pokemon

    contenedorStripeTeam.append(contenedorSprite);
  });
}

const filtrarPorTipo = () => {
  const busquedaPorTipo = listaPokedex.filter(
    (pokemon) => pokemon.tipo == seleccionTipo.value
  );
  const contenedorCards = document.getElementById("contenedorCards");

  busquedaPorTipo.forEach((pokemon) => {
    //Desestructuracion del objeto
    let { image, nombre, tipo, ataque, typeColor, numeroPokedex, generacion } =
      pokemon;
    let contenedor = document.createElement("div");

    contenedor.className = "col-5 bordesRedondeados m-1 fondoCard";
    contenedor.innerHTML = ` 
    
    
    <div class="col-12 text-center"><img src="${image}" class="img-fluid text-center img-limited"></div>
    <h3 class="colorTexto text-center">${nombre}</h3>
    <p class="colorTexto">Pokemon tipo ${tipo}, de ${generacion} generación, su ataque mas poderoso es ${ataque}</p>
    </div>
    
    
    
    `;
    //Cambiar color de la card
    contenedor.style.backgroundColor = typeColor;

    //Agregar boton Pokemon
    let botonPokemon = document.createElement("button");
    botonPokemon.className = "botonPokemon btn btn-dark border";
    let botonEliminarPokemon = document.createElement("button");
    botonEliminarPokemon.className =
      "botonEliminarPokemon btn btn-dark  border mt-1";
    //Data id para saber que pokemon es
    botonPokemon.setAttribute("data-id", numeroPokedex);
    botonPokemon.innerHTML = ` 
     Yo te elijo para mi team!
     
     `;
    botonEliminarPokemon.setAttribute("data-id", numeroPokedex);
    botonEliminarPokemon.innerHTML = ` 
     Eliminar pokemon de mi team
     
     `;

    contenedor.append(botonPokemon);
    contenedor.append(botonEliminarPokemon);

    botonPokemon.addEventListener("click", agregarPokemonATeam);
    botonEliminarPokemon.addEventListener("click", eliminarPokemonDelTeam);

    contenedorCards.append(contenedor);
  });
};

//funcion para la lista dropdown por tipo

function respuestaClick() {
  //Leer documento
  // console.log(document)
  //Leer contenedor de Cards y dejarlo en blanco
  const contenedorCards = document.getElementById("contenedorCards");
  contenedorCards.innerHTML = "";

  //Operador ternario AND puesto que es un if simple
  //Si el usuario escoge todos los tipos imprimir toda la pokedex
  if (seleccionTipo.value === "todos") {
    traerDatos();
  }
  else{
    filtrarPorTipo();
  }
  
}

//Evento para filtrar los tipos en la lista desplegable

let seleccionTipo = document.getElementById("pokemons");
// console.log(seleccionTipo)
seleccionTipo.addEventListener("change", respuestaClick);

//Funcion para agregar Pokemon al team

const agregarPokemonATeam = (e) => {
  //Tomar informacion del evento 'e'
  e.preventDefault();
  //Tomar el target para que saber que pokemon el usuario le dio click
  const pokemonNumeroPokedexSeleccionado = e.target.getAttribute("data-id");

  const busquedaPorNoPokedex = listaPokedex.find(
    (pokemon) => pokemon.numeroPokedex == pokemonNumeroPokedexSeleccionado
  );

  teamPokemon = JSON.parse(localStorage.getItem("teamPokemon")) || [];

  //Operador ternario
  if (teamPokemon.length < 6) {
    teamPokemon.push(busquedaPorNoPokedex);
    localStorage.setItem("teamPokemon", JSON.stringify(teamPokemon));
    imprimirTeamPokemon();
    

    
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
      onClick: function () {}, // Callback after click
    }).showToast();
  } else {
    //Si son mas de 6 pokemon aparece un mensaje diciendo solo se permiten 6 pokemon por equipo y un pikachu diciendo que no
    Swal.fire({
      title: "Solo se permiten 6 pokemon por equipo",
      width: 500,
      padding: "3em",
      color: "#1B4F72",

      background: "#fff ",
      backdrop: `
          rgba(0,0,125,0.4)
          url("https://c.tenor.com/-LgdRnkYRN4AAAAC/no-pokemon.gif")
          right bottom
          no-repeat
        `,
    });

    


  }

  revisaSiHayPokemonEnEquipo();
};

//Funcion para eliminar Pokemon del team

const eliminarPokemonDelTeam = (e) => {
  //Tomar info del evento 'e'
  e.preventDefault();

  teamPokemon = JSON.parse(localStorage.getItem("teamPokemon")) || [];
  //Tomar info del target data id que es el numero de pokedex para posteriormente con ese NoPokedex saber que pokemon clickeo el usuario
  const pokemonAEliminar = e.target.getAttribute("data-id");

  //Verificar existencia en pokedex
  const existe = teamPokemon.some(
    (pokemon) => pokemon.numeroPokedex === pokemonAEliminar
  );

  if (existe == true) {
    teamPokemon = teamPokemon.filter(
      (pokemon) => pokemon.numeroPokedex != pokemonAEliminar
    );

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
      onClick: function () {}, // Callback after click
    }).showToast();
  } else {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Este pokemon no esta en tu equipo",
    });
  }
  let teamEnJSON = JSON.stringify(teamPokemon);
  localStorage.setItem("teamPokemon", teamEnJSON);

  imprimirTeamPokemon();
  revisaSiHayPokemonEnEquipo();
};

//Input busqueda pokemon

const BusquedaPorInput = () => {
  const inputBusquedaPokemon = document.getElementById("inputBusquedaPokemon");

  const contenedorCards = document.getElementById("contenedorCards");
  contenedorCards.innerHTML = "";
  let pokemonABuscar = inputBusquedaPokemon.value;

  //Para verificar si incluye pokemonABuscar, lo que escribe el usuario

  const busquedaPorNombre = listaPokedex.filter((pokemon) =>
    pokemon.nombre.toLowerCase().includes(pokemonABuscar.toLowerCase())
  );

  busquedaPorNombre.forEach((pokemon) => {
    //Desestructuracion del objeto
    let { image, nombre, tipo, ataque, typeColor, numeroPokedex, generacion } =
      pokemon;

    let contenedor = document.createElement("div");

    contenedor.className = "col-md-4 bordesRedondeados m-1 fondoCard";
    contenedor.innerHTML = ` 
    
    
    <div class="text-center"><img src="${image}" class="img-fluid text-center"></div>
    <h3 class="colorTexto text-center">${nombre}</h3>
    <p class="colorTexto">Pokemon tipo ${tipo}, de ${generacion} generación, su ataque mas poderoso es ${ataque}</p>
    </div>
    
    
    
    `;
    //Cambiar color de la card
    contenedor.style.backgroundColor = typeColor;

    //Agregar boton Pokemon
    let botonPokemon = document.createElement("button");
    botonPokemon.className = "botonPokemon btn btn-dark border";
    let botonEliminarPokemon = document.createElement("button");
    botonEliminarPokemon.className =
      "botonEliminarPokemon btn btn-dark  border mt-1";
    //Data id para saber que pokemon es
    botonPokemon.setAttribute("data-id", numeroPokedex);
    botonPokemon.innerHTML = ` 
     Yo te elijo para mi team!
     
     `;
    botonEliminarPokemon.setAttribute("data-id", numeroPokedex);
    botonEliminarPokemon.innerHTML = ` 
     Eliminar pokemon de mi team
     
     `;

    contenedor.append(botonPokemon);
    contenedor.append(botonEliminarPokemon);

    botonPokemon.addEventListener("click", agregarPokemonATeam);
    botonEliminarPokemon.addEventListener("click", eliminarPokemonDelTeam);

    contenedorCards.append(contenedor);
  });
};

const limpiarEquipo = async (e) => {
    //Tomar info del evento 'e'
    e.preventDefault();
  
    const cambioAprobado = await sweetConfirmacionEliminar("¿Está seguro que desea eliminar todos los pokemon de tu equipo?");

    teamPokemon = JSON.parse(localStorage.getItem("teamPokemon")) || [];

    if(cambioAprobado){
        if (teamPokemon.length > 0) {

            teamPokemon = [];
      
              
            Toastify({
              text: "Eliminaste todos los pokemon de tu equipo.",
              duration: 1500,
              newWindow: true,
              close: true,
              gravity: "top", // `top` or `bottom`
              position: "left", // `left`, `center` or `right`
              stopOnFocus: true, // Prevents dismissing of toast on hover
              style: {
                background: "linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)",
              },
              onClick: function () {}, // Callback after click
            }).showToast();
          } else {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "No tienes ningun pokemon en tu equipo.",
            });
          }
    }

    
    
    let teamEnJSON = JSON.stringify(teamPokemon);
    localStorage.setItem("teamPokemon", teamEnJSON);
  
    imprimirTeamPokemon();

    revisaSiHayPokemonEnEquipo();
  };
 
  const btnLimpiaEquipo = document.getElementById("btnLimpiarTeam");
  btnLimpiaEquipo.addEventListener("click", limpiarEquipo);


  const revisaSiHayPokemonEnEquipo = () => {
     
    teamPokemon = JSON.parse(localStorage.getItem("teamPokemon")) || [];
    const btnLimpiaEquipo = document.getElementById("btnLimpiarTeam");
    if (teamPokemon.length > 0) {
        btnLimpiaEquipo.style.display = 'block';
        btnLimpiaEquipo.parentElement.style.display = 'block';
    } else {
        btnLimpiaEquipo.style.display = 'none';
        btnLimpiaEquipo.parentElement.style.display = 'none';
    }
   
  };
 

  revisaSiHayPokemonEnEquipo();