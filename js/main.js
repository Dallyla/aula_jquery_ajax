//função do primeiro exemplo

function consultaCep() {
    $(".barra-progresso").show(); //quando o botão de busca é clicado, mostra a barra de progesso
    var cep = document.getElementById("cep").value; //armazenar na variáriável o valor do cep inserido pelo usuário
    var url = "http://viacep.com.br/ws/" + cep + "/json/"; //insere na url o cep informado pelo usuário
    
    console.log(url);

    //requisição ajax utilizando a biblioteca jQuery

    $.ajax({  //ajax aqui é uma função do jQuery, o $ chama o jQuery
        url: url, //variável url armazena url de API que traz informações sobre determinado CEP
        type: "GET", //tipo de requisição
        success: function(response) {  //em caso de sucesso executará essa função
            console.log(response);     //response é o json retornado pela API

            $("#logradouro").html(response.logradouro); //Faz a mesma coisa da linha de baixo, só que com jQuery
            //document.getElementById("logradouro").innerHTML = "<b>response.logradouro</b>"; //Imprime no HTML o atributo "logradouro" do json "response"
            /*document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf; */
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP " + response.cep);
            $(".cep").show(); //mostra a div .cep quando tereminada a busca
            $(".barra-progresso").hide(); //quando a busca é finalizada, esconde a barra de progresso
            
        }
    })
}

$(function() {
    $(".cep").hide(); //quando a página é carregada ou atualizada hide esconde a classe .cep inteira
    $(".barra-progresso").hide(); //quando a página é carregada ou atualizada hide esconde a classe .barra-progresso
});
