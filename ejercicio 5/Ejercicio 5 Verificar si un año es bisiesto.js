export function esBisiesto(año) {
    let result = ((año % 400 === 0 || año % 100 !== 0) && año % 4 === 0) ? "es bisiesto" : "no es bisiesto";
    return result;
}