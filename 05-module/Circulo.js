import numeroAleatorio from "./numeroAleatorio.js";

function area(raio) {
    return Math.PI * raio * raio;
}
function circunferencia(raio) {
    return 2 * raio * Math.PI;
}
function aleatorio(raio) {
    return numeroAleatorio();
}
// Pbjeto das funções acima
const Circulo = {
    area,
    circunferencia,
    aleatorio
};
// Objeto exportado é o objeto
export default Circulo;