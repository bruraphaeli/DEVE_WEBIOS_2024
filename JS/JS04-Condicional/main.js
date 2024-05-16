//IF
// Se todos os alunos estiverem com a blusa e o crchá então todos recebem nota 10

var todosdecrecha = false

if(todosdecrecha == true){

    console.log("Todos receberam nota 10 em JS")
}else{

   console.log("Todos recebem nota 0 em JS")

}


console.clear()

var numero1 = 4
var numero2 = 2

numero1 > numero2 ? console.log("numero1 é maior que"): console.log("numero1 é menor")

// if(numero1 > numero2){
   // console.log ("variavel numero1 é maior que variavel numero2")} 
    //  console.log("variavel numero1 é menor que a variavel numero2")

    

 console.clear()
  // se for janeiro vai retornar verão e se for junho vai retornar outono, se não for nenhum dos dois vai retornar inverno

    let mes = "JANEIRO"

    if (mes == "JANEIRO"){
         console.log("é verão")
    }else if (mes == "JUNHO"){
        console.log("é outono")
    }else if (mes == "OUTONO"){
        console.log("É primavera")
    }else{
        console.log("é inverno")
    }
    
    console.clear()
    switch(mes){
        case mes == "JANEIRO":
            console.log("É Verao")

            case mes == "JUNHO":
                console.log("É outono")
                break;

                case mes == "OUTONO":
                    console.log("É primavera")
                    break;

                   default:
                        console.log("É inverno")
                        break;



    }
    