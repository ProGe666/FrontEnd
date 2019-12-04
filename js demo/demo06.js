/* JavaScript runtime is single-threaded

	simulate muliti-threading
	browser HTML5 web worker
	for nodeJS: Child PRocess, Cluster module
*/


//setTimeout
var delayTimeout = setTimeout(function delay(){	
	console.log('time out');
},4000); // defaut 2nd paramater is 0; 
console.log('outside of time out');//js doesn't wait synchronized operation


//     Whenever seeing asynchronous operation such as setTimeout,
//     it will be moved to Web APIs (pool),
//     Once the function is timed out in Web APIs,
//     it will be moved to Queue. JS continue
//     execution of rest of synchronous codes. When Stack is empty,
//     js starts to move functions from Queue to Stack for execution.
//     **** All the async functions will be
//     executed after sync functions/operations.


//setInterval()
var myInterval = setInterval(function interval(){
	console.log(new Date());
},1000);


setTimeout(function stop(){
	clearTimeout(delayTimeout); //find it global
	clearInterval(myInterval); //global
},2000);


// hw 2 : use setTimeout to implement setInterval






