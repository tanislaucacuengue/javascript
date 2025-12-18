var data = new Date()
var hora = data.getHours()
var time = window.document.getElementById('hora')
var res = window.document.getElementById('res')
var sec = window.document.getElementById('sec')

time.innerHTML = `Agora são ${hora} horas`

if (hora >= 6 && hora < 12) {
    res.innerHTML = 'Bom dia'
    window.document.body.style.backgroundImage = 'url(img/manha.jpg)'
    /*window.document.body.style.backgroundColor = 'skyblue'
    window.document.body.style.color = '#00276ee8'*/
    


}

else if (hora >= 12 && hora < 18) {
    res.innerHTML = 'Boa Tarde'
    window.document.body.style.backgroundImage = 'url(img/tarde.jpg)'
   /* window.document.body.style.backgroundColor = '#6e4b00e8'*/
    
   
}

else if (hora >= 18 && hora <= 23) {
    res.innerHTML = 'Boa Noite'
    window.document.body.style.backgroundImage = 'url(img/noite.jpg)'
    /*window.document.body.style.backgroundColor = '#00276ee8'*/
    
}

else if (hora >= 0 && hora <= 5) {
    res.innerHTML = 'Boa Madrugada'
    window.document.body.style.backgroundImage = 'url(img/madrugada.jpg)'
    /*window.document.body.style.backgroundColor = 'lightgray'
    window.document.body.style.color = '#00276ee8'*/
   

}

else{
    window.alert('Valor invalido!!')
}



