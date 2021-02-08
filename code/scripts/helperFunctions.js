// Collection of functions that are generci and can be reused across multiple files.

/**
 * Get a random number based on a range.
 *
 * @param {Number} maxNumber - The maximum number of the random range
 * @param {Boolean} includeZero Whether or not to generate random number 0-maxNumber or 1-maxNumber
 * @returns {Number}
 */
export const getRandomNumber = (maxNumber, includeZero) => {
  if (includeZero) {
    return Math.floor(Math.random() * maxNumber);
  } else {
    return Math.floor(Math.random() * maxNumber + 1);
  }
};
