const toFizzBuzz = require("./modules/fizzbuzz");

// FizzBuzz判定の結果をコンソールログに書き出す
const app = () => {
  for (let i = 1; i <= 100; i++) {
    console.log(toFizzBuzz(i));
  }
};

// 引数のDatetimeを比較しどちらが先かの判定結果をコンソールログに書き出す
const compareDatetime = () => {
  var date1 = new Date("2022/06/13");
  var date2 = new Date("2022/06/11");

  if (date1.getTime() === date2.getTime()) {
    console.log("同じ日付です");
  } else if (date1 > date2) {
    console.log("date1の方が先の日付です");
  } else if (date1 < date2) {
    console.log("date2の方が先の日付です");
  }
};

module.exports = app;
module.exports = compareDatetime;
