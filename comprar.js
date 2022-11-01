
//variables

const nombre = document.getElementById ("nombre");
const pmensajeNombre = document.getElementById("mensajeNombre");

const botonResumen = document.getElementById("resumen");
const email = document.getElementById("email");

const expRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
const pmensajeEmail = document.getElementById ("mensajeEmail")
const apellido = document.getElementById ("apellido");
const pmensajeApellido = document.getElementById("mensajeApellido");

const cantidad = document.getElementById ("cantidad");
const pmensajeCantidad = document.getElementById ("mensajeCantidad");

const categoria = document.getElementById("categoriaSelect");
const pmensajeCategoria = document.getElementById("mensajeCategoria");


//funciones

function validarNombre(){
    if( nombre.value.length < 3 ) {
       pmensajeNombre.innerHTML = "Ingrese un nombre valido";

    }
    else {
        pmensajeNombre.innerHTML = "Nombre correcto";
    }
}


function validarApellido(){
    if(apellido.value.length < 3 ) {
       pmensajeApellido.innerHTML = "Ingrese un apellido";

    }
    else {
        pmensajeApellido.innerHTML = "Apellido correcto";
    }
}


function validarEmail(){
    if(!expRegular.test(email.value)){
        pmensajeEmail.innerHTML = "El email no es valido";
    } else {
        pmensajeEmail.innerHTML = "email correcto";
    }

}

function validarCantidad(){
    if(cantidad.value<=0) {
        pmensajeCantidad.innerHTML = "Ingrese una cantidad";
    } else  {
        pmensajeCantidad.innerHTML = "Cantidad correcta"; 
    }
}

function validarCategoria(){
   if(categoria.value === ""){
    pmensajeCategoria.innerHTML = "Elija una Categoria";
   }else{
    pmensajeCategoria.innerHTML = "Categoria Seleccionada";
   }
}


botonResumen.addEventListener("click", validarNombre);
botonResumen.addEventListener("click", validarEmail);
botonResumen.addEventListener("click", validarApellido);
botonResumen.addEventListener("click", validarCantidad);
botonResumen.addEventListener("click", validarCategoria);

//total a pagar

const valorTicket = 200;
let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

const totalPago = document.getElementById ("totalPago");



function total_a_pagar(){

    let totalValorTickets= (cantidad.value)*valorTicket;
  
    if(categoria.value==0){
        totalValorTickets=totalValorTickets;
    }
        if(categoria.value==1){
        totalValorTickets=totalValorTickets-(descuentoEstudiante/100 * totalValorTickets);
    }
        if(categoria.value==2){
        totalValorTickets=totalValorTickets-(descuentoTrainee/100 * totalValorTickets);
     }
        if(categoria.value==3){
       totalValorTickets=totalValorTickets-(descuentoJunior/100 * totalValorTickets);
    }

      
    totalPago.innerHTML=totalValorTickets;

    

}


 
botonResumen.addEventListener("click",total_a_pagar);
























