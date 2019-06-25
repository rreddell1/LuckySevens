function rollDice() {
	return Math.floor(Math.random() * 6) + 1;
}

function luckySevens() {
var startingBet = document.getElementById("bet").value;
var dice1 = 0;
var dice2 = 0;
var sumOfDice = 0;
var winAmount = 4;
var lossAmount= 1;
var rollCount = 0;
var highestWon = 0;
var currentMoney = startingBet;
var moneyAmounts = [startingBet];
var lastAmount = 0;
var newestAmount = 0;

if (startingBet <= 0) {
  alert("Please input a number greater than zero.");
  return false;
}

while (currentMoney > 0) {
  dice1 = rollDice();
  dice2 = rollDice();
  sumOfDice = dice1 + dice2;

  rollCount++;

  if (sumOfDice == 7) {
    currentMoney = currentMoney + winAmount; //add $4 winnings to current amount
    lastAmount = moneyAmounts[moneyAmounts.length - 1];
    newestAmount = lastAmount + winAmount;
    moneyAmounts.push(newestAmount); //push new money total to the array

  } else {
    currentMoney--; // subtract $1 from current amount
    lastAmount = moneyAmounts[moneyAmounts.length - 1];
    newestAmount = lastAmount - lossAmount;
    moneyAmounts.push(newestAmount);
  }

  rollCount = rollCount++;
}

var highestHeld = 0;

highestHeld = Math.max.apply(null, moneyAmounts);
highestMoneyRoll = moneyAmounts.indexOf(highestHeld) + 1; //added 1 since array starts at 0

if (highestMoneyRoll < 1) {
  highestMoneyRoll = 0;
}

document.getElementById("resultsSection").style.display = "block"; //Unhide results section

document.getElementById("startingBet").innerText = startingBet; //next four lines: Fill second column
document.getElementById("totalRolls").innerText = rollCount;
document.getElementById("highestAmount").innerText = highestHeld;
document.getElementById("rollCount@High").innerText = highestMoneyRoll;

return false;
}
