/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */

    do {
        datosPersona.nombre = prompt("Ingresa tu nombre de usuario:")
    } while (datosPersona.nombre === null || datosPersona.nombre == "" || datosPersona.nombre.length < 3);


    do {
        fechaNacimiento = parseInt(prompt("Ingresa tu fecha de nacimiento:"))
        datosPersona.edad = 2023 - fechaNacimiento 
    } while (!fechaNacimiento || fechaNacimiento.isNaN);

    do {
        datosPersona.ciudad = prompt("Ingresa el nombre tu Ciudad ")
    } while (datosPersona.ciudad === null || datosPersona.ciudad == "");

    leInteresaJs = confirm("Te interesa Javascript?") 
    if (leInteresaJs) {
        datosPersona.interesPorJs = "Si" 
    }else {
        datosPersona.interesPorJs = "No"
    }
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

    const nombre= document.querySelector("#nombre");
    nombre.textContent = datosPersona.nombre

    const edad = document.querySelector("#edad");
    edad.textContent = datosPersona.edad

    const ciudad = document.querySelector("#ciudad");
    ciudad.textContent = datosPersona.ciudad

    const interesPorJs = document.querySelector("#javascript");
    interesPorJs.textContent = datosPersona.interesPorJs

}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
    const mostrarMaterias = document.querySelector("#fila");

    mostrarMaterias.innerHTML = ""
    console.log(mostrarMaterias)

    listado.forEach(lenguaje => {
        const div = document.createElement("div")
        div.setAttribute("class", "caja")

        const img = document.createElement("img")
        img.setAttribute("src", listado.imgUrl)
        img.setAttribute("alt", listado.lenguajes)


        const pBimestre = document.createElement("p")
        const pLenguajes = document.createElement("p")
    })
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 
  let oscuro = document.querySelector("#sitio")
    oscuro.classList.toggle("dark");

}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

