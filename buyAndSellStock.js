//You are given an array prices where prices[i] is the price of a given stock on the ith day.

//You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

//Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
//[7,1,5,3,6,4],
//[7,6,4,3,1]

function maxProfitForButAndSell(stockPricesPerDay) {
  let maxProfit = 0;
  let boughtStock = stockPricesPerDay[0];

  for (let i = 1; i < stockPricesPerDay.length; i++) {
    const stockPricePerDay = stockPricesPerDay[i];

    console.log(maxProfit, stockPricePerDay, boughtStock);

    if (stockPricePerDay - boughtStock > maxProfit) {
      maxProfit = stockPricePerDay - boughtStock;
    } else if (boughtStock > stockPricePerDay) {
      boughtStock = stockPricePerDay;
    }
  }

  return maxProfit;
}

console.log(maxProfitForButAndSell([7, 1, 5, 3, 6, 4]));
console.log(maxProfitForButAndSell([7, 6, 4, 3, 1]));
