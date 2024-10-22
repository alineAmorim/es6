let arraySorteio = [];


function sortear(qtdNumeros){
    if(qtdNumeros > 5 && qtdNumeros < 10){
        do {
            let auxNum = Math.floor(Math.random() * 60) +1;
            if(!arraySorteio.includes(auxNum)) arraySorteio.push(auxNum)
        } while (arraySorteio.length < qtdNumeros)
    } else console.log('Informe um número entre 6 e 9')
    
    console.log(arraySorteio);
}


// sortear(9)

let aux = +prompt("Digite um valor entre 6 e 9");
sortear(aux)