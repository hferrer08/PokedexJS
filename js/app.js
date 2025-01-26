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

  return result.isConfirmed; // Retorna si el usuario confirmó (hizo clic en "Sí")
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

function obtenerGradienteDeFondo(tipo) {
  const gradientesPorTipo = {
    fuego: "linear-gradient(135deg, #FF7F50, #FF4500)", // Coral a rojo fuego
    agua: "linear-gradient(135deg, #4682B4, #00BFFF)", // Azul acero a azul claro
    planta: "linear-gradient(135deg, #3CB371, #2E8B57)", // Verde medio a verde selva
    bicho: "linear-gradient(135deg, #9ACD32, #6B8E23)", // Verde amarillento a verde oliva
    volador: "linear-gradient(135deg, #87CEEB, #4682B4)", // Azul cielo a azul acero
    normal: "linear-gradient(135deg, #D3D3D3, #A9A9A9)", // Gris claro a gris oscuro
    veneno: "linear-gradient(135deg, #8A2BE2, #4B0082)", // Azul violeta a índigo
    eléctrico: "linear-gradient(135deg, #FFD700, #FFA500)", // Dorado a naranja
    roca: "linear-gradient(135deg, #B8860B, #8B4513)", // Marrón dorado a marrón oscuro
    tierra: "linear-gradient(135deg, #DEB887, #D2691E)", // Madera a marrón rojizo
    hada: "linear-gradient(135deg, #FFC0CB, #FF69B4)", // Rosa claro a rosa intenso
    psíquico: "linear-gradient(135deg, #EE82EE, #BA55D3)", // Violeta a púrpura medio
    hielo: "linear-gradient(135deg, #AFEEEE, #4682B4)", // Azul pálido a azul acero
    dragón: "linear-gradient(135deg, #8B0000, #FF4500)", // Rojo oscuro a rojo fuego
    oscuro: "linear-gradient(135deg, #696969, #000000)", // Gris oscuro a negro
    acero: "linear-gradient(135deg, #B0C4DE, #708090)", // Azul acero a gris pizarra
    fantasma: "linear-gradient(135deg, #663399, #4B0082)", // Púrpura oscuro a índigo
    lucha: "linear-gradient(135deg, #FF6347, #FF0000)", // Rojo tomate a rojo intenso
  };

  return (
    gradientesPorTipo[tipo.toLowerCase()] ||
    "linear-gradient(135deg, #A9A9A9, #696969)"
  ); // Gris oscuro por defecto
}

