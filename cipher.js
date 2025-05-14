function enDeCode(userString, encode, userKey) {
  if (typeof userString !== "string" || userString?.length === 0) {
    return false;
  }

  let cleanString = userString.trim().toLowerCase();
  let outputMessage = [];
  let flag = true;

  if (encode.checked) {
    flag = true;
  } else {
    flag = false;
  }

  for (let i = 0; i < cleanString.length; i++) {
    outputMessage.push(codeLetter(cleanString[i], userKey, flag));
  }

  return outputMessage.join("");
}

function updateHTMLContent() {
  let userString = document.getElementById("userMessage").value;
  let encode = document.getElementById("encode");
  let userKey = document.getElementById("userKey").value;

  const encodedDecodedText = enDeCode(userString, encode, userKey);

  document.getElementById("output").value = encodedDecodedText;
}

function convertIndexToLetter(index) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet[index];
}

function convertLetterToIndex(letter) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet.indexOf(letter);
}

function calculateNewIndex(letter, userKey, encode) {
  let index = convertLetterToIndex(letter);

  if (index === -1) {
    return index;
  }

  if (encode) {
    index = index + Number(userKey);
  } else {
    index = index - Number(userKey);
  }

  if (index > 25) {
    index = index - 26;
  } else if (index < 0) {
    index = index + 26;
  }
  return index;
}

function codeLetter(letter, userKey, flag) {
  let letterRegEx = /[^a-z]/;

  if (letterRegEx.test(letter)) {
    return letter;
  } else {
    let newIndex = calculateNewIndex(letter, userKey, flag);
    let codedLetter = convertIndexToLetter(newIndex);
    return codedLetter;
  }
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = { enDeCode };
}
