function titleCase(str) {
  let strArr = str.split(' ');
  let output = [];
  strArr.forEach((word) => {
    let wordArr = [];
    word.split('').forEach((letter, index) => {
      wordArr.push((index == 0) ? letter.toUpperCase() : letter.toLowerCase());
    });
    output.push(wordArr.join(''));
  });
  return output.join(' ');
}

// Test area

const testArr = [
  "I'm a little tea pot",
  "sHoRt AnD sToUt",
  "HERE IS MY HANDLE HERE IS MY SPOUT"
];

const answerArr = [
  "I'm A Little Tea Pot",
  "Short And Stout",
  "Here Is My Handle Here Is My Spout"
];

const testArrLen = testArr.length;
for (var i = 0; i < testArrLen; i++) {
  let output = titleCase(testArr[i]);
  let expected = answerArr[i];
  let result = output == expected;
  let fail = '"' + output + '" !== ' + expected;

  console.log(result ? 'Success' : fail);
};
