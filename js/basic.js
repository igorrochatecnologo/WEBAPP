console.log('Olá, Javascript!')

var userName = 'Igor Rocha'

document.getElementById('user-name').innerHTML = userName

// Variáveis //
// var nome = 'Metre Yoda'
// var idade = 100
// var jedi = true

// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof jedi)

// Controle de Fluxos //

// Sendo um cliente correntista do banco.
// Posso sacar dinheiro em caixas eletrônicos.
// Para poder comprar em lugares que não aceitam cartão de débito ou crédito.

//var saldo = 1000

//function saque(valor) {
//    if (valor > saldo) {
//        console.log('Valor do saque superior ao saldo')
//    } else if (valor > 700) {
//       console.log(' Valor do saque é superior ao máximo permitido por operação')
//    } else {
//        saldo = saldo - valor
//    }
//}

//saque(701)
//console.log(saldo)


// Cenario 1: Saque com sucesso
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 500 reais
// Então o valor do saque deve ser deduzido do meu saldo

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Cenario 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 1001 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Cenario 3: Saque com valor máximo
// Dado que meu saldo é de 1000 reais
// E o valor máximo por operação é de 700
// Quando faço um saque no valor de 701 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido por operação



// Arrays //

//var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']

//console.log(gaveteiro[1])

var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

personagens.push('c3pO')

console.log(personagens)