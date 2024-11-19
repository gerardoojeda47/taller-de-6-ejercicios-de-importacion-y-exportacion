export function esElegibleParaPrestamo (salario, puntaje){
    let result = (salario >= 30000 && puntaje >= 650) ? "Elegible" : "No elegible";
    return result;
}