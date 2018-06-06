//function - countLetters, returns all unique characters in a string passed into function
//function - also reports back how many instances of each letter found in string
//needs to return an object --
// { l: 1, i: 2, g: 1, h:4, t: 2, o: 2, }
//note: skip and don't count spaces

var strCount = {

};

function countLetters (str) {

  str = str.split("");

  for (let i = 0; i < str.length; i++) {

    if (str[i] == " ") {

    }
    else if (!strCount[str[i]]) {
      strCount[str[i]] = 1;
    }
    else {
      strCount[str[i]] ++;
    }
  }
  return strCount;
}

console.log(countLetters("developer elephant"));


//does count letter onj exisit?
//if not - create   onj.key = value;
