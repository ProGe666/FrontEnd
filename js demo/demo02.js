/*
	JavaScript call by sharing
	object :(function, array, date,object,regex...)
*/

//1.{} object literal
var s1 ={};//create empty object
s1 = {
	name: 'Bob',
	sayHello:function sayHello(){
		console.log('hello',this.name);
	}
};

s1.name ='peter';

//to access a property : dot notation\
console.log(s1.name);
s1.sayHello();
//dot notation to add a property
s1.age = 12;


//1st param: object to modify
//2nd param: a string , the property to modify
//3rd param: is an object called configuration object
Object.defineProperty(s1,'gender',{
	value:'male',
	//writable: true,

	configurable: true,
	enumerable :true//default false
	//what is enumerable
});
console.log(s1.gender);
console.log(s1);
s1.gender = 'female';
console.log(s1.gender);

Object.defineProperty(s1,'gender',{
	value:'Alien',
	//writable: true,
	enumerable :true//default false
	//what is enumerable
});
console.log(s1);



var key = Object.keys(s1);
for(var i=0;i<key.length;i++){
	var key = key[i];
	//square bracket notation
	console.log(key[i],s1[key]);

}

//syntax sugar
for(var key in s1){
	console.log(key,s1[key]);
}

var addr;
Object.defineProperty(s1, 'addr', {
	get:function(){
		console.log('in getter');
		return addr;
	},
	set:function(newAddr){
		addr = newAddr;
	},
});

s1.addr = 'abc' //invoke setter
console.log(s1.addr); //invoke getter

s1 = {
	_name:'bob',
	get name(){
		return this._name;
	},
	set name(n){
		this._name = n;
	}
};
//2. new .
/*
ES 5 has no class,But we can simulate a constructor
*/
//function people(){}
function Student(name){
	this.name = name;
	this.sayHello = function sayHello(){
		console.log('hello',this.name);
	}
}
var s2 = new Student;
s2.sayHello();

//object status
//1,extensible:can add new property


var obj = {};
obj['x'] =1;
console.log(obj,Object.isExtensible(obj));//x:1
Object.preventExtensions(obj);
obj['y'] =2;
console.log(obj,Object.isExtensible(obj));

//2.sealed: can't add/remove property
var obj2 = {
	x:1
};
obj2.y =2;
console.log(obj2,Object.isSealed(obj2));//x:1,y:2

Object.seal(obj2);
obj2.z =3;
delete obj2.y;
console.log(obj2,Object.isSealed(obj2));

//3. frozen: can't add/remove/update property
var obj3 = {
	x:1,
	y:2
};
Object.freeze(obj3);
delete obj3.y;
obj3.x =10;
obj3.z = 3;
console.log(obj3,Object.isFrozen(obj3));





































