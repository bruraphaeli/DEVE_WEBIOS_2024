function getImagem(e ) {

    let url_api = document.getElementById('url_api').innerText;

    fetch(url_api, {
        method:'GET'
    })
    .then((response)=> {
        return response.json();
    })
    .then((data) => {

        document.getElementById('json_aqui').innerText =
        JSON.stringify(data);

        let imagem =
        <img class= "rounded img-fluid" src="${data.massage}" />

        document.querySelector ('#imagem_aqui').innerHTML = imagem;


        
    });
}