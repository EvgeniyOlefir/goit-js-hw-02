/*
Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. 
Функция проверяет ее на содержание слов spam и sale. 
Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. 
Слова в строке могут быть в произвольном регистре.
*/
const checkForSpam = function (message, wordToFind) {
  // твой код
  console.log(message);
  return message.toLowerCase().includes(wordToFind)
    ? `Слово ${wordToFind} найдено`
    : `Слово ${wordToFind} не найдено`;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest technology news", "spam")); // false

console.log(checkForSpam("JavaScript weekly newsletter", "spam")); // false

console.log(checkForSpam("Get best sale offers now!", "spam")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?", "spam")); // true

// function checkForSpam(str) {
//   "use strict";
//   // Write code under this line
//   let message = str.toLowerCase().includes("spam") || str.toLowerCase().includes("sale");
//   return message;
// }

// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
