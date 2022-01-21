function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var contagem = document.getElementById('contagem')

    if(inicio.value == 0 || fim.value == 0 || passo.value == 0){
        alert('[ERRO] Confira os dados e tente novamente')
        contagem.innerHTML = `Impossível contar`
    }else{
        contagem.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number (passo.value)

    
        if( i < f){
            //CRESCENTE
            for(var c = i; c <= f; c += p){
                contagem.innerHTML += `${c} \u{1F449}`
            }  
        }else{
            //REGRESSIVA
            for(var c = i; c >= f; c -= p){
                contagem.innerHTML += `\u{1F449}`
            }
        }
        contagem.innerHTML += `\u{1F3C1}`
    }

}