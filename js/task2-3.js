/**
 * Напиши фукцнию findLongestWord(string),
 * которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
 */
const findLongestWord = function (string) {
  // твой код
  let words = string.split(" ");
  let longestWord = words[0];

  for (const word of words) {
    // const isLongest = word.length > longestWord.length;
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'

// - решение в боте

// function findLongestWord(string = " ") {
//   // Write code under this line
//   let words = string.split(" ");
//   let longestWord = words[0];

//   for (const word of words) {
//     const isLongest = word.length > longestWord.length;
//     if (isLongest) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// console.log(findLongestWord("Google do a roll"));

// console.log(findLongestWord("May the force be with you"));
