'use strict'
//turn on strict mode in JS
// "" and '' they have no difference.
console.log('Hello World');

/* Primitive data types*/
//1.String
console.log('hello "bob"\'s javascript');

// 2.Number
// console.log(+1);console.log(-1.0);
// console.log(0.1+02);//0.3.....
//how to fixed it 


//3.booleam true/flase

console.log(true);

//4.undifined is a type/value
//which is assigned to a variable declared without an initial value
console.log(undefined);
//5.null(type/value)
//typically null is a value developer set to a variable indicatin this variable has no value
//variable has no value
console.log(null);

var x;
console.log('x:',x,typeof x);//undefined 
x = null;
console.log('x:',x,typeof x); //null object(bug of javascript)
console.log(100 + 200 + 300);


try{
	console.log(y); //not defined error
	//var y = 'jack'  // it won't be run, js 1st scan,then into this loop
}catch (error){
//without write error, it still print logging
	console.log('logging:' , error);
}finally{
	console.log('end of try catch');
}

//check variable type
var name ='peter';
if(typeof name =='string'){
	console.log('name is a String');

}

if(x == undefined){
	console.log('null == undefined');
}

//reason that js didn't fix this bug
if(!x && typeof x == 'object'){
	console.log('x is null');
}


/*
falsy values in js: undefined , null , NaN , 0 , "" (empty string), and false 
*/
// == vs ===
//== compare variable value
//=== compare variable value  and type
//you should only use === in js unless you know what you are doing with

console.log(undefined === null); //false
/*

	function in JS
	function a(){
		console.log('a');
	}
	a();
*/

global.name1 ='globalname';
function sayHello(name){
	console.log('Hellp',name);
}
sayHello('Alice');


// name is in file scope(only in node.js)
var name = 'Bob';
name = 'Dan';
/*
no overloding in JS
function creates a scope in JS
*/
function sayHello(n){
	//javascripy will search for local variable first if js can't find
	//that variable ,it will search for file scope(NodeJS),and finally global scope,
	//if it can't find variable in global,it will throw a referenceError :Not defined error
	console.log('Hello', name1);

	//implicitly creates a global variable

	//follows the same rule for search,but if variable is not foune under global,
	//js will create that variable under global and do the assignment
	//name 2 = 'surprise'; 
	// no error------this called assignment
	//console.log(name2)// surprise
}

sayHello('Charlie');
console.log(global.name2);

/*
	hoisting:
	JavaScript will move variable declaratioin and function declaration 
	to the top of the CURRENT scope
*/

console.log(h);//
var h =12;//current scope:file scope

sh()//,sh2();//undefined()
function sh (){
	console.log('sh');
}

var sh2 =function (){
	console.log('sh2');
};

//IIFE:Immediately Invoked Function Expression
//self-invoke function
(function(param){
	console.log(param,'IIFE');
})('test')

//life(); not working

//NaN: not a number
var nan= NaN;
console.log(isNaN(nan));//true
console.log(isNaN('hello'));//true


//check isNumber
console.log(Number.isNaN(nan));//true
console.log(Number.isNaN('hello again'));//false
console.log(typeof NaN);//number
console.log(nan ==NaN); //false   why
console.log(nan == nan); //false   why




























