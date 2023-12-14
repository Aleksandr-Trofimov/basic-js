const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

function dateSample(sampleActivity) {
	const MODERN_ACTIVITY = 15;
	const HALF_LIFE_PERIOD = 5730;
	if (
		Number(sampleActivity) > 0 &&
		Number(sampleActivity) < 15 &&
		typeof sampleActivity === "string"
	) {
		const numberSampleActivity = Number(sampleActivity);
		const deltaA = MODERN_ACTIVITY / numberSampleActivity;
		const rateOfReaction = 0.693 / HALF_LIFE_PERIOD;
		const result = Math.log(deltaA) / rateOfReaction;
		return Math.ceil(result);
	}
	return false;
}

module.exports = {
	dateSample,
};
