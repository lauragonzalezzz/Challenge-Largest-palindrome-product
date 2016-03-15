/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;
  var max;

	if ( digits === 2) {
		max = 100;
	}

	if (digits === 3) {
		return max = 1000;
	}


  for (var factor_0 = 1; factor_0 < max; factor_0++) {
  	for (var factor_1 = 1; factor_1 < max; factor_1++) {
  		var product = factor_0 * factor_1;
  		var arr = product.toString().split('')
  
 		if (arr.length === 4) {
 			console.log(arr);
 			if (arr[0] == arr[3] && arr[1] == arr[2]) {
 			var myDigits = arr.join('');
 			myDigits = parseFloat(myDigits);
 			console.log(myDigits);
 				if (myDigits > palindromeNumber) {

 					palindromeNumber = myDigits;
 		}
 		}
 		} else if (arr.length === 6) {
 			if (arr[0] === arr[5] && arr[1] === arr[4] && arr[2] === arr[3]) {
 				var myDigits = arr.join('');

 				if (myDigits > palindromeNumber) {
 				palindromeNumber = Number(myDigits);

 			}
 		}
  	}
  } palindromeNumber = myDigits;
}




  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};