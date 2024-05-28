const numbers = [ 17, 43, 8, 4, 97, 56, 29 ];

numbers.forEach (numbers);

    if (numbers % 2 === 0) {
        console.log (valores,  "é par");
    } else {
        console.log(valores, "é ímpar" );
    
};


//Exercicio 2:

const number2 = [ 7, 43, 8, 4, 97, 56, 29, 3,  75,  34, 88, 82, 61 ];

const choiceNumber = number2.filter((num) => {
    return num >= 20 && num <= 80;
});

console.log(choiceNumber);