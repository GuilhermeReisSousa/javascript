function des(){
    
    var preco = document.querySelector('div#preco')
    var item = prompt('Qual é o produto que você está comprando?')
    var preco = Number(prompt(`Qual é o preço de ${item}`))
    var des = (preco / 10 ).toFixed(2)
    var res = (preco - des).toFixed(2)

    var titulo = document.querySelector('div#titulo').innerHTML = `<h1>Calculando o desconto de 10% para ${item}</h1>`

    var preco = document.querySelector('div#preco').innerHTML = `O preço original era R$${preco}`

    var desconto = document.querySelector('div#desconto').innerHTML = `Você acaba de ganhar R$${des} de desconto (-10%)`

    var res = document.querySelector('div#res').innerHTML = `No fim, você vai pagar ${res} no produto ${item}`


}
