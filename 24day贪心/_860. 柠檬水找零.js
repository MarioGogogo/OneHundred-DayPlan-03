/**
|--------------------------------------------------
| 在柠檬水摊上，每一杯柠檬水的售价为 5 美元。顾客排队购买你的产品，
（按账单 bills 支付的顺序）一次购买一杯。

每位顾客只买一杯柠檬水，
然后向你付 5 美元、10 美元或 20 美元。你必须给每个顾客正确找零，
也就是说净交易是每位顾客向你支付 5 美元。

注意，一开始你手头没有任何零钱。
输入：bills = [5,5,5,10,20]
输出：true
输入：bills = [5,5,10,10,20]
输出：false
|--------------------------------------------------
*/
var lemonadeChange = function (bills) {
  //初始化
  let five = 0;
  let ten = 0;
  let twenty = 0;

  for (let i = 0; i < bills.length; i++) {
    const bill = bills[i];
    if (bill === 5) {
      five++;
    } else if (bill === 10) {
      ten++;
      if (five < 1) return false;
      five--;
    } else if (bill === 20) {
      //先消耗10元
      if (five > 0 && ten > 0) {
        ten--;
        five--;
        twenty++;
      } else if (five >= 3) {
        five -= 3;
        twenty;
      } else {
        return false;
      }
    }
  }
  return true;
};
