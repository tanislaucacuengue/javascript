function tabuada() {
    let num = window.document.getElementById('num')
    let res = window.document.getElementById('seltab')


    res.innerHTML = ''

    if(num.value.length == 0){
        window.alert('[ERRO], Impossivel gerar tabuada sem um número !!! \n Por favor adiciona um número.')
    }

    
    else{
        let n = Number(num.value)

        for(let c = 1; c <= 12; c++){
            
            let item = window.document.createElement('option')

            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            res.appendChild(item)
        }
    }

}
    
    

    



