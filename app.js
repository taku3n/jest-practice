const toFizzBuzz = require("./modules/fizzbuzz");

// FizzBuzz判定の結果をコンソールログに書き出す
const app = () => {
  for (let i = 1; i <= 100; i++) {
    console.log(toFizzBuzz(i));
  }
};

module.exports = app;
