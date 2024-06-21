function findUnique(nums) {
  const freqs = {};
  for (let num in nums) {
    freqs[num] = num in freqs ? freqs[num] + 1 : 1;
  }

  for (let [key, value] of Object.entries()) {
    if (value === 1) return Number(key);
  }
}