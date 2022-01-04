const estudantes = [
    {
        name: 'Vitor',
        nota: 8
    },
    {
        name: 'Isabela',
        nota: 6
    },
    {
        name: 'Hugo',
        nota: 7
    },
]

function getEstudantesAprovados(listaEstudantes) {
    return listaEstudantes.filter(estudante => estudante.nota >= 7)
}

console.log('Alunos Aprovados: ')
console.log(getEstudantesAprovados(estudantes))

console.log('Lista de Alunos: ')
console.log(estudantes)