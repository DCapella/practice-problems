function reverseString(item) {
  let itemArr = item.split('');
  let itemArrRev = itemArr.reverse();
  let itemRev = itemArrRev.join('');
  return itemRev;
}

console.log(reverseString("hello") === "olleh" ? 'PASS' : 'FAIL: ' + reverseString("hello"));
console.log(reverseString("Howdy") === "ydwoH" ? 'PASS' : 'FAIL: ' + reverseString("Howdy"));
console.log(reverseString("Greetings from Earth") === "htraE morf sgniteerG" ? 'PASS' : 'FAIL: ' + reverseString("Greetings from Earth"));
