// metodo foreach
let frutas = [ `Morango, Uva, Pera, Maça, Laranja, maracuja`]
// insira 6 frutas
frutas.forEach(retornaInfo);
function retornaInfo(nomeFruta, indice){
console.log(`nomeFruta: ${nomeFruta}`);
console.log(`indice: ${indice}`)
}

frutas.forEach{(teste) => console.log(teste)}
// ele vai retornar apenas o nome e nao vai retornar o indice
console.clear()

let numeros = [4, 9, 16, 25]
let novoArray = numeros.map(Math.sqrt)
console.log("Array antigo" + numeros)
console.log("Novo Array" + novoArray)

let mapText = tarefas.map(retornaText) => {
    console.log(retornaText.nomeTarefa)
}
console.clear()
let numeros2 = [3, 13, 24, 36, 47, 50, 60, 70, 89]
let resultado = numeros2.filter(retornaFiltro)

function retornaFiltro(num){
    return num > 30
}
console.log(resultado)

let tarefaFiltro = tarefas.filter((resultadoFiltro) = > {
    return resultadoFiltro.isPronta === fals
})
    

console.log(tarefaFiltro)

console.clear()
let sapatos = [
    {marca: "Nike", quantidade: 3},
    {marca: "Adidas", quantidade:5},
    {marca: "Puma", quantidade:7}
]
console.log(
sapatos.find((retornaFind) => {
    return (retornaFind.marca == "Puma")
})
)

