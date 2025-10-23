// //let materia = "javascript"
// //let comision = 80770
// //let flex = true

// //console.log("Hola, amigo")
// //console.log(materia)
// //console.log(comision)
// //console.log(flex)

// //let materia = prompt("Ingrese la materia")
// //let comision = prompt("Ingrese su comision")

// //console.log("Materia: " + materia + " Comision N°" + comision)
// //alert("Materia: " + materia + " Comision N°" + comision)

// //let numeroA = parseInt(prompt("Ingresa primer número"))
// //let numeroB = parseInt(prompt("Ingresa segundo número"))
// //let resultado = numeroA + numeroB
// //console.log(resultado)

// //let validar = true

// //if(validar){
// //    console.log("Variable verdadera")
// //}

// let fruta = "frutilla"
// let mes = "octubre"
// let edad = 25

// //if(fruta == "frutilla"){
// //    console.log("Me parece que...")
// //} else if(fruta == "mandarina") {
// //    console.log("Puede ser otra cosa...")
// //} else {
// //    console.log("No hay nada acá")
// //}

// // // OR ||
// // if(fruta == "sandia" || fruta == "melon") {
// //     console.log("Fruta del verano")
// // }

// // AND &&
// // if(fruta == "melon" && (mes == "diciembre" || mes == "enero" || mes == "febrero" || mes == "marzo")) {
// //     console.log("Confirmado, es verano")
// // }

// // >< mayor/menor
// if(edad > 18) {
//     console.log("Puedes ingresar")
// } else {
//     console.log("No puedes ingresar")
// }

// FOR
// Es un siclo definido - Se repite hasta X punto por X repeticiones

// for(let i=1; i<=10; i++) {
//     // desde; hasta; siclos/actualizaciones ++ hace que vaya de uno en uno; CODIGO A EJECUTAR ES EL DE ABAJO
//     console.log(i)
// }

// let numero = parseInt(prompt("Ingrese numero"))

// for(let i=1; i<=15; i++) {
//     let resultado = i*numero
//     console.log(i+"x"+numero+"="+resultado)
// }

// console.log("Cuenta regresiva")
// for(let i=10; i>=1; i--) {
//     console.log(i)
//     if(i==2){
//         console.log("No despegue")
//         break
//     }
//     if(i==1) {
//     console.log("Despegue")
// }
// }

// // WHILE
// let continuar = true;
// while (continuar) {
//   let numero = parseInt(prompt("Ingrese numero"));

//   for (let i = 1; i <= 15; i++) {
//     let resultado = i * numero;
//     console.log(i + "x" + numero + "=" + resultado);
//   }

//   let confirmacion = prompt("Quieres seguir? si/no").toLowerCase()
//   if(confirmacion == "no") {
//     continuar = false
//   }
// }

// SWITCH-CASE

let continuar = true
while(continuar) {
    let menu = parseInt(prompt("Ingrese 1 para ver cuenta, 2 para sacar playa, 3 para deposito, otro num para salir"))

switch(menu) {
    case 1:
        console.log("Saldo actual: 500")
        break
    case 2:
        console.log("Límite de extracción")
        break
    case 3:
        console.log("Limite deposito: 800")
        break
    default:
        console.log("Retire su tarjeta")
}

let confirmacion = prompt("Quieres seguir? si/no").toLowerCase()
if(confirmacion == "no") {
continuar = false
}

}

// function sumar () {
//     let numeroA = 15
//     let numeroB = 30
//     let resultado = numeroA + numeroB

//     return resultado
// }

// console.log(sumar())

// const restar = function () {
//     let numeroA = 15
//     let numeroB = 30
//     let resultado = numeroA - numeroB

//     return resultado

// }

// // console.log(restar())
// let primerNumero = parseInt(prompt("Primer numero"))
// let segundoNumero = parseInt(prompt("Segundo numero"))

// function sumar(numeroA, numeroB) {
//     let resultado = numeroA + numeroB
//     console.log(resultado)
// }

// sumar(primerNumero, segundoNumero)

// Funciones

// let numeroA = parseInt(prompt("Numero uno"))
// let numeroB = parseInt(prompt("Numero dos"))

// function sumar() {    
//     let resultado = numeroA + numeroB
//     alert(numeroA + " + " + numeroB + " = " + resultado)

// }

// console.log(sumar())
