// 引数の数値からFizzBuzzを判定する
const toFizzBuzz = (num) => {
  if (outOfRange(num))
    throw new RangeError("引数が不正です。1以上の整数のみ引数に指定可能です。");

  if (isFizz(num) && isBuzz(num)) return "FizzBuzz";
  if (isFizz(num)) return "Fizz";
  if (isBuzz(num)) return "Buzz";
  return num;
};

// toFizzBuzz()が受け取った引数が不正かどうかを確認する
const outOfRange = (num) => {
  if (!(typeof num === "number")) return true;
  if (Math.round(num) != num) return true;
  if (num < 1) return true;

  return false;
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
