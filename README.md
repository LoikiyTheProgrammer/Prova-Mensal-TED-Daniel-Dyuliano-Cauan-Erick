Com base no que revisamos em nossas aulas:

Arrays
Objetos
Funções
If/Else/switch
Loops (for/foreach)
Operações com arrays
pop, retira o último elemento
push, adiciona um elemento no final
shift, retira o primeiro elemento
unshift, adiciona um elemento no início
splice, adiciona ou retira elementos em qualquer posição
slice, retorna um pedaço do array
indexOf, retorna a posição de um elemento
lastIndexOf, retorna a última posição de um elemento (caso exista mais de um)
includes, retorna true ou false se um elemento existe
O projeto consiste em Criar uma PILHA para nossos livros.
O projeto deverá ser feito usando uma lista já dada de LIVROS com seus respectivos atributos.
let alunos = [
    {
        titulo: "Dom Casmurro",
        paginas: 300,
        genero: "clássico",
    },
    {
        titulo: "IT a coisa",
        paginas: 150,
        genero: "terror",
    },
    {
        titulo: "Jason",
        paginas: 70,
        genero: "terror",
    },
    {
        titulo: "Chapéuzinho Vermelho",
        paginas: 10,
        genero: "clássico",
    },
    {
        titulo: "Histórinhas de terror para crianãs",
        paginas: 50,
        genero: "clássico",
    },
]
Será avaliado na nota (0 - 3):
Criar nossa pilha com o tamanho da nossa lista de exemplo (0.25)
Inserir os livros na ordem da array, do primeiro [0] ao último array.length e printar um por um como abaixo (1 ponto):
Livro X inserido na pilha
Livro Y inserido na pilha
Livro Z inserido na pilha
Retirar todos os livros da pilha um por um falando que retirou (1 ponto)
Livro Z retirado da pilha
Livro Y retirado da pilha
Livro X retirado da pilha
Ver se temos um livro na pilha pelo (0.75)
Considerações finais
Deve ser usado modularização, criando um package.json e fazendo imports/exports
Seu código PRINCIPAL deve ser algo como:
    import { criarPilha, inserirPilha, retirarPilha, verificaExistencia} from './pilha.js'
    // ...
    // Objeto exemplo
    // ...
    let pilha = criarPilha(tamanhoX)
    // ...
    inserirPilha(pilha, livro)
    retirarPilha(pilha, livro)
    // ,,,
    verificaExistencia(pilha, tituloDoLivro)