function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var valor_ano = window.document.getElementById('txtano')
    var resul = window.document.getElementById('res')

    if (valor_ano.value.length == 0 || Number(valor_ano.value) > ano) {

        window.alert('[ERRO] Verifique os seus dados e tente novamente !!!')
    }

    else{
        var valor_sex = window.document.getElementsByName('radsex')//Pegamos o valor do género
        var idade = ano - Number(valor_ano.value)//Claculamos a idade
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')

        if(valor_sex[0].checked){

            genero = 'Homem'

            if (idade >= 0 && idade < 13) {
                //Criança
                img.setAttribute('src', 'garoto.png')
                img.style.width ='500px'
            }
 
             else if ( idade < 35) {
                //jovem
                 img.setAttribute('src', 'jovem.png')
                 img.style.width ='500px'
            }

            else{
                //Adulto
                 img.setAttribute('src', 'adulto.png')
                 img.style.width ='500px'
            }
        }

        else if (valor_sex[1].checked) {

            genero = 'Mulher'

            if (idade >= 0 && idade < 13) {
                //Criança
                img.setAttribute('src', 'garota.png')
                img.style.width ='500px'
            }
 
             else if ( idade < 35) {
                //jovem
                 img.setAttribute('src', 'joven.png')
                 img.style.width ='500px'
            }

            else{
                //Adulto
                 img.setAttribute('src', 'adulta.png')
                 img.style.width ='500px'
            }
        } 
        
            resul.style.textAlign = 'center'
            resul.style.alignItems = 'center'
            resul.innerHTML = `Detectamos ${genero} com ${idade} anos de idade !!`
            resul.appendChild(img)
    

    }
}
