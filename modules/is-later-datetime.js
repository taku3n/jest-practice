// 引数の2つの日付を比較し先の日付を判定する
const isLaterDatetime = (date1, date2) => {
  var message;
  if (date1.getTime() === date2.getTime()) {
    message = "同じ日付です";
  } else if (date1 > date2) {
    message = "date1の方が先の日付です";
  } else if (date1 < date2) {
    message = "date2の方が先の日付です";
  }
  return message;
};
