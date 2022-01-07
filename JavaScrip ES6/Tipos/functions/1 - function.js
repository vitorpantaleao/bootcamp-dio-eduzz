function fn() {
    return 'Code Here'
}

const arrowFn = ( ) => 'Code Here'
const arrowFn2 = ( ) => {
    // Mais de uma expressão
    return 'Code Here'
}

// Funcoes tbm são objetos
fn.prop = 'Posso criar propriedades'

console.log(fn())
console.log(fn.prop)

// receber parametros
const logValue = value => console.log(value)
const logFnResult = fnParam => console.log(fnParam())

logFnResult(fn)

// Receber e retornar funções
const controlFnExec = fnParam => allowed => {
    if(allowed) {
        fnParam()
    }
}

const handleFnExecution = controlFnExec(fn)

handleFnExecution(true) // Excecutará a função FN
handleFnExecution() // Não executará a função FN

// ControlFnExec como função
function controlFnExec(fnParam) {
    return function(allowed) {
        if (allowed) {
            fnParam()
        }
    }
}