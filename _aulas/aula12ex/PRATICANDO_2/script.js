function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var valor_ano = window.document.getElementById('ano')
    var res = window.document.getElementById('res')

    if (valor_ano.value.length == 0 || Number(valor_ano.value) > ano) {
        
        window.alert('[ERRO] Valor invalido, tente novamente!!')
    }

    else{
        var valor_sex = window.document.getElementsByName('sex')
        var idade = ano - Number(valor_ano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')

        if (valor_sex[0].checked) {
            
            genero = 'Homem'
            img.style.width = '250px'
            img.style.marginTop = '50px'
            img.setAttribute('src', './img/homem.jpg')
        }

        else if (valor_sex[1].checked) {
            
            genero = 'Mulher'
            img.style.width = '250px'
            img.style.marginTop = '50px'
            img.setAttribute('src', './img/mulher.jpg')
        } 
    }

    res.style.textAlign = 'center'
    res.style.alignItems = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade.`
    res.appendChild(img)
}
