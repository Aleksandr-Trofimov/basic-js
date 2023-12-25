const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let numStr = String(n);
	let arr = numStr.split("");
	let newArr = arr;
	let nIndex = null;
	let result = null;
	for (let i = 0; i < arr.length; i += 1) {
		if (arr[i] < arr[i + 1]) {
			nIndex = arr.indexOf(arr[i]);
			newArr.splice(nIndex, 1);
			return (result = Number(newArr.join("")));
		}
	}
	nIndex = -1;
	newArr.splice(nIndex, 1);
	return (result = Number(newArr.join("")));
}

module.exports = {
	deleteDigit,
};
