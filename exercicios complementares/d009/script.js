// salario atual * reajuste / 100 = funciona

function fnc1(){
    var nome = prompt('Qual é o nome do funcionário?')
    var sala = Number(prompt(`Qual é o salário de ${nome}`)).toFixed(2)
    var porcen = Number(prompt(`O salário de ${nome} vai ser reajustado em qual procentagem?`))
    var conta = ((sala * porcen) / 100).toFixed(2)
    var res = (conta + 1)

    var titulo = document.querySelector('div#titulo').innerHTML = `<h2>${nome} recebeu um aumento salárial</h2>`

    var atual = document.querySelector('div#atual').innerHTML = `<p>O salário atual era R$${sala}</p>`

    var aumento = document.querySelector('div#aumento').innerHTML = `<p>Com um aumento de ${porcen}%, o salário vai aumentar R$${conta} no próximo mês.</p>`
    
    var res = document.querySelector('div#res').innerHTML = `<p>E a partir daí, ${nome} vai passar a ganhar ${res}</p>`
    //mostrar o resultado certo 

    /*
    titulo.innerHTML = `<h2>${nome} recebeu um aumento salárial</h2>`

    atual.innerHTML = `<p>O salário atual era R$${sala}</p>`

    aumento.innerHTML = `<p>Com um aumento de ${porcen}%, o salário vai aumentar R$${conta} no próximo mês.</p>`

    res.innerHTML = `<p>E a partir daí, ${nome} vai passar a ganhar ${res}</p>` 
 */
}