const CustomError = require("../extensions/custom-error");
class VigenereCipheringMachine {
	constructor(isStraight = true) {
		this.isStraight = isStraight; 	
  }
  
  encrypt(message, key) {
	if (!message || !key)
		throw new Error('undefined'); 
	
	const arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];	 
	let k = -1;
	
	key = "".padStart(message.split('').filter(e => arr_EN.indexOf(e.toUpperCase()) != -1).length, key).split(''); 	
	let result = message.split('').map(function(e,i) {
		if (arr_EN.indexOf(e.toUpperCase()) === -1)
			return e;
		else	
			return arr_EN[(arr_EN.indexOf(e.toUpperCase()) + arr_EN.indexOf(key[++k].toUpperCase()))% 26];
	});		
	
	return this.isStraight ? result.join('') : result.reverse().join('');  
  }   
  
   decrypt(message, key) {
	if (!message || !key)
		throw new Error('undefined');
	
	const arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];	
	let k = -1;
	
	key = "".padStart(message.split('').filter(e => arr_EN.indexOf(e.toUpperCase()) != -1).length, key).split('');  
	
	let result = message.split('').map( function(e,i) {
		if (arr_EN.indexOf(e.toUpperCase()) === -1)
			return e;
		else {
			let index = (arr_EN.indexOf(e.toUpperCase()) - arr_EN.indexOf(key[++k].toUpperCase()))% 26;
			if (index >= 0)
				return arr_EN[index];
			else {
				return arr_EN[arr_EN.length + index]; 
			} 
		} 
	}); 
	return this.isStraight ? result.join('') : result.reverse().join('');    
  }
} 

module.exports = VigenereCipheringMachine; 
