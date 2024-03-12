export function criarPilha(tamanho = 5) {
    return [...new Array(tamanho)]
}

export function inserirPilha(pilha, livro){
    const posicao = pilha.findIndex(elemento => elemento === undefined);
    if (posicao !== -1) {
        pilha[posicao] = livro;
        console.log(`${livro.titulo} inserido na pilha`)
    }else{
        console.log("Pilha cheia")
    }
}

export function retirarPilha(pilha){
    const ultimoLivroPosicao = pilha.findIndex(livro => livro !== undefined && pilha.includes(livro));
    const ultimoLivro = pilha[ultimoLivroPosicao];
    
    if (ultimoLivro !== undefined) {
        pilha.splice(ultimoLivroPosicao, 1);
        console.log(`${ultimoLivro.titulo} retirado da pilha`)
    }else{
        console.log("Pilha vazia")
    }
}

export function verificaExistencia(pilha, tituloDoLivro) {
    const livroNaPilha = pilha.find(livro => livro && livro.titulo === tituloDoLivro);
    if (livroNaPilha) {
        console.log(`${tituloDoLivro} está na pilha`)
    }else{
        console.log(`${tituloDoLivro} não está na pilha`)
    }
}

export function verificaExistencia(pilha, item){
    for(let i = 0; i < pilha.length; i++){
        if(pilha[i].titulo === item.titulo){
            console.log(pilha[i].titulo + " existe na pilha")
            return
        }
    }
    console.log(item.titulo + "não existe na pilha")
}
