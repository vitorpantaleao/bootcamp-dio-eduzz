const myNumber = 12.4032

// Transformar número para String
const numberAsString = myNumber.toString()
console.log('Número transformado em String: ' + numberAsString + ' ' + typeof numberAsString)

// Retorna número com um numero de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2)
console.log('Número com duas casas decimais: ' + fixedTwoDecimals)

// Transforma uma string em float
console.log('String parseada para float: ' + parseFloat('13.22'))

// Transforma uma string em int
console.log('String parseada para int: ' + parseInt('13.20'))