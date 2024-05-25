let frutas = ["maça, laranja, uva, melancia, mamão, abacaxi, ameixa"]
  
frutas.forEach (retornainfo);
function retornainfo(nomeFruta, indice){
    console.log(`nomeFruta: ${nomeFruta}`)
console.log(`Indice: ${indice}`)
}



let tarefa =[
    {//0
    id:1,
    isPronta: true,
    nomeTarefa: "Pular",

    },
    {//1
    id:1,
    isPronta:true,
    nomeTarefa:"correr",
    
    },
    {//2
    id:3,
    isPronta:false,
    nomeTarefa:"Limpar a Casa",
    }

]

console.clear()

tarefa.forEach((tarefa) => console.log(tarefa.nomeTarefa))

console.clear()

let numero = [4, 9, 16, 25,]
let novoArray = numero.map(Math.sqrt)

console.log("Array antigo" + numero)
console.log("NovoArray + novoArray")

let mapText = tarefa.map ((retornaText) => {
    console.log(retornaText.nomeTarefa)
} ) 

console.clear()
let numero2 = [3, 13, 24, 36, 47, 50, 60, 78, 89]

let resultado = numero2.filter(retornaFiltro)
function retornaFiltro(num){
  return num > 30 
}

console.log(resultado)

let tarefaFiltro = tarefa.map((resultadoFiltro) => {
    return resultadoFiltro.isPronta === false

})
console.log(tarefaFiltro)
console.clear

let sapatos = [
    {marca: "Nike", quantidade:3 },
    {marca: "Adidas", quantidade:5 },
    {marca: "Puma", quantidade:7 },

];
sapatos.find((retorFind) => {
    return retorFind.marca == "puma"
})













