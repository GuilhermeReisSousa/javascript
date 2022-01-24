var num = [5, 8, 2, 9, 3] 
num.sort()
console.log(num)
var pos = num.indexOf(12)
if (pos == -1){
    console.log('Valor não encontrado')
}else{
    console.log(`O valor 8 está na posição ${pos}`)    
}