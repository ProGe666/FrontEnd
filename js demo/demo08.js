/*
	Promise (SE6)- NodeJS suports ES6
	Promise is an object which wraps an asynchronous operation that may succeed or fail
	Promise has 3 states: pending, resolved, rejected
	When async operation is still in process, promise is pending
	When successfully finished, it will be resolved by calling resolve()
	When failed, it will be rejected by calling reject()
*/



// callback, whatever promise can do can be achieved by callback function

// callback hell: nested callback

// below example
// askForDate(date) {

// 	if (date.isWeekend()) {
// 		askForWeather(weather);
// 		function cb(weather) {
// 			if(weather.isGood()) {
// 				...
// 			}
// 		}
// 	}
	
// }


// can be anonymous, but name is suggested
// resolve, reject recommended in params
// resolve(),reject() accpet params, normally data
var myDemoPromise = new Promise(function demoPromise(resolve, reject){
	var res = Math.random();
	res > 0.5 ? resolve(res) : reject(res);
});


/*
	One way - .then handles both situation
*/

// myDemoPromise
// 	.then(function resolved(res) {
// 		console.log('Promise is resolved', res.toFixed(2));
// 	}, function rejected(res) {
// 		console.log('Promise is rejected', res.toFixed(3));
// 	});


/*
	Other way - if rejected, directly use .catch to handle
*/

myDemoPromise
	.then(function resolved(res){
	 	console.log('Promise is resolved', res.toFixed(2));
	})
	.catch(function rejected(res) {
		console.log('Promise is rejected', res.toFixed(3));
	});


function createAnExam(){
	return new Promise(function createAnExam(resolve, reject){
		setTimeout(function creatingExam(){
			if (Math.random() < 0.5) {
				console.log('Exam created!');
				resolve(); // important, or else pending
			} else {
				console.log('No exam created...');
				reject();
			}
		}, 2000);
	});
}

// if the returned promise object created by takeExam() is rejected, that will also be handled by catch part
// Then if catch part is hit, no way to figure out the reason which caused catch
// createAnExam()
// 	.then(function createExamSuccess() {
// 		console.log('Exam is created, taking exam');
// 		return takeExam();
// 	})
// 	.catch(function createExamFailed() {

// 	})
// ;


function takeExam(){
	return new Promise(function takeExamPromise(resolve, reject){
		setTimeout(function(){
			if(Math.random()<0.5) {
				console.log('PASS the exam');
				resolve();
			} else {
				console.log('FAILED the exam');
				reject();
			}
		})
	});
}

function retakeExam(){
	return new Promise(function retakeExamPromise(resolve, reject){
		setTimeout(function(){
			if(Math.random()<0.5) {
				console.log('PASS the retake');
				resolve();
			} else {
				console.log('FAILED the retake');
				reject();
			}
		})
	});
}


createAnExam()
	// promise chain
	.then(function createExamSuccess() {
		console.log('Exam is created, taking exam');
		return takeExam();
	}, function createExamFailed() {
		console.log('Exam is canceled, hurray');
		/* 
			There is no way to jump out of the promise chain
			JS will wrap returned statement in a resolved promise if no error
			JS will wrap error in a rejected promise
		*/
		throw new Error('No exam created error');
		// return 0; not work either
		// break; not work, for jumping out of a loop
	})
	.then(function passedExam(){
		console.log('Good job! Good to go');
		throw new Error('Passed exam error'); 
	}, function failedExam(res){

		if (res instanceof Error) {
			throw new Error(res.message);
		} else {
			console.log('retaking...');
			return retakeExam();
		}
		
	})
	.then(function passedRetake(){
		console.log('That was a close call!');
	}, function failedRetake(res){
		if (!(res instanceof Error)) {
			console.log('Too bad, sorry, bye...');
		}
	})
;
