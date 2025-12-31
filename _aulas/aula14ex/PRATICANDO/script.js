function contar() {

    let inicio = window.document.getElementById('inicio')
    let fim = window.document.getElementById('fim')
    let passo = window.document.getElementById('passo')
    let res = window.document.getElementById('res')


    res.innerHTML = 'Contando:  <br> '

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){

        window.alert('[ERRO], Impossivel fazer a contagem, Faltam dados!!')
    }

    

    else{


        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Valor inavlido, considerando passo 1')
            p = 1
        }

        if (i < f)  {

                for( let t = i; t <= f; t += p){
                res.innerHTML += ` ${t} \u{1f3c1}`
            }
        }
        

        else if (i > f)  {
            
                for( let t = i; t >= f; t -= p){
                res.innerHTML += ` ${t} \u{1f3c1}`
            }
        }
        res.innerHTML += `\u{1f603}`
    }
}