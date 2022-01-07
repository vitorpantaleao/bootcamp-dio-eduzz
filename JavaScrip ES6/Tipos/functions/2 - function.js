this.name = 'Nome no contexto da criação'

const getNameArrowFn = () => this.name

function getName() {
    return this.name
}

const user = {
    nome: 'Nome do objeto de execução',
    getNameArrowFn,
    getName
}

console.log(user.getNameArrowFn())
console.log(user.getName())