function smallestMissingPositiveInteger(nums) {
  const positiveNums = nums.filter(num => num > 0);
  positiveNums.sort((a, b) => a - b);

  let smallestMissing = 1;
  for (let i = 0; i < positiveNums.length; i++) {
      if (positiveNums[i] === smallestMissing) {
          smallestMissing++;
      } else if (positiveNums[i] > smallestMissing) {
          return smallestMissing;
      }
  }

  return smallestMissing;
}

module.exports = smallestMissingPositiveInteger;

