function fn() {
    log('Hoisting de funçao')

    function log(value) {
        console.log(value)
    }
}

fn()