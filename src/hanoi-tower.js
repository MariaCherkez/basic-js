const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
	let res = {};
	res.turns = 2**disksNumber-1;
	res.seconds = Math.floor(60*res.turns*60/turnsSpeed);
	return res;
};
