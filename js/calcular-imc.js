var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for(var i = 0; i < pacientes.length ; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    //var imc = peso / (altura * altura); 
    var tdIMC = paciente.querySelector(".info-imc"); 
    
    //tdIMC.textContent = imc; 
    pesoEsValido = validarPeso(peso);
    alturaEsValida = validarAltura(altura);

    // var paciente = document.querySelector("#primer-paciente"); 

    // var tdPeso = paciente.querySelector(".info-peso"); 
    // var tdAltura = paciente.querySelector(".info-altura");
    // var tdIMC = paciente.querySelector(".info-imc"); 

    // var altura = tdAltura.textContent;
    // var peso = tdPeso.textContent;


    if(!pesoEsValido){
        console.log("Peso incorrecto");
        tdIMC.textContent = "Peso incorrecto";
        pesoEsValido = false;
        paciente.classList.add("paciente-incorrecto");
    }

    if(!alturaEsValida){
        console.log("Peso incorrecto");
        tdIMC.textContent = "Altura incorrecta";
        alturaEsValida = false;
        paciente.classList.add("paciente-incorrecto");
    }

    if(pesoEsValido && alturaEsValida){
        tdIMC.textContent = calcularIMC(peso,altura);
    }    

}

function calcularIMC(peso,altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2); 
}

function validarPeso(peso){
    if(peso>=0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validarAltura(altura){
    if(altura >= 0 && altura < 3.00){
        return true;
    }else{
        return false;
    }
}