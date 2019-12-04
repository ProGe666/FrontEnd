/*
	ES6
	Promise
		Is an object which wraps an async operation that may succeed or fail
		Promise has 3 states: Pending ,Resolved;Rejected
		When async operation is still in process,promise is pending
		When successfully finished, it will be resolved by calling resolve()
		When failed ,it will be rejected by calling reject()
*/



//whatever promise can do , we can do it with callback 

//callback function
//callback hell: nested(/adj. 嵌套的，内装的/) callback

/*
sudo code
askForDate(result){
	if (date.isWeekend()){
		askForDate(weather,cb);
		function cb(){
			if(weather.isGood()){
				askForDate(weather,cb);
					function cb(){
						if(weather.isGood()){
							...
			}
		}
	}
			}				
		}
	}
}
*/


//1st,2nd paramater both are reference of function
// var myDemoPromise = new Promise(function demoPromise(resolve,reject){
// 	var res = Math.ranadom();//Math.ranadom()===in java === get 0-9
// 	res>0.5? resolve():reject();

// });
// myDemoPromise
// 	.then(function resolved(res){
// 		console.log('Promise is resolved', res.toFixed(2));
// 	})
// 	.catch(function rejected(res){
// 				console.log('Promise is rejected', res.toFixed(1));
// 		});
// myDemoPromise
// 	.then(function resolved(res){
// 	 	console.log('Promise is resolved', res.toFixed(2));
// 	})
// 	.catch(function rejected(res) {
// 		console.log('Promise is rejected', res.toFixed(3));
// 	});



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



function takeAnExam(){
	return new Promise(function takeExam(resolve,reject){
		setTimeout(function takingingExam(){
			if(Math.ranadom() < 0.5){
				console.log('Passed the exam!');

				resolve();
			}else{
				console.log('Failed the exam');
				reject();
			}
		},2000);
	});
}

function retakeAnExam(){
	return new Promise(function retakeExam(resolve,reject){
		setTimeout(function retakingingExam(){
			if(Math.ranadom() < 0.5){
				console.log('Passed the retake!');

				resolve();
			}else{
				console.log('Failed the retake');
				reject();
			}
		},2000);
	});
}


//how to write promise handling part


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

	// .catch(function createExamFailed(err){

	//try return and throw error to stop

	// });









