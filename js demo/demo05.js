/* prototype  an object belongs to any JS function */
//ES5


function A(){

	this.value =10;
	this.getValue = function getValue(){
		return this.value;
	}
}

var a1 = new A();
var a2 = new A();
console.log(a1.getValue === a2.getValue);
/* prototype and prototype chain
	Any js function has a prototype property that links to the function's prototype object
	Any Object has a __proto__ property that links to its constructor function  prototyoe object
*/

function B(){
	this.value =20;
}
B.prototype.getValue = function getValue(){
	return this.value;
};
var b1 =new B();
var b2 =new B();

console.log(b1,b2);
console.log(b1.getValue(),b2.getValue());
console.log(b1.getValue === b2.getValue);


//上面的没懂

//inheritance

//draw picture for below code
function Parent(){
	this.x = 10;
}
Parent.prototype.y =20;
function Child(){
	this.z =30;
}
var p = new Parent();//find a object both have x and y
console.log(Child.prototype.constructor);//Child
Child.prototype =p;//follow p's prototype chain

var c =new Child();
console.log(c.x,c.y,c.z);//10,20,30
console.log(c.constructor);//x child but Parent


//utimate solution for ES 5 inheritance
//idea samiler , both change prototype

/*
	1.get everything on parent to child using call/apply/bind
	2.set child prototype to parent prototype with Object.create
	3.fix constructor pointer
*/

function P () {
	this.x =10;

}
P.prototype.y = 20;


function C(){

	//simulate super();
	P.apply(this);
	this.z =30;
}
C.prototype = Object.create(P.prototype);// Object create

var c =new  C();
//reset the constructor
C.prototype.constructor =C;
console.log(C.x,c.y,c.z);
console.log(c.constructor);


c.hasOwnProperty('y'); // for check prototype chain ====>false

console.log(P.isPrototypeOf(c)); // false  === only the prototype 
//P.proptype is Prototype of c;
console.log(c instanceof P);//true   ---- is a relationship







































