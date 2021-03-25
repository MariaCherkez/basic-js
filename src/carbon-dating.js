const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	if(!sampleActivity || parseInt(sampleActivity) == 0)
		return false;
	if(typeof sampleActivity != 'string')
		return false;
	if(isNaN(parseFloat(sampleActivity)))
		return false;	
	if(parseFloat(sampleActivity) < 1 || parseFloat(sampleActivity) >  MODERN_ACTIVITY)
		return false;  
  return Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/(Math.log(2)/HALF_LIFE_PERIOD));
}; 
