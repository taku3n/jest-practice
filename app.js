const toFizzBuzz = require("./modules/fizzbuzz");
const isLaterDatetime = require("./modules/is-later-datetime");

// FizzBuzz判定の結果をコンソールログに書き出す
const outputFizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    console.log(toFizzBuzz(i));
  }
};

// Datetimeを比較しどちらが先かの判定結果をコンソールログに書き出す
const outputLaterDatetime = () => {
  var date1 = new Date("2022/06/13");
  var date2 = new Date("2022/06/11");

  console.log(isLaterDatetime(date1, date2));
};

module.exports = outputFizzBuzz;
module.exports = outputLaterDatetime;
