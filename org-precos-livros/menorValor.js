const livros = require('./listasLivros')
function menorValor(arrProdutos, PosicaoInicial){
    let maisBarato = PosicaoInicial;
    
    for(let atual = PosicaoInicial; atual < arrProdutos.length; atual++) {
        if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
            maisBarato = atual;
        }
        return maisBarato;
    }

}

module.exports = menorValor




// console.log(`O livro mais caro custa R$ ${precoslivos[maisCaro].toFixed(2)}`); // ---> forma mais fácil
// console.log(`O livro mais barato custa R$ ${precoslivos[maisBarato].toFixed(2)}`);

//                      0 ,1 , 2, 3, 4, 5
// const precoslivos = [25,15,30,50,45,20]

// console.log(`O livro mais caro custa ${livros[maisCaro].preco.toLocaleString('pt-BR', {style:
// 'currency',currency: 'BRL'})}
// e o titulo é ${livros[maisCaro].titulo}`);                                                                   // ---> forma mais dificil
// console.log(`O livro mais barato custa ${livros[maisBarato].preco.toLocaleString('pt-BR', {style:
//     'currency',currency: 'BRL'})}
// e o titulo é ${livros[maisBarato].titulo}`);