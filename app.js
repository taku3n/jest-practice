// toFizzBuzz()の結果をコンソールログに書き出す
const app = () => {
  for (let i = 1; i <= 100; i++) {
    console.log(toFizzBuzz(i));
  }
};

// 引数の数字に対しFizzBuzz判定をする
const toFizzBuzz = (num) => {
  if (num % 3 == 0 && num % 5 == 0) return "FizzBuzz";
  if (num % 3 == 0) return "Fizz";
  if (num % 5 == 0) return "Buzz";
  return num;
};

module.exports = app;
