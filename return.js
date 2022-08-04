function add(number1, number2){
    // console.log(number1, number2);
    var sum = number1 + number2;
    // console.log(sum);
    // return sum;
}
// add(25, 15);
var total = add(45, 55);
// console.log('total:', total);
function singraNeed(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}
var myTaka = 150;
var sigaras = singraNeed(myTaka);
// console.log('Eating sigaras : ', sigaras);

// function orange(tk){
//     var orangePrice = 20;
//     var item = tk / orangePrice;
//     return item;
// }
// var myMoney = 500;
// var orangesTotal = orange(myMoney);
// console.log(orangesTotal);

function apple(paisa){
    var perApplePrice = 50;
    var buyApple = paisa / perApplePrice;
    return buyApple;
}
var tk = 1000;
var amount = apple(tk);
console.log(amount);