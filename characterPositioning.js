var strCount = {

};

function countLetters (str) {

  str = str.split(" ").join("").split("");

  for (let i = 0; i < str.length; i++) {

    if (!strCount[str[i]]) {
      strCount[str[i]] = [i];
    }
    else {
      strCount[str[i]].push(i);
    }
  }
  return strCount;
}

console.log(countLetters("lighthouse in the house"));

// strCount {
//   l: [0]
//   i: [1, 10]
//   g: [2]
//   h: [3, 5, 13, 15]
//   t: [4, 12]
//   o: [6, 16]
//   u: [7, 17]
//   s: [8]
//   e: [9, 14, 19]
//   n: [11]
//   s: [18]
//

// }