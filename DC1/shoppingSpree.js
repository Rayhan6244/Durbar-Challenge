function calculateRemainingMoney(totalMoney, cakeCost, donutCost) {
  // TODO: Implement the function
  const moneyAfterCake = totalMoney - cakeCost;
    
    if (moneyAfterCake < 0) {
        return moneyAfterCake;
    }
    
    return moneyAfterCake % donutCost;
}
