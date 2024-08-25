//let ["Mateus", "Marcos", "Lucas", "João", "Judas", "Pedro"]

//let pessoas = ['Mateus', 'Marcos', 'Lucas', 'João', 'Judas', 'Pedro'];
//let nomesComHifen = pessoas.join('-');
//console.log(nomesComHifen);


//let pessoas = ['Mateus', 'Marcos', 'Lucas', 'João', 'Judas', 'Pedro'];
//pessoas.splice (3,3);

//let nomesComHifen = pessoas.join("-");
//console.log(nomesComHifen);


//let pessoas = ['Mateus', 'Marcos', 'Lucas', 'João', 'Judas', 'Pedro'];

//pessoas.splice (4,1);
//let nomesComHifen = pessoas.join('-');

//console.log(nomesComHifen);

let livro = 
{
    "titulo": "Dom Casmurro",
    "autor": "Machado de Assis",
    "anoPublicacao": 1899,
    "palavrasChave": [
      "literatura brasileira",
      "romance",
      "clássico"
    ]
  }

  let livroJson = JSON.stringify(livro)
  console.log(livroJson)

  let estudantes = [
    {id: 1,
        nome: "Filipe",
        curso: "Desenvolvimento de Sistemas",
        disciplinas: [
          { nome: "Matemática", nota: 10 },
          { nome: "Programação", nota: 9 }
        ]
      },
      {
        id: 2,
        nome: "Cauã",
        curso: "Administração",
        disciplinas: [
          { nome: "Matemática", nota: 8 },
          { nome: "Economia", nota: 9 }
        ]
      },
      {
        id: 3,
        nome: "Diego",
        curso: "Direito",
        disciplinas: [
          { nome: "Matemática", nota: 7 },
          { nome: "Legislação", nota: 8 }
        ]
      },
      {
        id: 4,
        nome: "Bruno",
        curso: "Medicina",
        disciplinas: [
          { nome: "Biologia", nota: 10 },
          { nome: "Matemática", nota: 9 }
  ]
  let estudantesJson = JSON.stringify(estudantes)
  console.log(typeof estudantesJson)

  let novoestudante = {
    id: 5,
    nome: "Joana",
    curso: "Engenharia",
    disciplinas: [
    { nome: "Física", nota: 9 },
    { nome: "Matemática", nota: 8 }
  ]
  };
  estudantes.push(novoEstudante);

let idParaRemover = 3;
estudantes = estudantes.filter(estudante => estudante.id !== idParaRemover);

let disciplinaParaAtualizar = "Matemática";
let novaNota = 10;

estudantes.forEach(estudante => {
  estudante.disciplinas.forEach(disciplina => {
    if (disciplina.nome === disciplinaParaAtualizar) {
      disciplina.nota = novaNota;
    }
  });
});

console.log(estudantes);