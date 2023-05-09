function AddAluno() {
    var matricula = prompt('Digite a matrícula do Aluno')
    var nome = prompt('digite o nome do aluno')
    var falta = parseInt(prompt('Digite a quantidade de faltas do aluno'))
    var B1 = parseFloat(prompt('Digite a nota do primeiro bimestre'))
    var B2 = parseFloat(prompt('Digite a nota do segundo bimestre'))
    var media = (B1 + B2) / 2

    var tabela = document.querySelector("body > table")
    var addLinha = tabela.insertRow(-1)

    addLinha.insertCell(0).innerText = matricula
    addLinha.insertCell(1).innerText = nome
    addLinha.insertCell(2).innerText = falta
    addLinha.insertCell(3).innerText = B1
    addLinha.insertCell(4).innerText = B2
    addLinha.insertCell(5).innerText = (media).toFixed(2)

    if (media < 7) {
        var notaPr = parseFloat(prompt('Digite a nota da prova de recuperação'))
        addLinha.insertCell(6).innerText = notaPr
        var mediaFinal = (media + notaPr) / 2
        addLinha.insertCell(7).innerText = (mediaFinal).toFixed(2)
        if (mediaFinal < 5) {
            var reprovado = addLinha.insertCell(8)
            reprovado.innerText = 'Reprovado'
            reprovado.style.color = '#F73636'
            reprovado.style.fontWeight = 'bold'
        } else {
            var aprovado = addLinha.insertCell(8)
            aprovado.innerText = 'Aprovado'
            aprovado.style.color = 'green'
            aprovado.style.fontWeight = 'bold'
        }
    } else if (falta > 16) {
        addLinha.insertCell(6).innerText = '-'
        addLinha.insertCell(7).innerText = '-'
        var reprovado = addLinha.insertCell(8)
        reprovado.innerText = 'Reprovado'
        reprovado.style.color = '#F73636'
        reprovado.style.fontWeight = 'bold'
    }
    else {
        addLinha.insertCell(6).innerText = '-'
        addLinha.insertCell(7).innerText = '-'
        var aprovado = addLinha.insertCell(8)
        aprovado.innerText = 'Aprovado'
        aprovado.style.color = 'green'
        aprovado.style.fontWeight = 'bold'
    }

}