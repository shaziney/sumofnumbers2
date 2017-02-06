/**
 ** Solving Experience E26.
 * http://courses.ics.hawaii.edu/ics314s17/morea/coding-standards/experience-five-problems-1.html
 * Created by shaziney on 2/5/17.
 * Attempt: 2
 */

const testNums = [1, 2, 3, 4];

function sumFor(nums) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
}

console.log(sumFor(testNums));

function sumWhile(nums) {
  let sum = 0;
  let i = 0;
  while (i < nums.length) {
    sum += nums[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(testNums));

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

console.log(sumRecursion(testNums));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function adder(memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(testNums));