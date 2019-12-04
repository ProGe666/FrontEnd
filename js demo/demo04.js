/* *****
closure

what is closure:
closure is talking about function inside of another function
After outer function is executed , JS will create a closure 
to store all the outer function's local variables which are
used/referenced in returned inner function

benefit: avoid creatin global variables
dosadvantage: Memory leak
*/


function outer(){
	var x= 1,
		y=2;
	function inner(){
		console.log(x); //1
	}
	var obj ={
		hello:function(){console.log(x);}
	};
	return obj;
	//return inner;//reference of the inner function
}

var  myInner =outer();//====closure created
var  myInner =outer();//there will be a new closure created
//myInner(); //1 :because of closure
myInner.hello(); // there will be a closure


function counterFactory(){
	var count = 0;
	return {
		getCount: function getCount(){
			return count;
		},
		setCount:function setCount(c){
			count =c;
		}
	};
}

var counter = counterFactory();
counter.setCount(5);
console.log(counter.getCount());



//(test) interview question
// function increaseFactory(){
// 	var count =0;
// 	return function(){
// 		console.log(++count);
// 	}
// }

// var myIncrease =increaseFactory();
// myIncrease(); myIncrease();//1,2


var myIncrease = (
	function increaseFactory(){
	var count =0;
	return function(){
		console.log(++count);
	}
})();

myIncrease();//1 
myIncrease();//2


//Exam question
console.log('**************');
function MyClass(){
	this.x= 100;
	var y = 'abc';
	var getX = function(){
		console.log(this.X),  //undefined
		console.log(y); //'abc'
	};
	getX();
	this.getY = function(){
		console.log(this.x); //100
		console.log(y); //'abc' from closure
	}
}

var MyClass =new MyClass(); // when new , get an object
MyClass.getY();


/* in this myclass object{
	x
	getY()
}
*/ 

// only point this can put param into myClass object
//hosting + try catch
//output
/*
abc
100
abc
*/
















