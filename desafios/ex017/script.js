function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0)
        {alert('Por favor, Digite um número e tente novamente')
    }else {
        let n = Number(num.value)
        // let c = 1 quando usamos o for declaramos nele mesmo, mas para o while e preciso declarar fora dele 
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // isso no js nao e necessário
            tab.appendChild(item)
        }
        // while (c <= 10) {
        //     let item = document.createElement('option')
        //     item.text = `${n} x ${c} = ${n*c}`
        //     item.value = `tab${c}`
        //     tab.appendChild(item)
        //     c++
        // }
    }
    
}