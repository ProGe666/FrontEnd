/*     *******!!!!****** this key word   */
/*
	in non-constructor function,this points to caller of the function,
	if there is no caller ,this point to global;
	in constructor function, this points to the newly created object
*/
function Vehicle (brand) {

	this.brand = brand;//return this;
	//this.brand = NaN; //return NaN
}

var v =new Vehicle('Toyota'); //call a object
console.log(v);//brand:Toyota

var u = Vehicle('Honda');// call a function(Vehicle) , function result from return, in here undefined  will be return,gets assigned to u
console.log(u);//undefined

console.log(global.brand);



var bob ={
	name:'bob',
	// hello:function hello(){
	// 	console.log('hello',this.name);
	// }
	hello:function hello(prefix, suffix){
		console.log('hello',prefix, this.name, suffix);
	}
};


bob.hello();//hello bob
//caller is bob
var myHello = bob.hello;
myHello();//hello undefined.  when we call myHello. this.name 里的 this, point to sth we don't know.
//myHello() no caller

/* How to change binding of this */
//1.call : 1st param is the new binding of this
//myHello.call(bob);//hello bob
myHello.call(bob,'Mr','Great');
myHello.call({name:'Charlie'});//hello Charlie

//2.apply
//myHello.apply(bob);//hello bob
myHello.apply(bob,['Mr.', 'Bad']);
//3.bind -- bind will not invoked the function ,but return new function has the binding changed.
//bind sth=====give u a new function
// myHello.bind(bob);//no output
myHello.bind(bob)();//hello bob

myHello.bind(bob)('Jr.','Struggle');
myHello.bind(bob,'Jr.','Struggle')();
myHello.bind(bob,'Jr.')('Struggle');





var order = {
    price: 100,
    calculate: function calculate() {
        var self =this;
        return {
            getTotal: function getTotal(qty) {
                return qty * this.price;
            }
        };
    }
}
	
order.calculate().getTotal(5);


/*SOLID principle*/
function checkout(price, member){
	switch(member){
		case 'VIP':
			return price *0.7;
		case 'Premium':
			return price *0.6;
		default:
			return price;
	}
}
console.log(checkout(500, 'VIP'));//350

//Open for extensions
var MEMBERSHIP = {
		vip:0.7,
		Premium:0.6
}
//close for modification
function checkout2(price, member){
	return price * (MEMBERSHIP[member] || 1);
}
var MEMBERSHIP = {
		vip:0.5,
		Premium:0.4
}

function checkout3(pricem,member){
	return price * (this[member] || 1); 
}
console.log(checkout3.call(MEMBERSHIP,500,'VIP'));
console.log(checkout3.call(MEMBERSHIP_CHRISTMAS,500,'VIP'));




