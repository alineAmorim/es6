let produtos = ['Computador', 'Telefone', 'Mouse', 'Teclado'];

console.log(produtos);

let posicao = produtos.indexOf('Mouse');

if(posicao > -1) produtos.splice(posicao, 1);

console.log(produtos)

let busca = produtos.find((item)=> {
    return item === 'Telefone'
})

if(busca) console.log(busca + ': encontrado');
else console.log(busca + ': Não encontrado')

produtos.splice(1, 1);

console.log(produtos)


console.log('======');

let numeros = [1,3,5,7,0,9];

numeros = numeros.sort();

console.log(numeros);

numeros.splice(0, 1);

console.log(numeros)

numeros = numeros.reverse();

console.log(numeros)

console.log('======')

let hoje = '18/10/2024';

let auxData = hoje.split('/');
let dia = auxData[0];
let mes = auxData[1];
let ano = auxData[2];

console.log('Dia: ' + dia);
console.log('Mês: ' + mes);
console.log('Ano: ' + ano);





