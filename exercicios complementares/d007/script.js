var cota = Number(prompt("Qual a cotação atual do dolar?"))
if(cota == 0){
    alert("[ERRO] Reecaregue a página porfavor eVerifique os dados.")
}
function fnc1(){
    var real = Number(prompt("Quanto você tem na sua carteira atual (em reais)"))
    var conver = Number((real / cota)).toFixed(2)
    var res = document.querySelector("#res")
    res.innerHTML = `<p>Se você tem R$${real} na sua carteira, você pode conseguir ${conver} dolares americanos</p>`
    if(real == 1 ){
        res.innerHTML = `<p>Se você tem R$${real} na sua carteira, você pode conseguir R$0 dolares americanos</p>`
    }
}