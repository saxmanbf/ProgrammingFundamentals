module.exports.primeTest = number => {

	// generate an array of all integers between 
	// two and one less than the input number
		var list = [];
	for (var i = 2; i <= number-1; i++) {
    	list.push(i);
	}

	// initialize empty array to hold test results
	// for each integer generated above
	let results = [];

	// test if 'number' is evenly divisible by 
	// each number generated in 'list'
	for (var j = 0; j < list.length; j++) {
		if (number > 1 && number % list[j] !== 0) {
			results.push(true)
		} else {
			results.push(false)
		}
	}	

	// check if any of the outputs pushed to 'results'
	// were 'false', indicating a factor
	if (results.indexOf(false) === -1) {
		var answer = true
	} else {
		var answer = false
	}

	// return if the input is prime or not
	return answer

}
