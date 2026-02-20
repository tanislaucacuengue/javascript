function fatorial(t) {
    let fat = 1

    for (let c = t; c > 1; c--) {
        fat *= c
    }

    return fat

}


console.log(fatorial(3))


//Exercício para calcular o Fatorial de um número