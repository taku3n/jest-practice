// 引数の数値からFizzBuzzを判定する
const toFizzBuzz = (num) => {
  if (isFizz(num) && isBuzz(num)) return "FizzBuzz";
  if (isFizz(num)) return "Fizz";
  if (isBuzz(num)) return "Buzz";
  return num;
};

// Fizzか判定をする
const isFizz = (num) => {
  return num % 3 == 0;
};

// Buzzか判定をする
const isBuzz = (num) => {
  return num % 5 == 0;
};

module.exports = toFizzBuzz;
