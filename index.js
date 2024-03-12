import { criarPilha, inserirPilha, retirarPilha, verificaExistencia} from './pilha.js'

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

    let pilha = criarPilha(5)
    inserirPilha(pilha, livro)
    retirarPilha(pilha, livro)
    verificaExistencia(pilha, tituloDoLivro)
