document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const inputFild = document.getElementById("deposit-input");

    const newDepositAmount = parseFloat(inputFild.value);

    const withdrawTotal = document.getElementById("deposit-value");
    const previousAmount = parseFloat(withdrawTotal.innerText);

    const newwithdrawTotal = newDepositAmount + previousAmount;
    withdrawTotal.innerText = newwithdrawTotal;
    inputFild.value = "";

    //update balance
    const balanceTotal = document.getElementById("Balance-value");

    const prevTotalBalance = parseFloat(balanceTotal.innerText);
    const newTotalBalance = parseFloat(prevTotalBalance + newDepositAmount);

    balanceTotal.innerText = newTotalBalance;
  });

//withDraw

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const inputFild = document.getElementById("withdraw-input");
    const newWithdrawAmount = parseFloat(inputFild.value);
    const withdrawTotal = document.getElementById("withDraw-value");
    const previousAmount = parseFloat(withdrawTotal.innerText);

    const newWithdrawTotal = newWithdrawAmount + previousAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    inputFild.value = "";

    //update balance
    const balanceTotal = document.getElementById("Balance-value");

    const prevTotalBalance = parseFloat(balanceTotal.innerText);
    const newTotalBalance = parseFloat(prevTotalBalance - newWithdrawAmount);

    balanceTotal.innerText = newTotalBalance;
  });
