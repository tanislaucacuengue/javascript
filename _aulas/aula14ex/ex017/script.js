function tabuada() {
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('[ERRO], por favor digite um número!!')
        
    }

    else{

        let n = Number(num.value)
        tab.innerHTML = ''

        for(let c = 1; c <= 12; c++){

            let item = window.document.createElement('option')
            let resul = n*c

            item.text = `${n} x ${c} = ${resul}`
            item.value = `tab${c}`
            tab.appendChild(item)

        }
    }


}

/**let c = 1

        while (c <= 12) {
            
            let item = window.document.createElement('option')
            let resul = n*c

            item.text = `${n} x ${c} = ${resul}`
            tab.appendChild(item)

            c++
        } */