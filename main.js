var firstReverse = function(str) {
	return str.split('').reverse().join('');
};

var swapCase = function(str) {
	var strArr = str.split('');
	var newArr = [];
	for(var i = 0; i < strArr.length; i++) {
		if(strArr[i].toUpperCase() === strArr[i]) {
			newArr.push(strArr[i].toLowerCase());
		}
		else {
			newArr.push(strArr[i].toUpperCase());
		}
	}

	return newArr.join('');
};


// var letterCount = function(str) {
// 	for(var i = 0; i < str.length; i++) {
		
// 	}
// };