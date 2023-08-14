let nome = window.prompt('Informe o primeiro nome do recruta:')
let sobrenome = window.prompt('Informe o sobrenome do recruta:')
let campo = window.prompt('Qual o campo de estudo do recruta?')
let ano = window.prompt('Qual é o ano de nascimento do recruta?')

alert( 
    "Recruta cadastro com sucesso!\n" + 
    "\nNome completo: " + nome + " " + sobrenome +
    "\nCampo de Estudo: " + campo + 
    "\nIdade: " + (2023 - ano)
)
    