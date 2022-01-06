//  Retorna o valor de uma string
const textSize = 'Texto da String'.length
console.log('A quantidade de caracteres é de: ' + textSize)

// Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto Delimitado '.split('i')
console.log('Array com as posições separadas pelo delimitador: ', splittedText)

// Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT')
console.log('Substituição de valor: ', replacedText)

// Retorna a 'fatia' de um valor
const lastChar = 'Texto'.slice(-1)
console.log('Última letra de uma string: ', lastChar)