function palindrome(str) {
  let strGiven = str.replace(/[\W_]+/g, '').toLowerCase();
  let palindromeCheck = strGiven.split('').reverse().join('');
  return strGiven == palindromeCheck;
}

// Test area

const testArr = [
  'eye',
  '_eye',
  'race car',
  'not a palindrome',
  'A man, a plan, a canal. Panama',
  'never odd or even',
  'nope', 'almostomla',
  'My age is 0, 0 si ega ym.',
  "1 eye for of 1 eye.",
  "0_0 (: /-\ :) 0-0",
  "five|\\_/|four"
];

const answerArr = [
  true,
  true,
  true,
  false,
  true,
  true,
  false,
  false,
  true,
  false,
  true,
  false
];

const testArrLen = testArr.length;
for (var i = 0; i < testArrLen; i++) {
  let output = palindrome(testArr[i]);
  let expected = answerArr[i];
  let result = output == expected;
  let fail = '"' + output + '" does not equal ' + expected;

  console.log(result ? 'Success' : fail);
};
