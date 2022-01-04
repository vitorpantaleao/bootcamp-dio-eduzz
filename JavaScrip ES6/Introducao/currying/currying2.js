function soma(a){
    return function(b) {
        return a + b
    }
}

const soma2 = soma(2)

console.log(soma2(2))
console.log(soma2(5))
console.log(soma2(6))
console.log(soma2(7))