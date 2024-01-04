/** spread exemplo: ...clientes*/
// function showList(empresa, ...clientes) {
//     console.log(empresa);
//     console.log(clientes);
// }

// showList("Origamid", "Sérgio","Silvio", 10)

// const numeros = [1,2,3,29,35,67,45];

// console.log(Math.max(...numeros));

/**rest 
 * items é uma NodeList,
 * [...items é um array]


const items = document.querySelectorAll("li");

    [...items].map(item => {
        console.log(item);
    // });

    console.log(items); 

    const carro = {cor: "Azul", portas: 4, ano: 2024};

    const cloneCarro2 = carro;
    // clone superficial
    const cloneCarro = {...carro, turbo: true};



    // console.log(cloneCarro2);*/

    // class Transporte {
    //     constructor() {
    //         this.terrestre = true;
    //     }
    //   andar() {
    //     console.log("andou");
    //   }
    // }

    // class Carro extends Transporte {
    //     constructor(cor, portas) {
    //         super();
    //         this.cor = cor;
    //         this.portas = portas
    //     }
    // }

    // const carro = new Carro("vermelho", 4);

    // const cloneCarro = {...carro};

    // console.log(carro);
    // console.log(cloneCarro);