function primeraLetraMayuscula(cadena) {
  if (!cadena) return ''; // Verifica si la cadena está vacía
  return cadena.charAt(0).toUpperCase() + cadena.slice(1).toLowerCase();
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
    //let contenedor = document.createElement("div");
    //contenedor.className = "col-5 bordesRedondeados m-1 ";

   // Crear el contenedor principal de la card
  const card = document.createElement('div');
  card.className='custom-card col-lg-5 col-md-5 col-sm-12 m-1 shadow';

  // Crear el contenedor para la imagen de la card
  const cardImage = document.createElement('div');
  cardImage.classList.add('custom-card-image');

  // Crear la imagen
  const img = document.createElement('img');
  img.src = image;
  img.alt = primeraLetraMayuscula(nombre);
  img.className = "img-limited"
  cardImage.appendChild(img);

  // Crear el título de la card
  const cardTitle = document.createElement('span');
  cardTitle.classList.add('custom-card-title');
  cardTitle.textContent = primeraLetraMayuscula(nombre);
  cardImage.appendChild(cardTitle);

  // Crear el contenido de la card
  const cardContent = document.createElement('div');
  cardContent.classList.add('custom-card-content');
  const contentText = document.createElement('p');
  contentText.textContent = `Pokemon tipo ${tipo}, de ${generacion} generación, su ataque más poderoso es ${ataque}`;;
  cardContent.appendChild(contentText);

  // Crear la sección de acción de la card (con el enlace)
  const cardAction = document.createElement('div');
  cardAction.className ='custom-card-action d-flex justify-content-around'
  
    //Agregar boton Pokemon
 let botonPokemon = document.createElement("button");
 botonPokemon.className = "botonPokemon btn btn-dark border  m-1 btn-sm";
 let botonEliminarPokemon = document.createElement("button");
 botonEliminarPokemon.className =
   "botonEliminarPokemon btn btn-dark border m-1 btn-sm";
 //Data id para saber que pokemon es
 botonPokemon.setAttribute("data-id", numeroPokedex);
 botonPokemon.innerHTML = ` 
  Yo te elijo para mi team!
  
  `;
 botonEliminarPokemon.setAttribute("data-id", numeroPokedex);
 botonEliminarPokemon.innerHTML = ` 
  Eliminar pokemon de mi team
  
  `;

  cardAction.appendChild(botonPokemon);
  cardAction.appendChild(botonEliminarPokemon);

  // Añadir los elementos creados a la card
  card.appendChild(cardImage);
  card.appendChild(cardContent);
  card.appendChild(cardAction);


    botonPokemon.addEventListener("click", agregarPokemonATeam);
    botonEliminarPokemon.addEventListener("click", eliminarPokemonDelTeam);



    card.style.background = obtenerGradienteDeFondo(tipo);
    contenedorCards.append(card);


    //contenedor.innerHTML =

    //   `
    //       <div class="col-12 text-center"><img src="${image}" class="img-fluid text-center img-limited"></div>
    //       <h3 class="colorTexto text-center">${nombre}</h3>
    //       <p class="colorTexto">Pokemon tipo ${tipo}, de ${generacion} generación, su ataque mas poderoso es ${ataque}</p>
    //       </div>

    //       `;
    //Cambiar color de la card
    // contenedor.style.backgroundColor = obtenerGradienteDeFondo(tipo);



    

    
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
    
      // Crear el contenedor principal de la card
  const card = document.createElement('div');
  card.className='custom-card col-5 m-1 shadow';

  // Crear el contenedor para la imagen de la card
  const cardImage = document.createElement('div');
  cardImage.classList.add('custom-card-image');

  // Crear la imagen
  const img = document.createElement('img');
  img.src = image;
  img.alt = primeraLetraMayuscula(nombre);
  img.className = "img-limited"
  cardImage.appendChild(img);

  // Crear el título de la card
  const cardTitle = document.createElement('span');
  cardTitle.classList.add('custom-card-title');
  cardTitle.textContent = primeraLetraMayuscula(nombre);
  cardImage.appendChild(cardTitle);

  // Crear el contenido de la card
  const cardContent = document.createElement('div');
  cardContent.classList.add('custom-card-content');
  const contentText = document.createElement('p');
  contentText.textContent = `Pokemon tipo ${tipo}, de ${generacion} generación, su ataque más poderoso es ${ataque}`;;
  cardContent.appendChild(contentText);

  // Crear la sección de acción de la card (con el enlace)
  const cardAction = document.createElement('div');
  cardAction.className ='custom-card-action d-flex justify-content-around'
  
    //Agregar boton Pokemon
 let botonPokemon = document.createElement("button");
 botonPokemon.className = "botonPokemon btn btn-dark border  m-1 btn-sm";
 let botonEliminarPokemon = document.createElement("button");
 botonEliminarPokemon.className =
   "botonEliminarPokemon btn btn-dark border m-1 btn-sm";
 //Data id para saber que pokemon es
 botonPokemon.setAttribute("data-id", numeroPokedex);
 botonPokemon.innerHTML = ` 
  Yo te elijo para mi team!
  
  `;
 botonEliminarPokemon.setAttribute("data-id", numeroPokedex);
 botonEliminarPokemon.innerHTML = ` 
  Eliminar pokemon de mi team
  
  `;

  cardAction.appendChild(botonPokemon);
  cardAction.appendChild(botonEliminarPokemon);

  // Añadir los elementos creados a la card
  card.appendChild(cardImage);
  card.appendChild(cardContent);
  card.appendChild(cardAction);


    botonPokemon.addEventListener("click", agregarPokemonATeam);
    botonEliminarPokemon.addEventListener("click", eliminarPokemonDelTeam);



    card.style.background = obtenerGradienteDeFondo(tipo);
    contenedorCards.append(card);


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
  } else {
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

  const cambioAprobado = await sweetConfirmacionEliminar(
    "¿Está seguro que desea eliminar todos los pokemon de tu equipo?"
  );

  teamPokemon = JSON.parse(localStorage.getItem("teamPokemon")) || [];

  if (cambioAprobado) {
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
    btnLimpiaEquipo.style.display = "block";
    btnLimpiaEquipo.parentElement.style.display = "block";
  } else {
    btnLimpiaEquipo.style.display = "none";
    btnLimpiaEquipo.parentElement.style.display = "none";
  }
};

revisaSiHayPokemonEnEquipo();

//Manejo modal

// Al cerrar modal - se corrige conflicto por focus de un elemento oculto

// Agregar la funcionalidad de cierre manual al botón
document.getElementById('cerrarModal').addEventListener('click', function () {
  // Obtener la instancia del modal
  var modalElement = document.getElementById('exampleModal');
  var modal = bootstrap.Modal.getInstance(modalElement); // Obtener la instancia de Bootstrap Modal
  
  // Cerrar el modal
  modal.hide();

  // Desactivar temporalmente la interacción con el modal
  modalElement.setAttribute('inert', 'true');

  // Mover el foco al body o cualquier otro elemento para evitar el conflicto
  document.body.focus();

  // Esperar a que el modal se oculte completamente antes de quitar el atributo inert
  setTimeout(function() {
      modalElement.removeAttribute('inert');
  }, 300);  // Ajusta el tiempo de espera si es necesario
});


document.getElementById('btnEquis').addEventListener('click', function () {
  // Obtener la instancia del modal
  var modalElement = document.getElementById('exampleModal');
  var modal = bootstrap.Modal.getInstance(modalElement); // Obtener la instancia de Bootstrap Modal
  
 
  // Desactivar temporalmente la interacción con el modal
  modalElement.setAttribute('inert', 'true');

  // Mover el foco al body o cualquier otro elemento para evitar el conflicto
  document.body.focus();

  // Esperar a que el modal se oculte completamente antes de quitar el atributo inert
  setTimeout(function() {
      modalElement.removeAttribute('inert');
  }, 300);  // Ajusta el tiempo de espera si es necesario
});



