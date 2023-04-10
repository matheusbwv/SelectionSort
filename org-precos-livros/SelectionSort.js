// Lista de livros
const livros = require('./listasLivros');

// Ordenar a lista de livros do maior para o menor preço
for (let atual = 0; atual < livros.length; atual++){
    let menor = atual

    for (let analise = atual + 1; analise < livros.length; analise++){
        if (livros[analise].preco < livros[menor].preco){
            menor = analise
        }
    }

    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];

    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual
}

console.log('Lista de livros ordenada do menor para o maior preço:');
for (let livro of livros) {
  console.log(`${livro.titulo}: R$ ${livro.preco.toFixed(2)}`);
}

// Ordenar a lista de livros do menor para o maior preço
for (let atual = 0; atual < livros.length; atual++){
    let maior = atual

    for (let analise = atual + 1; analise < livros.length; analise++){
        if (livros[analise].preco > livros[maior].preco){
            maior = analise
        }
    }

    let livroAtual = livros[atual];
    let livroMaiorPreco = livros[maior];

    livros[atual] = livroMaiorPreco
    livros[maior] = livroAtual
}

console.log('Lista de livros ordenada do maior para o menor preço:');
for (let livro of livros) {
  console.log(`${livro.titulo}: R$ ${livro.preco.toFixed(2)}`);
}
