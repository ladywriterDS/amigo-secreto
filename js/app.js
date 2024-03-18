let listaNomes = [];

function adicionar(){
    let nome = document.getElementById('nome-amigo');
    if (nome.value == ''){
        alert('Informe um nome.');
        return;
    }
    let amigosEscolhidos = document.getElementById('lista-amigos');
    listaNomes.push(' ' + nome.value.toUpperCase());
    amigosEscolhidos.textContent = listaNomes;
    nome.value = '';
}

function sortear(){
    if(listaNomes.length < 4){
        alert('Adicione pelo menos QUATRO amigos.');
        return;
    }
    embaralha(listaNomes)
    let sorteio = document.getElementById('lista-sorteio');
    for(let i = 0; i < listaNomes.length; i++){
        if(i == listaNomes.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + listaNomes[i] + ' -> ' + listaNomes[0] + '<br>'
            
        } else{
            sorteio.innerHTML = sorteio.innerHTML + listaNomes[i] + ' -> ' + listaNomes[i + 1] + '<br>';
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
    listaNomes = [];
}
