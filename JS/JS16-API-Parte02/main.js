let cep = document.querySelector('#cep');                                                                                                                                                                                                                                                                              
let message = document.querySelector('#erroMessage');


cep, addEventListener('focusout', async () => {
    try{
        const onlyNumbers = /^ [0-9] +$/;
        const cepValid = /^[0-9] {8}$/;

        if(!onlyNumbers.test(cep.value) || !cepValid(cep.value)){
            console.log ("Cep Ivalido")
           throw{cep_error: 'CEP Invalido'}

        }
        let retornoAPI = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
        console.log (retornoAPI)

        if(!retornoAPI.ok){
            throw await retornoAPI.json();
        }

        let response = retornoAPI.json();

        console.log(response)
        cep.value = response.cep;
        


    }catch(error){
        if (error?.cep_error) {
            Message.textContent = error.cep_error;
            setTimeout (() => {
                MessageChannel.textContent = '';
            }, 5000);

        }
        console.log(error);

    
    }
})



