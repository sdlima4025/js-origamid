// const precos = [
//     "Crédito",
//     "R$ 200",
//     "R$ 400",
//     "Contas Pagar",
//     "R$ 300",
//     "R$ 400",
//     "Meus Dados"
// ];
// Retorna um Array novo, que contém os items em 
// que o retorno da função for verdadeiro.
// const precosFiltro = precos.filter(preco => preco.includes(R$))

const grupoA = 500;
const grupoB = 300;
// expreções tenárias ou com if();
// normalmente as expreções vem depoi do sinal de recebe(=);
const vencedor = grupoA > grupoB ? "Grupo A  Ganhou!" : "Grupo B Ganhou!";
const grupoAvenceu = grupoA < 50 && "Grupo A Venceu!";
console.log(grupoAvenceu);