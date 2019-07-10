// DATOS
const contrasena = document.getElementById('password');
const usuario = document.getElementById('usuario');
// BOTONES
const empezar = document.getElementById('ingresar');
const campeones = document.getElementById('campeones');
const begin = document.getElementById('inicio');
const descripcion = document.getElementById('name')

// VISTAS
const vistaLogin = document.getElementById('pantalla-login');
const vistaBienvenida = document.getElementById('pantalla-bienvenida');
const vistaCampeones = document.getElementById('pantalla-campeones');

// CONTROLANDO HEADER
const cabecera = document.getElementById('cabecera');
const barraNavegacion = document.getElementById('barra');
// const vistaCampeones = document.getElementById('pantallaCampeones')
// Contador de intentos en login
let password = 0;
let arrayLOL = Object.values(LOL.data);

// Funciones
empezar.addEventListener('click', () => {
    const datos = contrasena.value;
    const datosUsuario = usuario.value;
    if (password < 2) {
        if (datos === '' && datosUsuario === '') {
            vistaLogin.classList.add('hide');
            vistaBienvenida.classList.remove('hide');
            cabecera.classList.remove('hide');
            barraNavegacion.classList.remove('hide');
        } else {
            document.getElementById('mensajeError').innerHTML = '*Datos Incorrectos*';
            password++;
        }
    }
});

begin.addEventListener('click', () => {
    vistaCampeones.classList.add('hide');
    vistaBienvenida.classList.remove('hide');
});
campeones.addEventListener('click', () => {
    let array = '';
    array = mostrarCampeones(arrayLOL);
    document.getElementById('name').innerHTML = array;
    vistaBienvenida.classList.add('hide');
    vistaCampeones.classList.remove('hide');
});
tagk.addEventListener('change', () => {
    const agarre = document.getElementById('tagk').value;
    let vacio = '';
    let array1 = [];
    array1 = mostrarAsesinos(arrayLOL, agarre);
    vacio = mostrarCampeones(array1);
    document.getElementById('name').innerHTML = vacio;
});

const az = document.getElementById('az');
az.addEventListener('change', () => {
    let array2 = sortAtaque(arrayLOL, az.value);
    document.getElementById('name').innerHTML = mostrarCampeones(array2);
    // console.log()
});
// orden de ataque
const orden = document.getElementById('orden-alfabetico');
orden.addEventListener('change', () => {
    let array3 = sortAlfa(arrayLOL, orden.value);
    document.getElementById('name').innerHTML = mostrarCampeones(array3);
});


descripcion.addEventListener('click', () => {
    let vacio = '';
    let array1 = [];
    document.getElementById('mi-modal').innerHTML = mostrarInfo(array);
});
tagk.addEventListener('change', () => {
    const agarre = document.getElementById('tagk').value;
    let vacio = '';
    let array1 = [];
    array1 = mostrarInfo(arrayLOL, agarre);
    vacio = mostrarCampeones(array1);
    document.getElementById('name').innerHTML = vacio;
});
// para ver las obtener las imagenes
descripcion.addEventListener('click', () => {
    const lolcito = event.target.parentElement;
    if (event.target.parentElement.getAttribute('name') === 'jalar'){
        //mostramnos modal
        document.getElementById('mi-modal').classList.remove('hide');
        //insertamos caracteristicas en el modal
        document.getElementById('info-de-lol').innerHTML = mostrarInfo;
}});
const cerrar = document.getElementById('close');
cerrar.addEventListener('click',()=>{
    document.getElementById('mi-modal').classList.add('hide');
});
