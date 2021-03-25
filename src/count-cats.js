const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
	return matrix.reduce((s, e) => s + e.filter( c => c === '^^').length, 0);
};
