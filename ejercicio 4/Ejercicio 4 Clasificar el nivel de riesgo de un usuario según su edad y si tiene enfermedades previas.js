export function nivelRiesgo(edad, enfermedadesPrevias) {
    return edad >= 40 && edad <= 60 && enfermedadesPrevias ? "Riesgo moderado" :
           edad > 60 || enfermedadesPrevias ? "Alto riesgo" :
           "Bajo riesgo";
}