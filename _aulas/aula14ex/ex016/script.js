function contar() {
    let res = window.document.getElementById('res')
    let inicio = window.document.getElementById('inicio')
    let final = window.document.getElementById('fim')
   let passo = window.document.getElementById('passo')

   if (inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0) {
       
        res.innerHTML = 'Impossivel contar!!'
        window.alert('[ERRO!!!] Faltam dados')
        

   } else{

        res.innerHTML = `Contando: </br></br>`

        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(passo.value)

        if (p <= 0) {
             window.alert('[ERRO!!!] Passo invalido !! Considerando passo 1')

             p = 1
        }

        if(i < f){   //Contagem Cerscente   
            for(let t = i; t <= f; t+= p){

                res.innerHTML += ` ${t} \u{1f603}`
        
            }
        }
        
        else{//Contagem Decrerscente  

            for(let t = i; t >= f; t-= p){
                res.innerHTML += ` ${t} \u{1f603}`
            }

        }

     res.innerHTML += `\u{1f3c1}`
   }
    
    
}