var num = [5, 8, 2, 9, 3]
num.sort()
num.push(1)
console.log(num)
if(pos == 0){
    console.log('Valor não encontrado')
}else{
    var pos = num.indexOf(2)
    console.log(`O valor 2 está na posição ${pos}`)
    var pos = num.indexOf(9)
    console.log(`O valor 9 está na posição ${pos}`) 
}