const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
if (!options)
		return String(str); 
	 
	if (str && typeof str !== 'string')
		str = String(str); 
	if (options.addition && typeof options.addition !== 'string')
		options.addition = String(options.addition);	 
	 if (!options.separator)
		options.separator = '+'; 
	 if (!options.additionRepeatTimes && options.addition)
		options.additionRepeatTimes = 1;
	 if (!options.additionSeparator)
		options.additionSeparator = '|';
	 
  
	let part = "" + str; 
	
	for (let j = 0; j < options.additionRepeatTimes; j++) {
		if (j != options.additionRepeatTimes - 1) 
			part += options.addition+options.additionSeparator;  
		else
			part += options.addition;
	}	
	
	str = "" + part;	
	
	for (let i = 1; i < options.repeatTimes; i++) {
		if (i != options.repeatTimes) 
			str += options.separator;
		str += part; 
	}
	
	return str; 
};
