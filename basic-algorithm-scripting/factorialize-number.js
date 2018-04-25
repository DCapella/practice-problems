function factorialize(num) {
  if (num == 0) {
    return 1;
  }
  let output = Array.from(Array(num).keys(), i => i + 1);
  return output.reduce((a,b) => a * b);
};


// Test area

const testArr = [5, 10, 20, 0];

const answerArr = [120, 3628800, 2432902008176640000, 1];

for (var i = 0; i < 4; i++) {
  let output = factorialize(testArr[i]);
  let expected = answerArr[i];
  let result = output == expected;
  let fail = output + ' does not equal ' + expected;

  console.log(result ? 'Success' : fail);
};