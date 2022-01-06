const user = {
    name: 'Vitor',
    lastName: 'Pantaleão'
}

// Recupera chaves de um objeto
console.log('Propriedades do objeto user: ', Object.keys(user))

// Recupera os valores das chaves do objeto
console.log('Valores das propriedades do objeto user: ', Object.values(user))

// Retorna um array de arrays contendo [ nome_prop, valor_prop]
console.log('Lista de propriedades e valores:', Object.entries(user))

// Mergear propriedades de objetos 
Object.assign(user, {fullName: 'Vitor Pantaleão'})

console.log('Adiciona a propriedade fullName no objeto user: ', user)
console.log('retorna um novo objeto mergeando dois ou mais objetos: ', Object.assign({}, user, {age: 26}))

// Previne todas as alterações em um objeto
const newObj = { foo: 'bar'}
Object.freeze(newObj)

newObj.foo = 'changes'
delete newObj.foo
newObj.bar = 'foo'

console.log('Variavel newObj após as alterações: ', newObj)

// Permite apenas alterações de propriedades existentes em um objeto
const person = { name: 'Vitor' }
Object.seal(person)

person.name = 'Vitor Pantaleão'
delete person.name
person.age = 26

console.log('Variável person após as alterações: ', person)