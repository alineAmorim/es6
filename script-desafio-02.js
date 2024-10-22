let verificador = (numero) => {
    if(numero < 0) console.log(numero + ': número negativo');
    else if (numero > 0) console.log(numero + ': número positivo');
    else console.log('número igual a 0')
}

verificador(0);

function verificarElemento(a, b){
    if(a.includes(b)) console.log(b + ' está no array');
    else console.log(b + ' não está no array')
}

let arrayA = [1, 2, 6, 4, 8, 9, 12, 15, 17, 25, 53, 36, 87];

verificarElemento(arrayA, 53)

const products = [
    { name: 'Maça', price: 2.5 },
    { name: 'Coca cola', price: 8 },
    { name: 'Guarana', price: 5 },
    { name: 'Chocolate', price: 20 }
  ];

  products.map((item) => {
    if(item.price === 20) console.log(item.name + ' custa R$20,00');
    if(item.price < 8 ) console.log('o produto ' + item.name + ' custa menos que R$ 8,00');

  })