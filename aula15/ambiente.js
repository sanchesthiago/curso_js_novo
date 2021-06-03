var num = [5, 8, 2, 9, 3]
    num[4]=6
    num.push(7)
    num.length // comprimento do vetor
    //num.sort() // coloca em ordem crescente os valores
    console.log(`Nosso Vetor é o ${num}`)
    console.log(`O comprimento do Vetor é ${num.length}`)
    console.log (`O Primeiro elemento do vetor é ${num[0]}`)   
    console.log (`Em Ordem Crescente fica: ${num.sort()}, e o primeiro elemento é ${num[0]}`)

    var pos = num.indexOf(8)
    if (pos == -1) {
        console.log('Valor não foi encontrado')
    }else{
         console.log(`O Valor 8 está na index ${pos}`)
    }
   