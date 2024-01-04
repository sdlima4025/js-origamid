/** na desestruturação é essencial passarmos o nome real das propiedades do Objeto  
* podemos desestruturar direto na função 
*/
function handleMouseMove({clientX, clientY, }) {
document.documentElement.addEventListener("mousemove", handleMouseMove);
    console.log(clientX, clientY);

    // const clientX = event.clientX;
    // const clientY = event.clientY;
    console.log(event);
}

const frutas = ["banana", "Uva"];

const[fruta1, fruta2]= frutas;

console.log(fruta1,fruta2);
console.log(frutas);

document.documentElement.addEventListener("mousemove", handleMouseMove);