

function rot13(message, n) {
  let caesarCipher = [];
  // prettier-ignore
  const alphabetLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
  // prettier-ignore
  const alphabetUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
  // prettier-ignore
  let spChar = "/[!@#$%^&*()_+-=[]{};':\\|,.<>/?]+/";
  message = message.split("");
  console.log(message);
  message.forEach((item, index, arr) => {
    console.log(item);
    if (Number(parseFloat(item)) || item === "0") {
      caesarCipher.push(item);
    } else if (item === " ") {
      caesarCipher.push(" ");
    } else if (spChar.indexOf(item) > -1) {
      caesarCipher.push(item);
    } else if (item === item.toUpperCase()) {
      let shift13 = item;
      console.log(shift13);
      let findChar = alphabetUpperCase.findIndex((item) => item === shift13);
      console.log(findChar);
      caesarCipher.push(alphabetUpperCase[findChar + n]);
    } else if (item === item.toLowerCase()) {
      let shift13 = item;
      console.log(shift13);
      let findChar = alphabetLowerCase.findIndex((item) => item === shift13);
      console.log(findChar);
      caesarCipher.push(alphabetLowerCase[findChar + n]);
    }
  });
  return caesarCipher.join("");
}

console.log(rot13("10+2 is twelve.", 1));
