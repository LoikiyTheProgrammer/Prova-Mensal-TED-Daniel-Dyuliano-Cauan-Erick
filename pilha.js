export function criarPilha(tamanhoX = 5) {
    return [...new Array(tamanhoX)]
}

export function inserirPilha(pilha, livro){
    const lugarVazio = pilha.findIndex(elemento => elemento === undefined);
    if (lugarVazio !== -1) {
        pilha[lugarVazio] = livro;
        console.log(`${livro.titulo} inserido na pilha`)
    }
}

export function retirarPilha(pilha){
    const ultimoLivroPosicao = pilha.findIndex(livro => livro !== undefined && pilha.includes(livro));
    const ultimoLivro = pilha[ultimoLivroPosicao];
    
    if (ultimoLivro !== undefined) {
        pilha.splice(ultimoLivroPosicao, 1);
        console.log(`${ultimoLivro.titulo} retirado da pilha`)
    }
}

export function verificaExistencia(pilha, tituloDoLivro) {
    const livroNaPilha = pilha.find(livro => livro && livro.titulo === tituloDoLivro);
    if (livroNaPilha) {
        console.log(`${tituloDoLivro} está na pilha`)
    }
}

export function verificaExistencia(pilha, item){
    for(let i = 0; i < pilha.length; i++){
        if(pilha[i].titulo === item.titulo){
            console.log("O livro existe")
        }
    }
}
