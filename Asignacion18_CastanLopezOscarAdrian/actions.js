console.log("hola desde el archivo de javascript");

function saluda() {
    alert("Hola desde el botón");
}

// IMC 1.85 altura y 75 kg
function calcularPago(salario, horas) {
    let pago = document.getElementById("salario");
    let tiempo = document.getElementById("horas");
    
    let salarioNormal=pago*tiempo;
    if(horas>40){
        let tiempoExtra  = horas-40;
        let salarioExtra= pago*11.5
        let salarioFinal= pago*tiempo;
        console.log("Horas normales trabajadas: " + tiempo + " Pago en horas normales: " + salarioNormal 
            + " Horas extra: " + tiempoExtra + " Pago en horas extra: " + salarioExtra + "Total a pagar:" +salarioFinal)
    } else{
        console.log("Horas normales trabajadas: " + tiempo + " Pago en horas normales: " + pago 
           + "Total a pagar:" +salarioNormal)
    }


}






