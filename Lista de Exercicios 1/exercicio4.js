/* 
    4) Considerando que para um consórcio, sabe-se o número total de prestações, a quantidade de prestações pagas e o valor atual da prestação, escreva um algoritmo que determine o total pago pelo consorciado e o saldo devedor.
*/

var numeroTotalPrestacoes = parseInt(prompt("Digite o número total de prestações"));
var qtdePrestacoesPagas = parseInt(prompt("Digite a qtde de prestações pagas"));
var valorPrestacao = parseInt(prompt("Digite o valor das prestações"));

var totalPago = valorPrestacao * qtdePrestacoesPagas;
var valorTotalConsorcio = valorPrestacao * numeroTotalPrestacoes;
var saldoDevedor = valorTotalConsorcio - totalPago;

alert("Total pago: " + totalPago + " | Saldo devedor: " + saldoDevedor);
