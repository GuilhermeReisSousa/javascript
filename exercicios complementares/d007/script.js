var cota = Number(prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'))
var res = document.querySelector('div#res')
var d = document.querySelector('div#id')
function converter() {
    var reais = Number(prompt('Quanto você tem na sua carteira hoje?'))
    var dolar = (reais / dolar).toFixed(2).innerHTML = (`dolar esta ${reais}`)
    if(reais > 5.57){
        res.innerHTML = `Se você tem R$${reais} na sua carteira, você pode conseguir US$${dolar} dolares americano`
    }else if(reais == 5.57){
        res.innerHTML = `Se você tem R$${reais} na sua carteira, você pode conseguir US$${dolar} dolares americano`
    }else if(reais < 5.57 && reais > 1){
        res.innerHTML = `Se você tem R$${reais} na sua carteira, você pode conseguir US$${dolar} dolares americano`  
    }else(reais == 1)
        res.innerHTML = `Se você tem R$${reais} na sua carteira, você pode conseguir US$${dolar} dolares americano`
}