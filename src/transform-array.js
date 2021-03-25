const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
     if (!Array.isArray(arr))
	throw new Error('Not array');   
	let res = []; 
	 for (let i = 0; i < arr.length; i++) {
	 
	 
		if (arr[i] == '--double-prev' && i != 0) {
			if (arr[i - 2] != '--discard-next')    
					res.push(arr[i - 1]);     	
		} 
		else if (arr[i] == '--discard-prev' && i != 0) {
			if (arr[i - 2] != '--discard-next')    
					res.pop();     	
		} 
		else if (arr[i] == '--discard-next' && i != arr.length-1)		 
			i++; 	  
		else if (arr[i] == '--double-next' && i != arr.length-1)
			res.push(arr[i + 1]);  
		else if ( arr[i] !== '--discard-next' && arr[i] !== '--discard-prev' && arr[i] !== '--double-prev' && arr[i] !== '--double-next') 
			res.push(arr[i]);    
	 }  
	return res;  
};
