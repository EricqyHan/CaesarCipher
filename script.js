let cipherTranslation = document.querySelector("#cipherShiftTranslated");
let cipherShift = document.querySelector(".cipherShift");
let inputString = document.querySelector(".inputWord");
document.querySelector("#decode").addEventListener("click", caesarCipher);
document.querySelector("#rot13").addEventListener("click", rot13);

function caesarCipher(message, n) {
  message = document.querySelector("#cipher").value;
  n = Number(document.querySelector("#cipher-number").value);

  let caesarCipher = [];
  // prettier-ignore
  const alphabetLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
  // prettier-ignore
  const alphabetUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
  // prettier-ignore
  let spChar = "/[!@#$%^&*()_+-=[]{};':\\|,.<>/?]+/";
  message = message.split("");
  console.log(message);
  message.forEach((item) => {
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
  inputString.textContent = message.join("");
  cipherShift.textContent = n;
  cipherTranslation.textContent = caesarCipher.join("");
}

function rot13(message) {
  message = document.querySelector("#cipher").value;
  n = Number(document.querySelector("#cipher-number").value);

  let caesarCipher = [];
  // prettier-ignore
  const alphabetLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
  // prettier-ignore
  const alphabetUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
  // prettier-ignore
  let spChar = "/[!@#$%^&*()_+-=[]{};':\\|,.<>/?]+/";
  message = message.split("");
  console.log(message);
  message.forEach((item) => {
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
      caesarCipher.push(alphabetUpperCase[findChar + 13]);
    } else if (item === item.toLowerCase()) {
      let shift13 = item;
      console.log(shift13);
      let findChar = alphabetLowerCase.findIndex((item) => item === shift13);
      console.log(findChar);
      caesarCipher.push(alphabetLowerCase[findChar + 13]);
    }
  });
  inputString.textContent = message.join("");
  cipherShift.textContent = 13;
  cipherTranslation.textContent = caesarCipher.join("");
}
