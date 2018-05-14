function findLongestWord(str) {
  let arr = str.split(' ');
  let count = 0;
  arr.forEach((word) => {
    count = (word.length > count) ? word.length : count;
  });
  return count;
}

// Test area

const testArr = [
  "The quick brown fox jumped over the lazy dog",
  "May the force be with you",
  "Google do a barrel roll",
  "What is the average airspeed velocity of an unladen swallow",
  "What if we try a super-long word such as otorhinolaryngology"
];

const answerArr = [
  6,
  5,
  6,
  8,
  19
];

const testArrLen = testArr.length;
for (var i = 0; i < testArrLen; i++) {
  let output = findLongestWord(testArr[i]);
  let expected = answerArr[i];
  let result = output == expected;
  let fail = '"' + output + '" does not equal ' + expected;

  console.log(result ? 'Success' : fail);
};
