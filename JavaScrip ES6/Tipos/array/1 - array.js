const users = ['Vitor', 'Izabela', 'Gael']

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Vitor',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Izabela',
        age: 22,
        gender: gender.WOMAN
    },
    {
        name: 'Gael',
        age: 01,
        gender: gender.MAN
    }
]

// Retornar a quantidade de itens de um array
console.log('Items: ' + persons.length)

// Verificar se é array
console.log('A variável persons é um array: ', Array.isArray(persons))

// Iterar os itens do array
persons.forEach((person, index, arr) => {
    console.log(`Nome: ${person.name}`)
})

// Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN)
console.log('Nova lista apenas com homens: ', mens)

// Retornar um novo
const personWithCourse = persons.map(person => {
    person.course = 'introdução ao javascript'
    return person
})

console.log('Pessoas com a adição do course: ', personWithCourse)

// Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age
    return age
}, 0)

console.log('Soma de idade das pessoas: ', totalAge)