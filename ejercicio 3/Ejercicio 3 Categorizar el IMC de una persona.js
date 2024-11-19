export function categoriaIMC(IMC) {
    let resultado = IMC >= 30 ? "Obesidad" :
             IMC >= 25 && IMC <= 29.9 ? "Sobrepeso" :
             IMC >= 18.5 && IMC <= 24.9 ? "Normal" :
             IMC < 18.5 ? "Bajo peso" : "";
    return resultado;
  }
  