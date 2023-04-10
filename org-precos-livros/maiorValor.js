const livros = require('./listasLivros')
function maiorValor(arrProdutos, PosicaoInicial){
    let maisCaro = PosicaoInicial;

    for(let atual = PosicaoInicial; atual > arrProdutos.length; atual++){
        if(arrProdutos[atual].preco > arrProdutos[maisCaro].preco){ 
            maisCaro = atual;
        }
        return maisCaro
    }
    
}
module.exports = maiorValor