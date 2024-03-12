import { criarPilha, inserirPilha, retirarPilha, verificaExistencia} from './pilha.js'
    // ...
    // Objeto exemplo
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
    // ...
    let pilha = criarPilha(tamanhoX)
    // ...
    console.log(pilha)
    inserirPilha(pilha, {
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
    })

    retirarPilha(pilha, {
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
    })
    // ,,,
    verificaExistencia(pilha, tituloDoLivro)