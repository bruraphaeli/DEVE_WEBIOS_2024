var alunos = [
    {
        nome: "Felipa",
        idade: 20,
        nota: 4,
        ano: "1C"
    },
    {
        nome: "Taty",
        idade: 18,
        nota: 6,
        ano: "3C"
    },
    {
        nome: "Raphaela",
        idade: 19,
        nota: 9,
        ano: "2C"
    },
    {
        nome: "Marcia",
        idade: 17,
        nota: 8,
        ano: "1C"
    },
    {
        nome: "Benicio",
        idade: 15,
        nota: 6,
        ano: "9C"
    },
    {
        nome: "Isis",
        idade: 18,
        nota: 4,
        ano: "3B"
    }
]
console.log(alunos)
console.log(alunos[1])
console.log(alunos[5].nota)

var alunosEmJailson = JSON.stringify(alunos)
console.log(alunosEmJailson)