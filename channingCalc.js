//cal.add(10).multiply(20).substract(20).divide(2).total

const cal = {
  total: 0,
  add: (num) => {
    cal.total += num;
    return cal;
  },
  substract: (num) => {
    cal.total -= num;
    return cal;
  },
  multiply: (num) => {
    cal.total *= num;
    return cal;
  },
  divide: (num) => {
    cal.total /= num;
    return cal;
  },
};


console.log(cal.add(10).multiply(20).substract(20).divide(2).total);