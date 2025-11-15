var agora = new Date()
var diaSemana = agora.getDay()


switch (diaSemana) {
    case 0:
        console.log("Domingo")
        break;

    case 1:
        console.log("2ª feira")
        break;

    case 2:
        console.log("3ª feira")
        break;

    case 3:
        console.log("4ª feira")
        break;

    case 4:
        console.log("5ª feira")
        break;

    case 5:
        console.log("6ª feira")
        break;

    case 6:
        console.log("Sábado")
        break;

    default:
        console.log("[ERRO] dia inválido")
        break;
}
 