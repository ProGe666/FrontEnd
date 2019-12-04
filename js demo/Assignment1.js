/* assignment */
var order = {
    price: 100,
    calculate: function calculate() {
        return {
            getTotal: function getTotal(qty) {
                return qty * this.price;
            }
        };
    }
}
// how to invoke getTotal(5)? and output 500?
// var cal = order.calculate();
// var func= cal.bind(order)();
// var f =func.getTotal;
// var total= f.call(order,5)
// console.log(total);

var cal = order.calculate();
var fun =cal.getTotal;

//var res = fun.call(order,5);
//var res = fun.bind(order)(5);
var res = fun.apply(order, [5]);
console.log(res);

console.log(order.calculate().getTotal.call(order, 5));


order.calculate().getTotal.bind(order)(5);


















