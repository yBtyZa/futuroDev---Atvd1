const form = document.querySelector("form");
form.addEventListener("submit", function (evento) {
    evento.preventDefault()
})

let i = 0
let limite = document.querySelector(".h3")

function cadastrarVeiculo(marca, modelo, cor, ano, placa) {

    if (marca, modelo, cor, ano, placa != "" && i < 3) {

        const tabela = document.getElementById("tabela")
        const qtdLinhas = tabela.rows.length
        const linha = tabela.insertRow(qtdLinhas)

        const cellMarca = linha.insertCell(0)
        const cellModelo = linha.insertCell(1)
        const cellCor = linha.insertCell(2)
        const cellAno = linha.insertCell(3)
        const cellPlaca = linha.insertCell(4)

        cellMarca.innerHTML = marca
        cellModelo.innerHTML = modelo
        cellCor.innerHTML = cor
        cellAno.innerHTML = ano
        cellPlaca.innerHTML = placa

        const formulario = document.querySelector(".cadastrarVeiculo")
        formulario.reset()

        limite.innerHTML = ""

    } else if (i >= 3) {
        limite.innerHTML = "Limite de carros cadastrados atingido!"
    } else {
    }

    i++


}


