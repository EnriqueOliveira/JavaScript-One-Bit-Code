const veiculo1 = prompt("Informe o nome do primeiro veículo:") // vai criar uma caixinha com a pergunta
const velocidade1 = parseFloat(prompt("Informe a velocidade do primeiro veiculo:"))

const veiculo2 = prompt("Informe o nome do segundo veículo:") // vai criar uma caixinha com a pergunta
const velocidade2 = parseFloat(prompt("Informe a velocidade do segundo veículo:"))

if (velocidade1 > velocidade2) { // se (velocidade1 maior velocidade2)
    alert(veiculo1 + " É mais rápido do que " +  veiculo2) // vai mostrar na tela o resultado na tela
} else if (velocidade2 > velocidade1) { // se não (velocidade1 maior velocidade2)
    alert(veiculo2 +  " É mais rápido do que " +  veículo1) // vai mostrar na tela o resultado na tela
} else { // se não
    alert(veiculo1 +  " e " + veiculo +  " possuem velocidades iguais. ") // vai mostrar o resultado na tela
}

// 1º PASSO = Crias ás váriaveis (veiculo1 e velocidade1 aqui vou criar uma função ParseFloat para converter uma string "texto" em um número)

// 2º PASSO = Crias mais 02 variaveis (veiculo2 e velocidade2)

// 3º PASSO = Aqui vamos começar a resolver o problema solicitado.

// 4º PASSO = if eu monto a pergunta e alert vai ser a resposta.
