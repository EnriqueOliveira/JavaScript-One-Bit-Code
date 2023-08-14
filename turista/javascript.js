const turista = prompt("E ai, turista! Qual é o seu nome?")
let cidades = ""
let contagem = 0

let continuar = prompt("Você visitou alguma cidade ? (Sim/Não)")

while (continuar === "Sim") {
    let cidade = prompt("Qual é o nome da cidade visitada?")
    //cidades = cidades + ...
    cidades += " - " + cidade + "\n" // (\n) essa ---barra n--- quer dizer pular linha em JS
    contagem++
    continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)")
}

alert(
    "Turista: " + turista + 
    "\nQuantidades de cidade visitadas: " + contagem + 
    "\nCidades visitadas:\n" + cidades
)