let nombre = "Fernando"
// tu>yo//mayor que
// tu<yo//menor que
// tu==yo//comparacion
// tu===yo//comparacion
// tu<=yo//menor o igual
// tu>=yo//mayor o igual
// >= es lo mismo que (> o ==)

if (nombre === "fernando") {
    console.log("es el profesor")
} else if (nombre === "") {
    console.log("el nombre esta vacio")
} else {
    console.log("es un ALUMNO")
}

// el switch obtiene el valor que se encuentra dentro de los parentesis(en este caso el valor de la variable), luego compara el valor del swtich con el del case 
// el case se le debe colocar 2 puntos (:) al ifnal de la  linea para que la cascada pueda ejecutar sus respectivas acciones
// es IMPORTANTE finalizar cada case con un "breack;" para que no se lean los demas case
// el switch se escribe parecido al if, es decir palabra reservada(switch), parentesis y dentro de los parentesis la variable que se va a comparar con los cases
// el "default" siempre se coloca al final para que funcione como freno de emergencias, digase que si la variable no coincide con los valores de la variable de switch entonces entonces se ejecutara la accion puesta en el default.
switch (nombre) {
    case "carlos":
        console.log("el nombre es carlos")
        breack;
    case "neuza":
        console.log("el nombre es neuza")
        breack;
    default:
        console.log(`el nombre es: ${nombre}`)
}