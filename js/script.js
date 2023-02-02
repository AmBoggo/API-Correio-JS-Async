async function buscaEndereco(cep) {
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertida = await consultaCep.json();
        if (consultaCepConvertida.erro) {
            throw Error("Cep não existente!")
        }
        var end = document.getElementById('endereco')
        var city = document.getElementById('cidade')
        var uf = document.getElementById('estado')
        var bairro = document.getElementById('bairro')

        city.value = consultaCepConvertida.localidade;
        end.value = consultaCepConvertida.logradouro;
        uf.value = consultaCepConvertida.uf;
        bairro.value = consultaCepConvertida.bairro
        console.log(consultaCepConvertida);
        return consultaCepConvertida
    } catch (erro) {
        console.log(erro)
    }    
}

var cep = document.getElementById('cep')
cep.addEventListener('focusout', ()=> buscaEndereco(cep.value))
end.value == ce

//Como utilizar assíncrono com then
// .then(resposta => resposta.json())
// .then(r => {
//     if (r.erro) {
//         throw Error("Esse cep não existe")
//     } else
//         console.log(r);
// })
// .catch(erro => console.log(erro))
// .finally(msg => console.log('Processamento conclujído!'))