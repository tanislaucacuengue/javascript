var data = new Date()
var hora =  data.getHours()
var time = window.document.getElementById('hora')
var res = window.document.getElementById('res')

time.innerHTML = `Agora são ${hora} horas`

if (hora >= 6 && hora < 12) {
    res.innerHTML = 'Bom dia'
    window.document.body.style.backgroundColor = 'skyblue'
    window.document.body.style.color = 'black'

}

else if (hora >= 12 && hora < 18) {
    res.innerHTML = 'Boa Tarde'
    window.document.body.style.backgroundColor = '#6e4b00e8'
}

else if (hora >= 18 && hora <= 23) {
    res.innerHTML = 'Boa Noite'
    window.document.body.style.backgroundColor = '#00276ee8'
}

else if (hora >= 0 && hora <= 5) {
    res.innerHTML = 'Boa Madrugada'
    window.document.body.style.backgroundColor = 'lightgray'
}

else{
    window.alert('Valor invalido!!')
}

