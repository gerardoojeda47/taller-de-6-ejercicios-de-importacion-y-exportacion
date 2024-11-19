export function calcularDescuento(precio) {
    // Calcular el porcentaje de descuento
    let res = (precio > 1000) ? 0.20 :
              (precio >= 500) ? 0.10 : 0;
    
    // Calcular el precio final
    let precioFinal = precio - (precio * res);

    return precioFinal;
}
