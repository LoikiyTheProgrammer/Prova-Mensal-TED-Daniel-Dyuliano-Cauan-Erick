export function criarPilha(tamanhoX = 5) {
    return [...new Array(tamanhoX)]
}

export function inserirPilha(pilha, livros){
    const spacePosition = pilha.indexOf(undefined)
    if(spacePosition === -1){
        console.log('Sem espaço')
        return
    }

    pilha[spacePosition] = livros
}

export function retirarPilha(pilha){
    const lastItemPosition = pilha.indexOf(undefined)
    const selectedItem = pilha[lastItemPosition -1]
    if(lastItemPosition === -1){
        for(let i = 0; i < pilha.length; i++){
            pilha.pop()
            console.log(pilha.pop())
            return
        }
    }

    pilha.splice(lastItemPosition -1, 1, undefined)
    return selectedItem
}

export function verificaExistencia(pilha, existe){
    for(let j = 0; j < pilha.length; j++){
        if(pilha[i].titulo === existe[i])
    }
}