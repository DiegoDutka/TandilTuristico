"use strict";

let btnForm = document.querySelector("#btnForm");
btnForm.addEventListener("click", enviarConsulta);
let nombre = document.querySelector("#nombre");
let apellido =document.querySelector("#apellido");
let mail =  document.querySelector("#mail");
let consulta =document.querySelector("#consulta");
let confirmacion =  document.querySelector("#confirmacion");

function enviarConsulta(e) {
    e.preventDefault();
    if(nombre.value!="" && apellido.value!="" && mail.value!="" && consulta.value!=""){
        nombre.value="";
        apellido.value="";
        mail.value="";
        consulta .value="";
        confirmacion.innerHTML="Tu consulta ha sido enviada";
    }else{
        confirmacion.innerHTML="Debes completar todos los campos";
    }
    
        
}