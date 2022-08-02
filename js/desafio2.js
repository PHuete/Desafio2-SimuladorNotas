//Calculadora nota final

alert("Calcula tu nota final de curso con esta calculadora")

let nombre = ingresarNombre()
let repetir = true

while (repetir) {
    let materia = ingresarMateria()
    let media = calcularMedia()
    alert(nombre + ", tu media en " + materia + " es: " + media + "/10")
    evaluacion(media)
    repetir = confirm("¿Introducir datos para otra asignatura?")
    if (repetir == false) {
        alert("Gracias por utilizar la calculadora. Un saludo.")
    }
}

function ingresarNombre() {
    let nombre = prompt("Introduce tu usuario del campus")
    while (nombre === "" || nombre === null) {
        nombre = prompt("Introduce un usuario del campus valido")
    }
    let password = prompt("Introduce tu contraseña del campus")
    while (password === "" || password === null) {
        password = prompt("Introduce una contraseña valida")
    }
    alert("Bienvenido: " + nombre)

    return nombre
}

function ingresarMateria() {
    const asignaturas = ["matematicas", "lengua", "ingles", "fisica", "naturales"] 
    let materia = prompt("Introduce la materia a calcular: Matematicas, Lengua, Ingles, Fisica o Naturales")
    let materiaMinusculas = minusculas(materia)
    while (!asignaturas.includes(materia)) { // HACIENDO WHILE (materia === "matematicas" || materia === "lengua"...) sin array no me cogia los datos. La solucion que encontre era haciendo array y comprobando si lo introducido en prompt estaba en array
        materia = prompt("Introduce una materia valida: Matematicas, Lengua, Ingles, Fisica o Naturales")
        materiaMinusculas = minusculas(materia)
    }

    return primeraMayuscula(materia)
}

function calcularMedia() {
    let nota1 = parseFloat(prompt("Introduce la nota del primer parcial (20% del total)"))
    while (nota1 < 0 || nota1 > 10 || nota1 == "" || nota1 == null || isNaN(nota1)) {
        nota1 = parseFloat(prompt("Introduce una nota valida del primer parcial"))
    }
    let nota2 = parseFloat(prompt("Introduce la nota del segundo parcial (20% del total)"))
    while (nota2 < 0 || nota2 > 10 || nota2 == "" || nota2 == null || isNaN(nota2)) {
        nota2 = parseFloat(prompt("Introduce una nota valida del segundo parcial"))
    }
    let nota3 = parseFloat(prompt("Introduce la nota del examen final (60% del total)"))
    while (nota3 < 0 || nota3 > 10 || nota3 == "" || nota3 == null || isNaN(nota3)) {
        nota3 = parseFloat(prompt("Introduce una nota valida del examen final"))
    }
    let media = (nota1 * 0.2) + (nota2 * 0.2) + (nota3 * 0.6)

    return media.toFixed(1)
}

function evaluacion(media) {
    if (media >= 0 && media <= 1.9) {
        alert("O te encierras este verano a estudiar o el año que viene nos vemos.")
    }
    if (media >= 2 && media <= 4.9) {
        alert("¡Un repaso mas y en septiembre lo sacas!.")
    }
    if (media >= 5 && media <= 5.9) {
        alert("Aprobado por los pelos... De nada")
    }
    if (media >= 6 && media <= 7.9) {
        alert("¡Buen trabajo!")
    }
    if (media >= 8 && media <= 10) {
        alert("¡CHAPO! Disfruta de las vacaciones, te las mereces.")
    }
}// LO HABIA REALIZADO CON UN SWITCH PERO AL SALIR LA NOTA CON DECIMALES ERAN DEMASIADOS LOS CASOS QUE HABIA QUE CREAR EN EL RANGO 0-10

function primeraMayuscula(str) {
    const mayus = str.charAt(0).toUpperCase() + str.slice(1)

    return mayus
}//FUNCION PARA PASAR LA STRING DE LO INTRODUCIDO POR EL PROMPT A LA PRIMERA LETRA MAYUSCULA Y EL RESTO MINUSCULAS

function minusculas(str) {
    if (str != null) {
        str = str.toLowerCase()
    }
    return str

}//FUNCION PARA PASAR LA STRING DE LO INTRODUCIDO POR PROMT A MINUSCULA SI LO INTRODUCIDO ES DISTINTO DE NULO. 
//CUANDO AÑADIA EL .TOLOWERCASE AL PROMPT DIRECTAMENTE, AL CANCELAR EL CUADRO DE TEXTO SE SALIA AL HTML EN VEZ DE SALTAR AL SIGUIENTE PROMPT

