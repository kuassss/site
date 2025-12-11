
let resposta = document.getElementById('resposta')

function principal(){
    let poten = Number(document.getElementById('poten').value)
    let irrad = Number(document.getElementById('irrad').value)
    let dia = Number(document.getElementById('dia').value)
    let efici = Number(document.getElementById('efici').value) / 100


    let resul = ( poten * irrad * dia * efici) / 1000

    console.log (`${resul.toFixed(2)}`)

    resposta.innerHTML = ``
    resposta.innerHTML += ` Sua placa ira gerar: ${resul.toFixed(2)} `

}
