
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    //var hora = data.getHours()
    var hora = 14
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = './img/manha.png'
        document.body.style.backgroundColor = '#ce6904a6'
    }

    else if (hora >= 12 && hora < 18 ) {
        img.src = './img/tarde.png'
        document.body.style.backgroundColor = '#e1a07e'
    } 
    
    else {
        img.src = './img/noite.png'
        document.body.style.backgroundColor = '#0e3880c9'
    }
}